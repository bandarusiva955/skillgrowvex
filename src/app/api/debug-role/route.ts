import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "not signed in" });

  const dbUser = await db.user.findUnique({ where: { clerkId: userId } });

  return NextResponse.json({
    clerkUserId: userId,
    envSuperAdminId: process.env.SUPER_ADMIN_ID || "NOT SET",
    match: userId === process.env.SUPER_ADMIN_ID,
    dbUserExists: !!dbUser,
    dbUserRole: dbUser?.role || "NO DB RECORD",
  });
}