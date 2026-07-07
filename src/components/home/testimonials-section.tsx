import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { db } from "@/lib/db";

export async function TestimonialsSection() {
  let testimonials: Awaited<ReturnType<typeof db.testimonial.findMany>> = [];
  try {
    testimonials = await db.testimonial.findMany({
      where: { isActive: true },
      take: 6,
      orderBy: { createdAt: "desc" },
    });
  } catch {
    // Database not connected yet
  }

  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-brand-navy lg:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-navy-500">
            Hear from students who transformed their careers with SkillGrowVex.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl bg-white p-6 shadow-premium relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-gold/20" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={t.avatarUrl || undefined} />
                  <AvatarFallback>
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">{t.name}</p>
                  <p className="text-xs text-navy-500">
                    {t.role}{t.company ? ` at ${t.company}` : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
