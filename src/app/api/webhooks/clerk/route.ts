import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { resolveRoleForClerkId } from "@/lib/auth";
import { notifyAdminNewSignup } from "@/lib/notify";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    return new Response("Webhook secret not configured", { status: 500 });
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  const eventType = evt.type;

  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;
    const email = email_addresses[0]?.email_address;

    if (!email) return new Response("No email", { status: 400 });

    const role = resolveRoleForClerkId(id);

    const existing = await db.user.findUnique({ where: { clerkId: id } });

    await db.user.upsert({
      where: { clerkId: id },
      update: {
        email,
        firstName: first_name,
        lastName: last_name,
        avatarUrl: image_url,
        ...(role === "SUPER_ADMIN" ? { role } : {}),
      },
      create: {
        clerkId: id,
        email,
        firstName: first_name,
        lastName: last_name,
        avatarUrl: image_url,
        role,
      },
    });

    if (eventType === "user.created" && !existing) {
      await notifyAdminNewSignup({
        name: [first_name, last_name].filter(Boolean).join(" ") || email,
        email,
        clerkId: id,
      }).catch(() => {});
    }
  }

  if (eventType === "user.deleted") {
    const { id } = evt.data;
    if (id) {
      await db.user.delete({ where: { clerkId: id } }).catch(() => {});
    }
  }

  return new Response("OK", { status: 200 });
}
