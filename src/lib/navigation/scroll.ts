/** Sticky header clearance for in-page section jumps */
export const HEADER_OFFSET_PX = 88;

export function scrollToTop(behavior: ScrollBehavior = "instant") {
  window.scrollTo({ top: 0, left: 0, behavior });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function scrollToId(
  id: string,
  behavior: ScrollBehavior = "smooth",
): boolean {
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;

  const top =
    el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

export function scrollToHash(
  hash: string,
  behavior: ScrollBehavior = "smooth",
): boolean {
  if (!hash || hash === "#") return false;
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  return scrollToId(id, behavior);
}

/** Same-page hash jump that updates the URL and scrolls reliably */
export function navigateToHash(hash: string) {
  const normalized = hash.startsWith("#") ? hash : `#${hash}`;
  const id = normalized.slice(1);
  if (!id) return;

  if (window.location.hash !== normalized) {
    window.history.pushState(null, "", `${window.location.pathname}${window.location.search}${normalized}`);
  }
  scrollToId(id, "smooth");
}

/**
 * Retry scroll until the target exists (tab panels / lazy sections).
 * Returns a cancel function.
 */
export function scrollToHashWhenReady(
  hash: string,
  behavior: ScrollBehavior = "smooth",
  maxAttempts = 40,
): () => void {
  let attempts = 0;
  let raf = 0;
  let cancelled = false;

  const tick = () => {
    if (cancelled) return;
    if (scrollToHash(hash, behavior) || attempts >= maxAttempts) return;
    attempts += 1;
    raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(() => requestAnimationFrame(tick));
  return () => {
    cancelled = true;
    cancelAnimationFrame(raf);
  };
}
