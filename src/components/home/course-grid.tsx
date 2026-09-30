"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Clock3, Layers3 } from "lucide-react";
import { COURSES, type CourseCategory } from "@/lib/academy-data";

const filters: Array<"All" | CourseCategory> = ["All", "AI", "Data", "Development", "Programming", "Career"];

export function CourseGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visibleCourses = filter === "All" ? COURSES : COURSES.filter((course) => course.category === filter);

  return (
    <div>
      <div className="academy-filter" role="tablist" aria-label="Course categories">
        {filters.map((item) => (
          <button key={item} type="button" role="tab" aria-selected={filter === item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>
      <div className="playing-cards-grid">
        {visibleCourses.map((course, i) => {
          const tilt = i % 2 === 0 ? -6 : 6;
          return (
            <div key={course.slug} className="playing-card course-playing-card" style={{ "--tilt": `${tilt}deg` } as React.CSSProperties}>
              <div className="playing-card-inner">
                <div className="playing-card-front">
                  <Image src={course.image} alt={course.title} fill sizes="220px" style={{ objectFit: "cover" }} />
                  <div className="playing-card-front-overlay">
                    <span>{course.category}</span>
                    <h3>{course.title}</h3>
                  </div>
                </div>
                <div className="playing-card-back">
                  <div className="playing-card-back-meta">
                    <span><Layers3 size={14} /> {course.level}</span>
                    <span><Clock3 size={14} /> {course.duration}</span>
                  </div>
                  <strong className="playing-card-price">{course.price}</strong>
                  <Link href={`/courses/${course.slug}`} className="academy-primary-button">
                    View course <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}