"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function ApplicationReadToggle({ id, isRead }: { id: string; isRead: boolean }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [pendingRead, setPendingRead] = useState(isRead);

  async function toggle() {
    const next = !pendingRead;
    setPendingRead(next);
    await fetch(`/api/admin/applications/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isRead: next }),
    });
    startTransition(() => router.refresh());
  }

  return (
    <Button size="sm" variant="outline" onClick={toggle} disabled={isPending}>
      {pendingRead ? "Mark unread" : "Mark read"}
    </Button>
  );
}