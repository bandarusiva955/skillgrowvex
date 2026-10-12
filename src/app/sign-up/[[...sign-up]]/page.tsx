import type { Metadata } from "next";
import { ClerkSignUp } from "@/components/auth/clerk-sign-up";

export const metadata: Metadata = {
  title: "Sign Up",
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center py-12 px-4">
      <ClerkSignUp />
    </div>
  );
}
