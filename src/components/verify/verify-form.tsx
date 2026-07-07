"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, ShieldX, Award, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { verifySchema } from "@/lib/validations";
import { formatDate } from "@/lib/utils";
import { z } from "zod";

type VerifyFormData = z.infer<typeof verifySchema>;

interface CertificateResult {
  studentName: string;
  programName: string;
  score: number;
  issuedAt: string;
  status: string;
  certificateId: string;
  duration: string;
  skillsCovered: string[];
}

interface VerifyFormProps {
  initialId?: string;
}

export function VerifyForm({ initialId }: VerifyFormProps) {
  const [result, setResult] = useState<CertificateResult | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyFormData>({
    resolver: zodResolver(verifySchema),
    defaultValues: { certificateId: initialId || "" },
  });

  async function onSubmit(data: VerifyFormData) {
    setLoading(true);
    setResult(null);
    setNotFound(false);

    try {
      const res = await fetch(`/api/verify?id=${encodeURIComponent(data.certificateId)}`);
      const json = await res.json();

      if (res.ok && json.certificate) {
        setResult(json.certificate);
      } else {
        setNotFound(true);
      }
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="certificateId">Certificate ID</Label>
              <div className="mt-2 flex gap-2">
                <Input
                  id="certificateId"
                  placeholder="SGV-2026-000001"
                  {...register("certificateId")}
                  className="font-mono"
                />
                <Button type="submit" variant="gold" disabled={loading}>
                  <Search className="h-4 w-4" />
                  {loading ? "..." : "Verify"}
                </Button>
              </div>
              {errors.certificateId && (
                <p className="mt-1 text-sm text-red-600">{errors.certificateId.message}</p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <ShieldCheck className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-green-800">
                      Certificate Verified
                    </h3>
                    <p className="text-sm text-green-600">This certificate is authentic and active.</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-navy-500" />
                    <div>
                      <p className="text-xs text-navy-500">Student Name</p>
                      <p className="font-semibold text-brand-navy">{result.studentName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-navy-500" />
                    <div>
                      <p className="text-xs text-navy-500">Program</p>
                      <p className="font-semibold text-brand-navy">{result.programName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-navy-500" />
                    <div>
                      <p className="text-xs text-navy-500">Issue Date</p>
                      <p className="font-semibold text-brand-navy">{formatDate(result.issuedAt)}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-navy-500">Score</p>
                    <p className="font-semibold text-brand-navy">{result.score}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-navy-500">Duration</p>
                    <p className="font-semibold text-brand-navy">{result.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-navy-500">Status</p>
                    <Badge variant="success">{result.status}</Badge>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs text-navy-500 mb-2">Skills Covered</p>
                  <div className="flex flex-wrap gap-1">
                    {result.skillsCovered.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {notFound && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6 text-center py-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <ShieldX className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-red-800">
                  Certificate Not Found
                </h3>
                <p className="mt-2 text-sm text-red-600">
                  The certificate ID you entered could not be verified. Please check the ID and try again.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
