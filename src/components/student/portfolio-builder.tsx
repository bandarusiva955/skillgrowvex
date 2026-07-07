"use client";

import { useState } from "react";
import { Save, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  technologies: string;
  link: string;
}

interface PortfolioBuilderProps {
  user: {
    firstName: string | null;
    lastName: string | null;
    bio: string | null;
    avatarUrl: string | null;
    githubUrl: string | null;
    linkedinUrl: string | null;
  };
  portfolio: {
    title: string | null;
    description: string | null;
    projects: unknown;
    isPublic: boolean;
    slug: string | null;
  } | null;
  certificates: { programName: string; score: number; certificateId: string }[];
}

export function PortfolioBuilder({ user, portfolio, certificates }: PortfolioBuilderProps) {
  const existingProjects = (portfolio?.projects as Project[]) || [];
  const [title, setTitle] = useState(portfolio?.title || `${user.firstName}'s Portfolio`);
  const [description, setDescription] = useState(portfolio?.description || user.bio || "");
  const [projects, setProjects] = useState<Project[]>(existingProjects);
  const [isPublic, setIsPublic] = useState(portfolio?.isPublic || false);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  function addProject() {
    setProjects([...projects, { title: "", description: "", technologies: "", link: "" }]);
  }

  function removeProject(index: number) {
    setProjects(projects.filter((_, i) => i !== index));
  }

  function updateProject(index: number, field: keyof Project, value: string) {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    setProjects(updated);
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/users/portfolio", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, projects, isPublic }),
      });
      if (!res.ok) throw new Error();
      setMessage("Portfolio saved successfully!");
    } catch {
      setMessage("Failed to save portfolio.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Portfolio Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="description">About</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="mt-1" />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} className="rounded" />
            Make portfolio publicly visible
          </label>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Projects</CardTitle>
          <Button variant="outline" size="sm" onClick={addProject}>
            <Plus className="mr-1 h-3 w-3" /> Add Project
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {projects.length === 0 ? (
            <p className="text-sm text-navy-500 text-center py-4">No projects added yet.</p>
          ) : (
            projects.map((project, index) => (
              <div key={index} className="rounded-lg border border-navy-100 p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-navy-500">Project {index + 1}</span>
                  <Button variant="ghost" size="icon" onClick={() => removeProject(index)}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
                <Input
                  placeholder="Project Title"
                  value={project.title}
                  onChange={(e) => updateProject(index, "title", e.target.value)}
                />
                <Textarea
                  placeholder="Description"
                  value={project.description}
                  onChange={(e) => updateProject(index, "description", e.target.value)}
                  rows={2}
                />
                <Input
                  placeholder="Technologies (comma-separated)"
                  value={project.technologies}
                  onChange={(e) => updateProject(index, "technologies", e.target.value)}
                />
                <Input
                  placeholder="Project Link (optional)"
                  value={project.link}
                  onChange={(e) => updateProject(index, "link", e.target.value)}
                />
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {certificates.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {certificates.map((cert) => (
                <div key={cert.certificateId} className="flex items-center justify-between text-sm">
                  <span className="font-medium">{cert.programName}</span>
                  <Badge variant="gold">{cert.score}%</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {message && (
        <p className={`text-sm ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
      <Button variant="gold" onClick={handleSave} disabled={saving}>
        <Save className="mr-2 h-4 w-4" />
        {saving ? "Saving..." : "Save Portfolio"}
      </Button>
    </div>
  );
}
