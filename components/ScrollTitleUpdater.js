"use client";

import { useEffect } from "react";

export default function ScrollTitleUpdater() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            if (sectionId === "hero") {
              document.title = "Zakado";
            } else {
              document.title = `Zakado - ${formatTitle(sectionId)}`;
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const formatTitle = (str) =>
    str
      .replace(/-/g, " ") // ganti tanda '-' jadi spasi
      .replace(/\b\w/g, (c) => c.toUpperCase()); // kapitalisasi tiap kata

  return null;
}
