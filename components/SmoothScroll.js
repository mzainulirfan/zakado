"use client";

import { useEffect } from "react";

function easeInOutCubic(progress) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function getAnchorTarget(link) {
  const href = link.getAttribute("href");

  if (
    !href ||
    !href.includes("#") ||
    href.startsWith("mailto:") ||
    link.target === "_blank" ||
    link.hasAttribute("download")
  ) {
    return null;
  }

  const url = new URL(href, window.location.href);

  if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) {
    return null;
  }

  if (!url.hash || url.hash === "#") {
    return document.body;
  }

  return document.getElementById(decodeURIComponent(url.hash.slice(1)));
}

function getClickedLink(target) {
  if (target instanceof Element) {
    return target.closest("a[href*='#']");
  }

  return target?.parentElement?.closest("a[href*='#']") ?? null;
}

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;
    let restoreScrollBehavior = null;

    const handleClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        reduceMotion.matches
      ) {
        return;
      }

      const link = getClickedLink(event.target);

      if (!link) {
        return;
      }

      const target = getAnchorTarget(link);

      if (!target) {
        return;
      }

      event.preventDefault();

      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }

      if (restoreScrollBehavior) {
        restoreScrollBehavior();
      }

      const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
      const targetTop =
        target === document.body
          ? 0
          : target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
      const startTop = window.scrollY;
      const distance = targetTop - startTop;
      const duration = Math.min(1200, Math.max(720, Math.abs(distance) * 0.7));
      const startTime = performance.now();
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;

      document.documentElement.style.scrollBehavior = "auto";
      restoreScrollBehavior = () => {
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
        restoreScrollBehavior = null;
      };

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo({
          top: startTop + distance * easeInOutCubic(progress),
          behavior: "auto",
        });

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
          return;
        }

        restoreScrollBehavior?.();
        frameId = 0;

        if (link.hash) {
          history.replaceState(null, "", link.hash);
        }
      };

      frameId = requestAnimationFrame(animate);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      restoreScrollBehavior?.();
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
