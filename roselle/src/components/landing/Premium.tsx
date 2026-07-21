"use client";

import { motion } from "framer-motion";
import { Check, Gem } from "lucide-react";
import Button from "@/components/ui/Button";
import { premiumFeatures, siteConfig } from "@/lib/constants";

export default function Premium() {
  return (
    <section id="premium" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-5xl bg-rose-gradient p-10 shadow-glass-lg sm:p-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                <Gem className="h-6 w-6 text-white" />
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Go deeper with
                <br />
                Roselle Premium
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85">
                Unlock the full power of your AI companion — unlimited
                conversations, deeper predictions, and reports worth bringing
                to your next appointment.
              </p>
              <Button
                href={siteConfig.appStoreUrl}
                variant="dark"
                size="lg"
                className="mt-8 !bg-white !text-rose-700 hover:!bg-rose-50"
              >
                Try Premium free for 7 days
              </Button>
            </div>

            <ul className="space-y-4">
              {premiumFeatures.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-md"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/25">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-[15px] leading-snug text-white">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
