"use client";

import { motion } from "framer-motion";
import { Apple, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import GradientBackground from "@/components/ui/GradientBackground";
import PhoneMockup from "@/components/landing/PhoneMockup";
import RoselleLogo from "@/components/icons/RoselleLogo";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
      <GradientBackground variant="hero" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Copy column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 inline-flex justify-center lg:justify-start"
            >
              <RoselleLogo className="h-16 w-16 sm:h-20 sm:w-20" />
            </motion.div>

            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-plum-900 sm:text-6xl lg:text-[4.2rem]">
              AI-powered
              <br />
              <span className="text-gradient">period &amp; wellness</span>
              <br />
              companion
            </h1>

            <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-plum-400 lg:mx-0">
              Roselle learns your cycle, listens to your symptoms, and turns
              them into insights that actually feel like they&rsquo;re about you.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                href={siteConfig.appStoreUrl}
                size="lg"
                icon={<Apple className="h-5 w-5" />}
              >
                Download on the App Store
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-rose-500 text-rose-500" />
                ))}
              </div>
              <p className="text-sm font-medium text-plum-500">
                Loved by 2.4M+ people worldwide
              </p>
            </div>
          </motion.div>

          {/* Phone column */}
          <div className="flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
