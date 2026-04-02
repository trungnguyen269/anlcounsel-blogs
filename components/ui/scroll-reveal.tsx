"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  distance = 24
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: reduceMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
