"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Award,
  User,
  FileUser,
  Briefcase,
  Users,
  BarChart3,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";

const studentLinks = [
  { href: "/student", label: "Overview", icon: LayoutDashboard },
  { href: "/student/programs", label: "My Programs", icon: BookOpen },
  { href: "/student/assignments", label: "Assignments", icon: FileText },
  { href: "/student/certificates", label: "Certificates", icon: Award },
  { href: "/student/resume", label: "Resume Builder", icon: FileUser },
  { href: "/student/portfolio", label: "Portfolio", icon: Briefcase },
  { href: "/student/profile", label: "Profile", icon: User },
];

const adminLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/students", label: "Students", icon: Users },
  { href: "/admin/internships", label: "Internships", icon: GraduationCap },
  { href: "/admin/submissions", label: "Submissions", icon: ClipboardCheck },
  { href: "/admin/certificates", label: "Certificates", icon: Award },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
];

interface DashboardSidebarProps {
  type: "student" | "admin";
}

export function DashboardSidebar({ type }: DashboardSidebarProps) {
  const pathname = usePathname();
  const links = type === "admin" ? adminLinks : studentLinks;

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-navy-100 bg-white">
      <div className="flex h-16 items-center gap-2 border-b border-navy-100 px-6">
        <GraduationCap className="h-6 w-6 text-brand-gold" />
        <span className="font-display font-semibold text-brand-navy">
          {type === "admin" ? "Admin Panel" : "Student Portal"}
        </span>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive =
            pathname === link.href ||
            (link.href !== `/${type}` && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-brand-navy text-white"
                  : "text-navy-600 hover:bg-navy-50 hover:text-brand-navy"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
