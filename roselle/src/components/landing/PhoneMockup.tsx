"use client";

import { motion } from "framer-motion";
import { Sparkles, Droplet, Moon } from "lucide-react";

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="relative mx-auto w-[280px] sm:w-[310px]"
    >
      {/* Ambient glow behind phone */}
      <div className="absolute inset-0 -z-10 animate-float rounded-[4rem] bg-rose-400/30 blur-3xl" />

      {/* Phone frame */}
      <div className="relative rounded-[3rem] border-[6px] border-plum-900/90 bg-plum-900/90 p-2 shadow-glass-lg animate-float">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-rose-100 via-rose-50 to-white">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-plum-900" />

          {/* Screen content */}
          <div className="relative h-[540px] w-full px-5 pb-6 pt-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium text-plum-400">Good morning</p>
                <p className="font-display text-lg font-bold text-plum-900">Day 14 · Fertile</p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 shadow-sm">
                <Sparkles className="h-4 w-4 text-rose-500" />
              </div>
            </div>

            {/* Cycle ring */}
            <div className="relative mx-auto mt-6 flex h-44 w-44 items-center justify-center">
              <svg viewBox="0 0 200 200" className="absolute h-full w-full -rotate-90">
                <circle cx="100" cy="100" r="86" fill="none" stroke="#FFE1EC" strokeWidth="14" />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="86"
                  fill="none"
                  stroke="url(#ringGradient)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 86}
                  initial={{ strokeDashoffset: 2 * Math.PI * 86 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 86 * 0.35 }}
                  transition={{ duration: 1.6, delay: 0.8, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF9EC4" />
                    <stop offset="100%" stopColor="#C6285C" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-plum-900">86%</p>
                <p className="text-xs font-medium text-plum-400">cycle confidence</p>
              </div>
            </div>

            {/* Mini stat cards */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                <Droplet className="h-4 w-4 text-rose-500" />
                <p className="mt-1.5 text-[13px] font-semibold text-plum-900">Light flow</p>
                <p className="text-[11px] text-plum-400">Logged today</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                <Moon className="h-4 w-4 text-lavender-500" />
                <p className="mt-1.5 text-[13px] font-semibold text-plum-900">7h 42m</p>
                <p className="text-[11px] text-plum-400">Sleep quality: good</p>
              </div>
            </div>

            {/* AI chip */}
            <div className="mt-3 flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-500/10 to-lavender-400/10 p-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-lavender-400">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <p className="text-[12px] leading-snug text-plum-700">
                Your energy dips are common around ovulation — try a lighter workout today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
