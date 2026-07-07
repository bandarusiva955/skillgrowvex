import Link from "next/link";
import { KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AuthSetupMessage({ mode }: { mode: "sign-in" | "sign-up" }) {
  return (
    <Card className="w-full max-w-md shadow-premium-lg">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
          <KeyRound className="h-6 w-6 text-amber-700" />
        </div>
        <CardTitle>
          {mode === "sign-in" ? "Sign in unavailable" : "Sign up unavailable"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-center text-sm text-navy-600">
        <p>
          Get free API keys from{" "}
          <a
            href="https://dashboard.clerk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold underline"
          >
            dashboard.clerk.com
          </a>{" "}
          and add them to{" "}
          <code className="rounded bg-navy-50 px-1.5 py-0.5 text-xs">.env</code>:
        </p>
        <ul className="text-left text-xs space-y-1 rounded-lg bg-navy-50 p-4 font-mono">
          <li>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...</li>
          <li>CLERK_SECRET_KEY=sk_test_...</li>
        </ul>
        <p className="text-xs text-navy-500">
          Restart the dev server after updating <code>.env</code>.
        </p>
        <Button variant="gold" asChild className="w-full">
          <Link href="/">Back to Home</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
