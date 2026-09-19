"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Remounts with each navigation via app/template.tsx for a soft page enter.
 */
export function PageEnterTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
      }
      className="flex min-h-0 flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
