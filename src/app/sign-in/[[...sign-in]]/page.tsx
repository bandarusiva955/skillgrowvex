import { ClerkSignIn } from "@/components/auth/clerk-sign-in";

export default function SignInPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center py-12 px-4">
      <ClerkSignIn />
    </div>
  );
}
