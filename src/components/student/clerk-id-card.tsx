"use client";

import { useState } from "react";
import { Copy, Check, KeyRound } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ClerkIdCard({ clerkId }: { clerkId: string }) {
  const [copied, setCopied] = useState(false);

  async function copyId() {
    await navigator.clipboard.writeText(clerkId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Card className="border-brand-gold/30 bg-gold-50/30">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <KeyRound className="h-4 w-4 text-brand-gold" />
          Your Clerk User ID
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-navy-600">
          Copy this ID into <code className="rounded bg-white px-1 text-xs">SUPER_ADMIN_ID</code> in{" "}
          <code className="rounded bg-white px-1 text-xs">.env</code> to get admin access, then restart the server.
        </p>
        <div className="flex items-center gap-2">
          <code className="flex-1 truncate rounded-lg border border-navy-200 bg-white px-3 py-2 text-xs">
            {clerkId}
          </code>
          <Button type="button" variant="outline" size="sm" onClick={copyId}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
