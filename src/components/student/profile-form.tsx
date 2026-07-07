"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profileSchema } from "@/lib/validations";
import { z } from "zod";

type ProfileFormData = z.infer<typeof profileSchema>;

interface ProfileFormProps {
  user: {
    firstName: string | null;
    lastName: string | null;
    bio: string | null;
    phone: string | null;
    linkedinUrl: string | null;
    githubUrl: string | null;
    email: string;
  };
}

export function ProfileForm({ user }: ProfileFormProps) {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      bio: user.bio || "",
      phone: user.phone || "",
      linkedinUrl: user.linkedinUrl || "",
      githubUrl: user.githubUrl || "",
    },
  });

  async function onSubmit(data: ProfileFormData) {
    setMessage("");
    try {
      const res = await fetch("/api/users/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setMessage("Profile updated successfully!");
    } catch {
      setMessage("Failed to update profile.");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>Email</Label>
            <Input value={user.email} disabled className="mt-1 bg-navy-50" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" {...register("firstName")} className="mt-1" />
              {errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" {...register("lastName")} className="mt-1" />
              {errors.lastName && <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" {...register("bio")} className="mt-1" rows={3} />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" {...register("phone")} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
            <Input id="linkedinUrl" {...register("linkedinUrl")} className="mt-1" placeholder="https://linkedin.com/in/..." />
          </div>
          <div>
            <Label htmlFor="githubUrl">GitHub URL</Label>
            <Input id="githubUrl" {...register("githubUrl")} className="mt-1" placeholder="https://github.com/..." />
          </div>
          {message && (
            <p className={`text-sm ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
          <Button type="submit" variant="gold" disabled={isSubmitting}>
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
