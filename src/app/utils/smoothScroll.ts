"use client";

let currentAnimationId: number | null = null;

/**
 * Performs a visible, continuous smooth scroll animation to the target element
 * and updates the browser URL hash dynamically.
 */
export function smoothScrollTo(
  targetHref: string,
  duration?: number,
  onComplete?: () => void
): void {
  if (typeof window === "undefined") return;

  const id = targetHref.startsWith("#") ? targetHref.slice(1) : targetHref;

  let targetTop = 0;
  if (id !== "home" && id !== "hero" && id !== "" && id !== "/") {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80; // Fixed header height is 80px
    const rect = el.getBoundingClientRect();
    targetTop = Math.max(0, window.scrollY + rect.top - headerOffset);
  }

  // Update the browser URL dynamically
  if (id === "home" || id === "hero" || id === "" || id === "/") {
    window.history.replaceState(null, "", window.location.pathname);
  } else {
    window.history.replaceState(null, "", `#${id}`);
  }

  const startTop = window.scrollY;
  const distance = targetTop - startTop;

  // If already at or very close to target, return
  if (Math.abs(distance) < 2) {
    onComplete?.();
    return;
  }

  // Cancel any previously running animation
  if (currentAnimationId !== null) {
    cancelAnimationFrame(currentAnimationId);
    currentAnimationId = null;
  }

  // Calculate duration based on distance so the scroll is snappy and fluid
  const scrollDuration =
    duration ?? Math.min(Math.max(Math.abs(distance) * 0.35, 450), 650);

  const startTime = performance.now();

  // Cubic ease-in-out curve
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const cancelOnUserInteraction = () => {
    if (currentAnimationId !== null) {
      cancelAnimationFrame(currentAnimationId);
      currentAnimationId = null;
    }
    cleanupListeners();
  };

  const cleanupListeners = () => {
    window.removeEventListener("wheel", cancelOnUserInteraction);
    window.removeEventListener("touchstart", cancelOnUserInteraction);
  };

  window.addEventListener("wheel", cancelOnUserInteraction, { passive: true, once: true });
  window.addEventListener("touchstart", cancelOnUserInteraction, { passive: true, once: true });

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / scrollDuration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startTop + distance * easedProgress);

    if (progress < 1) {
      currentAnimationId = requestAnimationFrame(step);
    } else {
      currentAnimationId = null;
      cleanupListeners();
      onComplete?.();
    }
  };

  currentAnimationId = requestAnimationFrame(step);
}
