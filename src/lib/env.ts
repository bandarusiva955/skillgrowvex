const PLACEHOLDER_MARKERS = [
  "xxx",
  "placeholder",
  "your_",
  "pk_test_your",
  "sk_test_your",
];

function isRealCredential(value: string | undefined): boolean {
  if (!value) return false;
  const lower = value.toLowerCase();
  return !PLACEHOLDER_MARKERS.some((marker) => lower.includes(marker));
}

/**
 * Client-safe: true only for a real Clerk publishable key.
 * Placeholder keys (e.g. pk_test_placeholder) must not mount ClerkProvider.
 */
export function hasClerkPublishableKey(): boolean {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!key || !key.startsWith("pk_")) return false;
  if (!isRealCredential(key)) return false;
  // Real Clerk keys are much longer than template placeholders.
  if (key.length < 40) return false;
  return true;
}

/** Server-only: checks both publishable and secret keys. */
export function isClerkConfigured(): boolean {
  const secret = process.env.CLERK_SECRET_KEY;
  return Boolean(
    hasClerkPublishableKey() &&
      secret &&
      secret.startsWith("sk_") &&
      isRealCredential(secret) &&
      secret.length >= 40
  );
}

export function isDatabaseConfigured(): boolean {
  const url = process.env.DATABASE_URL;
  return Boolean(url && !url.includes("placeholder") && !url.includes("user:password@localhost"));
}

export function isCloudinaryConfigured(): boolean {
  return Boolean(
    process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET &&
      process.env.CLOUDINARY_CLOUD_NAME !== "your_cloud_name"
  );
}

export function getAppUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
}

export function requireEnv(name: string): string | null {
  const value = process.env[name];
  if (!value || value.includes("xxx") || value.includes("your_")) {
    return null;
  }
  return value;
}
