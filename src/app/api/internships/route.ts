import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category");
  const featured = req.nextUrl.searchParams.get("featured");

  const internships = await db.internship.findMany({
    where: {
      isActive: true,
      ...(category ? { category: category as never } : {}),
      ...(featured === "true" ? { isFeatured: true } : {}),
    },
    orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      shortDescription: true,
      duration: true,
      skills: true,
      isFeatured: true,
    },
  });

  return NextResponse.json({ internships });
}
