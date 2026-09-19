"use client";

import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  scrollToHashWhenReady,
  scrollToTop,
} from "@/lib/navigation/scroll";

/**
 * On route change: scroll to top, or to #hash / ?tab=+hash targets.
 * Fixes same-site redirects that land mid-page or miss section anchors.
 */
function RouteScrollManagerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPath = useRef(pathname);
  const searchKey = searchParams.toString();

  useLayoutEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const pathChanged = prevPath.current !== pathname;
    prevPath.current = pathname;

    if (hash) {
      // Instant on hard route change; smooth when only query/hash updates
      const behavior: ScrollBehavior = pathChanged ? "instant" : "smooth";
      return scrollToHashWhenReady(hash, behavior);
    }

    if (pathChanged) {
      scrollToTop("instant");
      const raf = requestAnimationFrame(() => scrollToTop("instant"));
      return () => cancelAnimationFrame(raf);
    }

    return undefined;
  }, [pathname, searchKey]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash) scrollToHashWhenReady(hash, "smooth");
    };

    const onPopState = () => {
      const hash = window.location.hash;
      if (hash) scrollToHashWhenReady(hash, "smooth");
      else scrollToTop("instant");
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return null;
}

export function RouteScrollManager() {
  return (
    <Suspense fallback={null}>
      <RouteScrollManagerInner />
    </Suspense>
  );
}
