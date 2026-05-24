"use client";

import { useEffect } from "react";

function easeInOutCubic(progress) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function getAnchorTarget(link) {
  const href = link.getAttribute("href");

  if (!href || !href.includes("#") || href.startsWith("mailto:")) {
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

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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

      const link = event.target.closest("a[href*='#']");

      if (!link) {
        return;
      }

      const target = getAnchorTarget(link);

      if (!target) {
        return;
      }

      event.preventDefault();

      const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
      const targetTop =
        target === document.body
          ? 0
          : target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
      const startTop = window.scrollY;
      const distance = targetTop - startTop;
      const duration = Math.min(1000, Math.max(620, Math.abs(distance) * 0.55));
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, startTop + distance * easeInOutCubic(progress));

        if (progress < 1) {
          requestAnimationFrame(animate);
          return;
        }

        if (link.hash) {
          history.pushState(null, "", link.hash);
        }
      };

      requestAnimationFrame(animate);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
