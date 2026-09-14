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
      <div className="academy-course-grid">
        {visibleCourses.map((course) => (
          <article className="academy-course-card" key={course.slug}>
            <div className="academy-course-image"><Image src={course.image} alt={`${course.title} course`} fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 25vw" /><span>{course.category}</span></div>
            <div className="academy-course-content"><div className="academy-course-meta"><span><Layers3 size={14} /> {course.level}</span><span><Clock3 size={14} /> {course.duration}</span></div><h3>{course.title}</h3><p>{course.description}</p><div className="academy-tech-list">{course.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="academy-course-footer"><strong>{course.price}</strong><Link href={`/courses/${course.slug}`} className="academy-card-link">View course <ArrowUpRight size={16} /></Link></div></div>
          </article>
  ))}
      </div>
    </div>
  );
}
