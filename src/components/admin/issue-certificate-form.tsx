"use client";

import { useState } from "react";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IssueCertificateFormProps {
  userId: string;
  internshipId: string;
  studentName: string;
  programName: string;
  duration: string;
  skills: string[];
}

export function IssueCertificateForm({
  userId,
  internshipId,
  studentName,
  programName,
  duration,
  skills,
}: IssueCertificateFormProps) {
  const [score, setScore] = useState("85");
  const [loading, setLoading] = useState(false);

  async function handleIssue() {
    setLoading(true);
    try {
      const res = await fetch("/api/certificates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          internshipId,
          studentName,
          programName,
          duration,
          skillsCovered: skills,
          score: parseInt(score),
        }),
      });

      if (!res.ok) throw new Error();
      window.location.reload();
    } catch {
      alert("Failed to issue certificate");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-end gap-4 rounded-lg border border-navy-100 p-4">
      <div className="flex-1">
        <p className="font-medium text-brand-navy">{studentName}</p>
        <p className="text-sm text-navy-500">{programName} · {duration}</p>
      </div>
      <div>
        <Label htmlFor={`score-${userId}`}>Score (%)</Label>
        <Input
          id={`score-${userId}`}
          type="number"
          min={0}
          max={100}
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="mt-1 w-24"
        />
      </div>
      <Button variant="gold" onClick={handleIssue} disabled={loading}>
        <Award className="mr-2 h-4 w-4" />
        {loading ? "Issuing..." : "Issue Certificate"}
      </Button>
    </div>
  );
}
