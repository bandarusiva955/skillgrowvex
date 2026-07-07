import { NextRequest, NextResponse } from "next/server";
import { syncUserFromClerk } from "@/lib/auth";
import { db } from "@/lib/db";

export async function PUT(req: NextRequest) {
  try {
    const user = await syncUserFromClerk();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const slug = body.title
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const portfolio = await db.portfolio.upsert({
      where: { userId: user.id },
      update: {
        title: body.title,
        description: body.description,
        projects: body.projects,
        isPublic: body.isPublic,
        slug: body.isPublic ? slug : null,
      },
      create: {
        userId: user.id,
        title: body.title,
        description: body.description,
        projects: body.projects,
        isPublic: body.isPublic,
        slug: body.isPublic ? slug : null,
      },
    });

    return NextResponse.json({ portfolio });
  } catch {
    return NextResponse.json({ error: "Save failed" }, { status: 500 });
  }
}
