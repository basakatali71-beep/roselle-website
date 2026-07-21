"use client";

import { motion } from "framer-motion";
import {
  CalendarHeart,
  Sparkles,
  Heart,
  Activity,
  Users,
  BellRing,
  Gem,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { features } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  CalendarHeart,
  Sparkles,
  Heart,
  Activity,
  Users,
  BellRing,
  Gem,
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Everything in one place"
          title="Built around your whole cycle"
          description="Seven ways Roselle helps you understand your body, without the noise of a dozen different apps."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            const isLast = i === features.length - 1;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={isLast ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <GlassCard className="group h-full p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 shadow-glass transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-plum-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-plum-400">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
