"use client";

import { SignUp } from "@clerk/nextjs";

export function ClerkSignUp() {
  return (
    <SignUp
      routing="path"
      path="/sign-up"
      signInUrl="/sign-in"
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-premium-lg rounded-xl",
        },
      }}
    />
  );
}
