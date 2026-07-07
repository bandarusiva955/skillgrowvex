import Link from "next/link";
import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCategory } from "@/lib/utils";
import { db } from "@/lib/db";

export default async function AdminInternshipsPage() {
  const internships = await db.internship.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { enrollments: true, assignments: true } },
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-brand-navy">Manage Internships</h1>
          <p className="text-navy-500 mt-1">{internships.length} programs total.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {internships.map((program) => (
          <Card key={program.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">{program.title}</CardTitle>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="gold">{formatCategory(program.category)}</Badge>
                    {program.isFeatured && <Badge variant="success">Featured</Badge>}
                    {!program.isActive && <Badge variant="destructive">Inactive</Badge>}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy-500 line-clamp-2 mb-4">{program.shortDescription}</p>
              <div className="flex items-center gap-4 text-xs text-navy-500">
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" /> {program._count.enrollments} enrolled
                </span>
                <span>{program._count.assignments} assignments</span>
                <span>{program.duration}</span>
              </div>
              <Button variant="outline" size="sm" className="mt-4" asChild>
                <Link href={`/programs/${program.slug}`}>View Program</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
