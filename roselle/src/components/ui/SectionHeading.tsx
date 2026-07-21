"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span
          className={`mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
            light ? "bg-white/15 text-white/90" : "bg-rose-100 text-rose-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-plum-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-white/75" : "text-plum-400"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
