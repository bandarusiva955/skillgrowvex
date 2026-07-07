"use client";

import { SignIn } from "@clerk/nextjs";

export function ClerkSignIn() {
  return (
    <SignIn
      routing="path"
      path="/sign-in"
      signUpUrl="/sign-up"
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-premium-lg rounded-xl",
        },
      }}
    />
  );
}
