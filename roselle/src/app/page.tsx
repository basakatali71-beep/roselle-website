import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import AIAssistant from "@/components/landing/AIAssistant";
import Community from "@/components/landing/Community";
import Premium from "@/components/landing/Premium";
import FAQ from "@/components/landing/FAQ";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <AIAssistant />
      <Community />
      <Premium />
      <FAQ />
    </>
  );
}
