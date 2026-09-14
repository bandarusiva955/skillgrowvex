import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/about",
  "/programs(.*)",
  "/courses(.*)",
  "/payment(.*)",
  "/pricing(.*)",
  "/projects(.*)",
  "/career-roadmap(.*)",
  "/faq(.*)",
  "/resume-review(.*)",
  "/student-success(.*)",
  "/apply(.*)",
  "/verify(.*)",
  "/contact",
  "/privacy",
  "/terms",
  "/sitemap.xml",
  "/robots.txt",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
  "/api/verify(.*)",
  "/api/contact",
  "/api/internships(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/__clerk/:path*",
    "/(api|trpc)(.*)",
  ],
};
