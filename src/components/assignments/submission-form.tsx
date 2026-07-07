"use client";

import { useState, useRef } from "react";
import { Upload, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Assignment {
  id: string;
  title: string;
  description: string;
  weekNumber: number;
  maxScore: number;
  isFinal: boolean;
  allowedTypes: string[];
}

interface ExistingSubmission {
  id: string;
  status: string;
  score: number | null;
  feedback: string | null;
  submittedAt: string;
  fileName: string;
}

interface SubmissionFormProps {
  assignment: Assignment;
  existingSubmission?: ExistingSubmission | null;
}

export function SubmissionForm({ assignment, existingSubmission }: SubmissionFormProps) {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("assignmentId", assignment.id);

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Upload failed");
        return;
      }

      setMessage("Submission uploaded successfully!");
      window.location.reload();
    } catch {
      setMessage("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  const statusColors: Record<string, "success" | "warning" | "destructive" | "secondary"> = {
    APPROVED: "success",
    SUBMITTED: "warning",
    UNDER_REVIEW: "warning",
    REJECTED: "destructive",
    RESUBMIT: "destructive",
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">
            Week {assignment.weekNumber}: {assignment.title}
          </CardTitle>
          {assignment.isFinal && <Badge variant="gold">Final Project</Badge>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-navy-500">{assignment.description}</p>
        <p className="text-xs text-navy-400">
          Allowed: {assignment.allowedTypes.join(", ")} · Max score: {assignment.maxScore}
        </p>

        {existingSubmission ? (
          <div className="rounded-lg border border-navy-100 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-navy-500" />
              <span className="text-sm font-medium">{existingSubmission.fileName}</span>
              <Badge variant={statusColors[existingSubmission.status] || "secondary"}>
                {existingSubmission.status.replace("_", " ")}
              </Badge>
            </div>
            {existingSubmission.score !== null && (
              <p className="text-sm">Score: <span className="font-semibold">{existingSubmission.score}%</span></p>
            )}
            {existingSubmission.feedback && (
              <p className="text-sm text-navy-500">Feedback: {existingSubmission.feedback}</p>
            )}
            <p className="text-xs text-navy-400">
              Submitted: {new Date(existingSubmission.submittedAt).toLocaleDateString()}
            </p>
            {(existingSubmission.status === "REJECTED" || existingSubmission.status === "RESUBMIT") && (
              <div className="pt-2">
                <input
                  ref={fileRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.zip,.xlsx,.pbix,.png,.jpg,.jpeg"
                  onChange={handleUpload}
                />
                <Button variant="outline" size="sm" onClick={() => fileRef.current?.click()} disabled={uploading}>
                  {uploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                  Resubmit
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <input
              ref={fileRef}
              type="file"
              className="hidden"
              accept=".pdf,.zip,.xlsx,.pbix,.png,.jpg,.jpeg"
              onChange={handleUpload}
            />
            <Button
              variant="gold"
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
            >
              {uploading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading...</>
              ) : (
                <><Upload className="mr-2 h-4 w-4" /> Upload Submission</>
              )}
            </Button>
          </div>
        )}

        {message && (
          <p className={`text-sm ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
