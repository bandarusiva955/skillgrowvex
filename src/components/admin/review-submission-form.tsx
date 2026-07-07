"use client";

import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ReviewSubmissionFormProps {
  submissionId: string;
  maxScore: number;
}

export function ReviewSubmissionForm({ submissionId, maxScore }: ReviewSubmissionFormProps) {
  const [score, setScore] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReview(status: "APPROVED" | "REJECTED" | "RESUBMIT") {
    if (!score && status === "APPROVED") return;
    setLoading(true);

    try {
      const res = await fetch("/api/submissions/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId,
          score: parseInt(score) || 0,
          feedback,
          status,
        }),
      });

      if (!res.ok) throw new Error();
      window.location.reload();
    } catch {
      alert("Failed to submit review");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-lg border border-navy-100 p-4 space-y-3">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor={`score-${submissionId}`}>Score (max {maxScore})</Label>
          <Input
            id={`score-${submissionId}`}
            type="number"
            min={0}
            max={maxScore}
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor={`feedback-${submissionId}`}>Feedback</Label>
          <Textarea
            id={`feedback-${submissionId}`}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={2}
            className="mt-1"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant="default"
          size="sm"
          onClick={() => handleReview("APPROVED")}
          disabled={loading}
        >
          <CheckCircle className="mr-1 h-3 w-3" /> Approve
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleReview("RESUBMIT")}
          disabled={loading}
        >
          <RotateCcw className="mr-1 h-3 w-3" /> Request Resubmit
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => handleReview("REJECTED")}
          disabled={loading}
        >
          <XCircle className="mr-1 h-3 w-3" /> Reject
        </Button>
      </div>
    </div>
  );
}
