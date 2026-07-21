"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Sparkle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { communityStats } from "@/lib/constants";

const posts = [
  {
    tag: "PCOS",
    text: "Anyone else's cycle get way more regular after cutting sugar? Down to a 29-day average for the first time in years.",
    replies: 34,
  },
  {
    tag: "Postpartum",
    text: "3 months postpartum and my cycle still hasn't come back — is this normal while breastfeeding?",
    replies: 58,
  },
  {
    tag: "Perimenopause",
    text: "The mood tracking finally helped me see the pattern my doctor and I had been missing for months.",
    replies: 21,
  },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="You're not the only one"
          title="A community that gets it"
          description="Anonymous, judgment-free spaces to ask what you'd never ask out loud — and hear from people going through the exact same thing."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <GlassCard className="h-full p-7">
                <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
                  {post.tag}
                </span>
                <p className="mt-4 text-[15px] leading-relaxed text-plum-700">
                  {post.text}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm text-plum-400">
                  <MessageCircle className="h-4 w-4" />
                  {post.replies} replies
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <GlassCard hover={false} className="grid grid-cols-1 gap-8 p-10 sm:grid-cols-3">
            {communityStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-extrabold text-gradient sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-plum-500">{stat.label}</p>
              </div>
            ))}
          </GlassCard>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2 text-sm text-plum-500">
            <ShieldCheck className="h-4.5 w-4.5 text-rose-500" />
            Always anonymous
          </div>
          <div className="flex items-center gap-2 text-sm text-plum-500">
            <Sparkle className="h-4.5 w-4.5 text-rose-500" />
            Moderated 24/7
          </div>
        </div>
      </div>
    </section>
  );
}
