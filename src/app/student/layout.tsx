import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { syncUserFromClerk } from "@/lib/auth";

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await syncUserFromClerk();
  if (!user) redirect("/sign-in");

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar type="student" />
      <div className="flex-1 flex flex-col">
        <div className="flex h-14 items-center justify-between border-b border-navy-100 px-6 lg:px-8">
          <h1 className="text-sm font-medium text-navy-500 lg:hidden">Student Portal</h1>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden sm:block text-sm text-navy-600">
              {user.firstName} {user.lastName}
            </span>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        <div className="flex-1 p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
}
