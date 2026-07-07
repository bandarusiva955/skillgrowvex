import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { db } from "@/lib/db";
import { formatCategory } from "@/lib/utils";

export async function GET() {
  try {
    await requireAdmin();

    const enrollments = await db.enrollment.findMany({
      include: { internship: { select: { category: true, title: true } } },
    });

    const categoryMap = new Map<string, number>();
    enrollments.forEach((e) => {
      const cat = formatCategory(e.internship.category);
      categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
    });

    const enrollmentsByCategory = Array.from(categoryMap.entries()).map(
      ([name, count]) => ({ name, count })
    );

    const submissions = await db.submission.groupBy({
      by: ["status"],
      _count: true,
    });

    const submissionsByStatus = submissions.map((s) => ({
      name: s.status.replace("_", " "),
      value: s._count,
    }));

    const monthlyMap = new Map<string, number>();
    enrollments.forEach((e) => {
      const month = new Date(e.enrolledAt).toLocaleString("en-US", {
        month: "short",
        year: "2-digit",
      });
      monthlyMap.set(month, (monthlyMap.get(month) || 0) + 1);
    });

    const monthlyEnrollments = Array.from(monthlyMap.entries()).map(
      ([month, count]) => ({ month, count })
    );

    const programMap = new Map<string, number>();
    enrollments.forEach((e) => {
      programMap.set(
        e.internship.title,
        (programMap.get(e.internship.title) || 0) + 1
      );
    });

    const topPrograms = Array.from(programMap.entries())
      .map(([name, enrollments]) => ({ name, enrollments }))
      .sort((a, b) => b.enrollments - a.enrollments)
      .slice(0, 5);

    return NextResponse.json({
      enrollmentsByCategory,
      submissionsByStatus,
      monthlyEnrollments,
      topPrograms,
    });
  } catch {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
}
