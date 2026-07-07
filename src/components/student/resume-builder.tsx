"use client";

import { useState } from "react";
import { Save, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileDropzone } from "@/components/ui/file-dropzone";

interface ResumeBuilderProps {
  user: {
    firstName: string | null;
    lastName: string | null;
    email: string;
    linkedinUrl: string | null;
    githubUrl: string | null;
  };
  resume: {
    summary: string | null;
    skills: string[];
    experience: unknown;
    education: unknown;
    projects: unknown;
    fileUrl: string | null;
    fileName: string | null;
    fileType: string | null;
    fileSize: number | null;
  } | null;
  certificates: {
    programName: string;
    skillsCovered: string[];
    score: number;
    issuedAt: string;
  }[];
}

export function ResumeBuilder({ user, resume, certificates }: ResumeBuilderProps) {
  const [summary, setSummary] = useState(resume?.summary || "");
  const [skills, setSkills] = useState(
    resume?.skills?.join(", ") ||
      certificates.flatMap((c) => c.skillsCovered).join(", ")
  );
  const [uploadedFileName, setUploadedFileName] = useState(resume?.fileName || null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(resume?.fileUrl || null);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  async function handleResumeUpload(file: File) {
    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/users/resume", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Failed to upload resume.");
        return;
      }

      setUploadedFileName(data.resume.fileName);
      setUploadedFileUrl(data.resume.fileUrl);
      setMessage("Resume file uploaded successfully!");
    } catch {
      setMessage("Failed to upload resume.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/users/resume", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          summary,
          skills: skills.split(",").map((s) => s.trim()).filter(Boolean),
        }),
      });
      if (!res.ok) throw new Error();
      setMessage("Resume saved successfully!");
    } catch {
      setMessage("Failed to save resume.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Resume</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-navy-500">
            Drag and drop your resume file here, or click to browse. Supported formats: PDF, DOC, DOCX.
          </p>
          <FileDropzone
            label="Drop your resume here"
            hint="PDF, DOC, or DOCX — up to 10MB"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            uploading={uploading}
            currentFileName={uploadedFileName}
            onFileSelect={handleResumeUpload}
            onClear={() => {
              setUploadedFileName(null);
              setUploadedFileUrl(null);
            }}
          />
          {uploadedFileUrl && !uploadedFileUrl.startsWith("local://") && (
            <Button variant="outline" size="sm" asChild>
              <a href={uploadedFileUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View uploaded resume
              </a>
            </Button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resume Preview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 border-l-4 border-brand-gold pl-4">
          <div>
            <h2 className="text-xl font-bold text-brand-navy">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-navy-500">{user.email}</p>
            {user.linkedinUrl && (
              <p className="text-sm text-brand-gold">{user.linkedinUrl}</p>
            )}
          </div>
          {uploadedFileName && (
            <div>
              <h3 className="font-semibold text-brand-navy text-sm uppercase tracking-wide">
                Uploaded File
              </h3>
              <p className="text-sm text-navy-600 mt-1">{uploadedFileName}</p>
            </div>
          )}
          {summary && (
            <div>
              <h3 className="font-semibold text-brand-navy text-sm uppercase tracking-wide">Summary</h3>
              <p className="text-sm text-navy-600 mt-1">{summary}</p>
            </div>
          )}
          {skills && (
            <div>
              <h3 className="font-semibold text-brand-navy text-sm uppercase tracking-wide">Skills</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                {skills.split(",").map((s) => s.trim()).filter(Boolean).map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          )}
          {certificates.length > 0 && (
            <div>
              <h3 className="font-semibold text-brand-navy text-sm uppercase tracking-wide">Certifications</h3>
              <ul className="mt-2 space-y-2">
                {certificates.map((cert, i) => (
                  <li key={i} className="text-sm text-navy-600">
                    <span className="font-medium">{cert.programName}</span>
                    <span className="text-navy-400"> — Score: {cert.score}% — {new Date(cert.issuedAt).getFullYear()}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Edit Resume Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows={4}
              className="mt-1"
              placeholder="Write a brief professional summary..."
            />
          </div>
          <div>
            <Label htmlFor="skills">Skills (comma-separated)</Label>
            <Input
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="mt-1"
              placeholder="Python, SQL, Power BI, Data Analysis..."
            />
          </div>
          {message && (
            <p className={`text-sm ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
          <div className="flex gap-2">
            <Button variant="gold" onClick={handleSave} disabled={saving}>
              <Save className="mr-2 h-4 w-4" />
              {saving ? "Saving..." : "Save Resume"}
            </Button>
            <Button variant="outline" onClick={() => window.print()}>
              <Download className="mr-2 h-4 w-4" /> Print / Export
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
