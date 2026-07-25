export const siteConfig = {
  name: "Roselle",
  tagline: "AI-powered period & wellness companion",
  description:
    "Roselle is the AI-powered period and wellness companion that learns your cycle, understands your symptoms, and helps you feel at home in your body — every single day.",
  url: "https://roselle.app",
  appStoreUrl: "https://apps.apple.com/app/roselle",
  supportEmail: "support@roselle.app",
  contactEmail: "hello@roselle.app",
  privacyEmail: "privacy@roselle.app",
  twitter: "https://twitter.com/roselleapp",
  instagram: "https://instagram.com/roselleapp",
  companyName: "Başak Hicret",
  companyAddress: "548 Market Street, PMB 62819, San Francisco, CA 94104, USA",
  lastUpdated: "July 21, 2026",
};

export const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: `mailto:${siteConfig.contactEmail}` },
];

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "AI Assistant", href: "#ai-assistant" },
  { label: "Community", href: "#community" },
  { label: "Premium", href: "#premium" },
  { label: "FAQ", href: "#faq" },
];

export type Feature = {
  key: string;
  title: string;
  description: string;
  icon: string;
};

export const features: Feature[] = [
  {
    key: "cycle",
    title: "Cycle Tracking",
    description:
      "Log periods, ovulation, and flow in seconds. Roselle predicts your next cycle with precision that gets smarter every month.",
    icon: "CalendarHeart",
  },
  {
    key: "ai",
    title: "AI Insights",
    description:
      "Your personal AI reads patterns across your cycle, sleep, and symptoms to surface insights you'd never spot on your own.",
    icon: "Sparkles",
  },
  {
    key: "mood",
    title: "Mood Tracking",
    description:
      "A gentle daily check-in connects your emotional patterns to your hormonal cycle, so mood swings finally make sense.",
    icon: "Heart",
  },
  {
    key: "symptoms",
    title: "Symptoms",
    description:
      "Track over 40 symptoms from cramps to migraines. Roselle flags patterns worth mentioning to your doctor.",
    icon: "Activity",
  },
  {
    key: "community",
    title: "Community",
    description:
      "A private, anonymous space to ask questions, share experiences, and realize you are never the only one going through it.",
    icon: "Users",
  },
  {
    key: "reminders",
    title: "Reminders",
    description:
      "Smart, quiet nudges for periods, pills, water, and self-care — timed around your cycle, not a generic clock.",
    icon: "BellRing",
  },
  {
    key: "premium",
    title: "Premium",
    description:
      "Unlock advanced predictions, unlimited AI conversations, and deep health reports with a Roselle Premium membership.",
    icon: "Gem",
  },
];

export const faqs = [
  {
    question: "Is Roselle free to use?",
    answer:
      "Yes. Roselle's core cycle tracking, symptom logging, and community features are free forever. Roselle Premium unlocks advanced AI insights, unlimited assistant conversations, and detailed health reports.",
  },
  {
    question: "How does the AI Assistant work?",
    answer:
      "Roselle's AI Assistant looks at your logged cycle data, symptoms, and mood to answer questions in plain language — like why you might be more tired this week, or when your next period is likely to start. It's designed to support, not replace, your relationship with your doctor.",
  },
  {
    question: "Is my data private?",
    answer:
      "Always. Your health data is encrypted on your device and in transit, never sold to advertisers, and never shared with third parties without your explicit consent. You can export or delete your data at any time from Settings.",
  },
  {
    question: "Can I use Roselle without an account?",
    answer:
      "Yes. Roselle works fully offline with local, on-device storage. Creating an account is optional and only needed if you want to sync across devices or back up your data to iCloud.",
  },
  {
    question: "Does Roselle work with Apple Health?",
    answer:
      "Yes. Roselle can securely sync cycle, sleep, and activity data with Apple Health so everything stays in one connected picture of your wellness.",
  },
  {
    question: "How accurate are the predictions?",
    answer:
      "Roselle's predictions improve with every cycle you log. Most users see highly accurate predictions after just two to three cycles, and accuracy continues to improve over time as the AI learns your unique patterns.",
  },
  {
    question: "How do I cancel Premium?",
    answer:
      "You can cancel anytime through your Apple ID subscription settings. Your Premium features remain active until the end of your current billing period, and your data is never deleted when you cancel.",
  },
];

export const communityValues = [
  {
    title: "Built for women",
    description: "Every feature is shaped around real cycles, real symptoms, and real conversations — not generic health data.",
    icon: "HeartHandshake",
  },
  {
    title: "Privacy by design",
    description: "Your health data is encrypted end to end and never sold or shared with advertisers. Ever.",
    icon: "ShieldCheck",
  },
  {
    title: "Grounded in care",
    description: "Developed alongside women's health guidance so every insight feels thoughtful, never clinical.",
    icon: "Sparkles",
  },
];

export const premiumFeatures = [
  "Unlimited AI Assistant conversations",
  "Advanced cycle & fertility predictions",
  "Deep symptom pattern reports",
  "Exportable doctor-ready health summaries",
  "Priority, ad-free experience",
  "Early access to new features",
];
