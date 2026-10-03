import { db } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApplicationReadToggle } from "@/components/admin/application-read-toggle";

export default async function AdminApplicationsPage() {
  const messages = await db.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  const unreadCount = messages.filter((m) => !m.isRead).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Applications & Enquiries</h1>
        <p className="text-navy-500 mt-1">
          {messages.length} total · {unreadCount} unread
        </p>
      </div>

      <div className="space-y-4">
        {messages.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-navy-500">
              No applications or enquiries yet.
            </CardContent>
          </Card>
        ) : (
          messages.map((msg) => (
            <Card key={msg.id} className={!msg.isRead ? "border-primary-400" : undefined}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-base">{msg.subject}</CardTitle>
                    <p className="text-sm text-navy-500 mt-1">
                      {msg.name} · {msg.email}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={msg.isRead ? "secondary" : "warning"}>
                      {msg.isRead ? "Read" : "New"}
                    </Badge>
                    <ApplicationReadToggle id={msg.id} isRead={msg.isRead} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap rounded-md bg-navy-50 dark:bg-navy-900 p-4 text-sm text-navy-700 dark:text-navy-300 font-sans">
                  {msg.message}
                </pre>
                <p className="mt-3 text-xs text-navy-400">
                  Submitted {new Date(msg.createdAt).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}