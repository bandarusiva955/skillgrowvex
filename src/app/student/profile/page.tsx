import { auth } from "@clerk/nextjs/server";
import { ProfileForm } from "@/components/student/profile-form";
import { ClerkIdCard } from "@/components/student/clerk-id-card";
import { syncUserFromClerk } from "@/lib/auth";

export default async function StudentProfilePage() {
  const { userId } = await auth();
  const user = await syncUserFromClerk();
  if (!user || !userId) return null;

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Profile</h1>
        <p className="text-navy-500 mt-1">Manage your personal information and social links.</p>
      </div>
      <ClerkIdCard clerkId={userId} />
      <ProfileForm user={user} />
    </div>
  );
}
