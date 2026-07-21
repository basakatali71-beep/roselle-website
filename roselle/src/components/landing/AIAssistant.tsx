"use client";

import { motion } from "framer-motion";
import { Sparkles, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBackground from "@/components/ui/GradientBackground";

const chatBubbles = [
  {
    from: "user",
    text: "Why am I so tired this week?",
  },
  {
    from: "ai",
    text: "You're on day 21 — right after ovulation, progesterone rises fast and often brings fatigue. Your sleep logs show it's 20% lower than usual too. A short walk and an earlier bedtime tend to help most people in this phase.",
  },
  {
    from: "user",
    text: "When should I expect my next period?",
  },
  {
    from: "ai",
    text: "Based on your last 6 cycles, I'd expect it to start around June 14th, give or take a day.",
  },
];

export default function AIAssistant() {
  return (
    <section id="ai-assistant" className="relative overflow-hidden py-24 text-white sm:py-32">
      <GradientBackground variant="dark" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Your cycle, explained"
              title="An AI Assistant that actually knows your body"
              description="Ask Roselle anything — from why your skin is breaking out to when your energy will bounce back. Every answer is grounded in your own logged data, not a generic article."
              align="left"
              light
            />

            <div className="mt-10 space-y-4">
              {[
                "Understands your unique cycle history",
                "Explains symptoms in plain, honest language",
                "Available anytime, completely private",
              ].map((point) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Sparkles className="h-3.5 w-3.5 text-rose-300" />
                  </div>
                  <p className="text-white/80">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chat mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-dark relative rounded-4xl p-6 shadow-glass-lg sm:p-8"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-lavender-400">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">Roselle AI</p>
                <p className="text-xs text-white/50">Always learning your patterns</p>
              </div>
            </div>

            <div className="mt-5 max-h-[340px] space-y-4 overflow-y-auto pr-1">
              {chatBubbles.map((bubble, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`flex ${bubble.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed ${
                      bubble.from === "user"
                        ? "bg-white/15 text-white"
                        : "bg-gradient-to-br from-rose-500/25 to-lavender-500/20 text-white/90"
                    }`}
                  >
                    {bubble.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-full bg-white/10 px-4 py-3">
              <input
                disabled
                placeholder="Ask about your cycle..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600">
                <Send className="h-3.5 w-3.5 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
