"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 480);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          aria-label="Cuộn lên đầu trang"
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-beige bg-beige text-ink shadow-card hover:border-beigeDark hover:bg-beigeDark"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
          type="button"
          onClick={handleClick}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17V7M12 7L7 12M12 7L17 12"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
