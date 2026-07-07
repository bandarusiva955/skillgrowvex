"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EnrollButtonProps {
  internshipId: string;
}

export function EnrollButton({ internshipId }: EnrollButtonProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function handleEnroll() {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ internshipId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Enrollment failed");
        return;
      }
      router.push("/student/programs");
    } catch {
      setMessage("Enrollment failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <SignedIn>
        <Button variant="gold" size="lg" onClick={handleEnroll} disabled={loading}>
          {loading ? "Enrolling..." : "Enroll Now"}
        </Button>
        {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
      </SignedIn>
      <SignedOut>
        <Button variant="gold" size="lg" asChild>
          <Link href="/sign-up">Sign Up to Enroll</Link>
        </Button>
      </SignedOut>
    </div>
  );
}
