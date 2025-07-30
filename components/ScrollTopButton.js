// components/ScrollTopButton.js
import React, { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-6 z-50 p-3 rounded-full bg-yellow-700 text-white shadow-lg hover:bg-yellow-800 transition ${
        visible ? "block" : "hidden"
      }`}
      aria-label="Kembali ke atas"
    >
      <i className="bx bx-chevron-up text-2xl"></i>
    </button>
  );
};

export default ScrollTopButton;
