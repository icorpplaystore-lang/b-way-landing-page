"use client";

import { PageEnterTransition } from "@/components/navigation/PageEnterTransition";

/** Next.js template remounts on navigation — drives page enter animation. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageEnterTransition>{children}</PageEnterTransition>;
}
