import { Resend } from "resend";

export async function notifyAdminNewSignup(data: {
  name: string;
  email: string;
  clerkId: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || process.env.ADMIN_EMAIL;

  if (!apiKey || !to || apiKey.includes("xxx") || apiKey.includes("placeholder")) {
    return;
  }

  const resend = new Resend(apiKey);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  await resend.emails.send({
    from: "SkillGrowVex Academy <onboarding@resend.dev>",
    to,
    subject: `New student registered: ${data.name}`,
    html: `
      <h2>New student registration</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Clerk ID:</strong> ${data.clerkId}</p>
      <p><a href="${appUrl}/admin/students">View all students in admin panel</a></p>
    `,
  });
}
