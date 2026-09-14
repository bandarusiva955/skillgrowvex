"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { applicationSchema } from "@/lib/validations";
import { INTERNSHIP_PLANS } from "@/lib/constants";
import { z } from "zod";

type ApplicationData = z.infer<typeof applicationSchema>;

const STEPS = ["Personal Info", "Professional Details", "Links & Submit"];

export function ApplicationForm() {
  const searchParams = useSearchParams();
  const defaultPlan = searchParams.get("plan") || "";
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ApplicationData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      preferredInternship: defaultPlan,
      agreeToTerms: undefined,
    },
  });

  const stepFields: (keyof ApplicationData)[][] = [
    ["fullName", "email", "phone", "gender", "dateOfBirth", "college", "branch", "graduationYear", "city", "state"],
    ["preferredInternship", "skills", "programmingLanguages", "experienceLevel", "careerGoal"],
    ["githubUrl", "linkedinUrl", "portfolioUrl", "message", "agreeToTerms"],
  ];

  async function nextStep() {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  async function onSubmit(data: ApplicationData) {
    setLoading(true);
    setError("");

    const message = [
      `Preferred Plan: ${data.preferredInternship}`,
      `Phone: ${data.phone}`,
      `Gender: ${data.gender}`,
      `DOB: ${data.dateOfBirth}`,
      `College: ${data.college} (${data.branch})`,
      `Graduation: ${data.graduationYear}`,
      `Location: ${data.city}, ${data.state}`,
      `Experience: ${data.experienceLevel}`,
      `Skills: ${data.skills || "N/A"}`,
      `Languages: ${data.programmingLanguages || "N/A"}`,
      `Career Goal: ${data.careerGoal}`,
      `GitHub: ${data.githubUrl || "N/A"}`,
      `LinkedIn: ${data.linkedinUrl || "N/A"}`,
      `Portfolio: ${data.portfolioUrl || "N/A"}`,
      `Message: ${data.message || "N/A"}`,
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          subject: `Internship Application - ${data.preferredInternship}`,
          message,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Failed to submit application. Please try again or contact support.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-success-500/30 bg-success-50 p-10 text-center dark:bg-success-500/10"
      >
        <CheckCircle className="mx-auto h-16 w-16 text-success-500" />
        <h2 className="mt-4 font-display text-2xl font-bold text-success-700 dark:text-success-500">
          Application Submitted Successfully!
        </h2>
        <p className="mt-2 text-navy-600 dark:text-navy-300">
          Our team will review your application and contact you within 24–48 hours.
        </p>
        <Button variant="gradient" className="mt-6" asChild>
          <Link href="/sign-up">Create Student Account</Link>
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-premium-lg dark:border-navy-700 dark:bg-navy-900">
      <div className="mb-8 flex justify-between">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                i <= step ? "bg-brand-gradient text-white" : "bg-navy-100 text-navy-400 dark:bg-navy-800"
              }`}
            >
              {i + 1}
            </div>
            <span className="mt-2 hidden text-xs font-medium text-navy-500 sm:block">{label}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" {...register("fullName")} className="mt-1" />
                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" {...register("email")} className="mt-1" />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" {...register("phone")} className="mt-1" />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
              </div>
              <div>
                <Label htmlFor="gender">Gender *</Label>
                <select id="gender" {...register("gender")} className="mt-1 flex h-11 w-full rounded-lg border border-navy-200 bg-white px-3 text-sm dark:border-navy-700 dark:bg-navy-950">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>}
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} className="mt-1" />
                {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>}
              </div>
              <div>
                <Label htmlFor="college">College *</Label>
                <Input id="college" {...register("college")} className="mt-1" />
                {errors.college && <p className="mt-1 text-sm text-red-600">{errors.college.message}</p>}
              </div>
              <div>
                <Label htmlFor="branch">Branch *</Label>
                <Input id="branch" {...register("branch")} className="mt-1" />
                {errors.branch && <p className="mt-1 text-sm text-red-600">{errors.branch.message}</p>}
              </div>
              <div>
                <Label htmlFor="graduationYear">Graduation Year *</Label>
                <Input id="graduationYear" {...register("graduationYear")} placeholder="2026" className="mt-1" />
                {errors.graduationYear && <p className="mt-1 text-sm text-red-600">{errors.graduationYear.message}</p>}
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input id="city" {...register("city")} className="mt-1" />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Input id="state" {...register("state")} className="mt-1" />
                {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
              <div>
                <Label htmlFor="preferredInternship">Preferred Internship *</Label>
                <select id="preferredInternship" {...register("preferredInternship")} className="mt-1 flex h-11 w-full rounded-lg border border-navy-200 bg-white px-3 text-sm dark:border-navy-700 dark:bg-navy-950">
                  <option value="">Select Plan</option>
                  {INTERNSHIP_PLANS.map((p) => (
                    <option key={p.id} value={p.id}>{p.name} — {p.currency}{p.price}</option>
                  ))}
                </select>
                {errors.preferredInternship && <p className="mt-1 text-sm text-red-600">{errors.preferredInternship.message}</p>}
              </div>
              <div>
                <Label htmlFor="skills">Skills</Label>
                <Input id="skills" {...register("skills")} placeholder="Data Analysis, Excel, Python..." className="mt-1" />
              </div>
              <div>
                <Label htmlFor="programmingLanguages">Programming Languages</Label>
                <Input id="programmingLanguages" {...register("programmingLanguages")} placeholder="Python, SQL, JavaScript..." className="mt-1" />
              </div>
              <div>
                <Label htmlFor="experienceLevel">Experience Level *</Label>
                <select id="experienceLevel" {...register("experienceLevel")} className="mt-1 flex h-11 w-full rounded-lg border border-navy-200 bg-white px-3 text-sm dark:border-navy-700 dark:bg-navy-950">
                  <option value="">Select</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                {errors.experienceLevel && <p className="mt-1 text-sm text-red-600">{errors.experienceLevel.message}</p>}
              </div>
              <div>
                <Label htmlFor="careerGoal">Career Goal *</Label>
                <Textarea id="careerGoal" {...register("careerGoal")} rows={3} className="mt-1" placeholder="Describe your career aspirations..." />
                {errors.careerGoal && <p className="mt-1 text-sm text-red-600">{errors.careerGoal.message}</p>}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
              <div>
                <Label htmlFor="githubUrl">GitHub Profile</Label>
                <Input id="githubUrl" {...register("githubUrl")} placeholder="https://github.com/username" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                <Input id="linkedinUrl" {...register("linkedinUrl")} placeholder="https://linkedin.com/in/username" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="portfolioUrl">Portfolio Website</Label>
                <Input id="portfolioUrl" {...register("portfolioUrl")} placeholder="https://yourportfolio.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message">Additional Message</Label>
                <Textarea id="message" {...register("message")} rows={3} className="mt-1" />
              </div>
              <label className="flex items-start gap-3 rounded-lg border border-navy-100 p-4 dark:border-navy-700">
                <input type="checkbox" {...register("agreeToTerms")} className="mt-1" />
                <span className="text-sm text-navy-600 dark:text-navy-300">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary-500 underline">Terms & Conditions</Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary-500 underline">Privacy Policy</Link>
                </span>
              </label>
              {errors.agreeToTerms && <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>}
            </motion.div>
          )}
        </AnimatePresence>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        <div className="mt-8 flex justify-between">
          {step > 0 ? (
            <Button type="button" variant="outline" onClick={() => setStep((s) => s - 1)}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          ) : (
            <div />
          )}

          {step < STEPS.length - 1 ? (
            <Button type="button" variant="gradient" onClick={nextStep}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" variant="gradient" disabled={loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Apply Now
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
