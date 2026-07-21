import { Mail, Clock, LifeBuoy, MessageSquareText, Apple } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import GradientBackground from "@/components/ui/GradientBackground";
import Button from "@/components/ui/Button";
import SupportFAQAccordion from "@/components/support/SupportFAQAccordion";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Support",
  description:
    "Get help with Roselle — contact our support team, browse frequently asked questions, and find answers fast.",
  path: "/support",
});

const supportFaqs = [
  {
    question: "How do I reset my cycle data?",
    answer:
      "Go to Settings → Cycle Data → Reset History. This clears logged cycles while keeping your account and preferences intact. This action cannot be undone, so we recommend exporting your data first.",
  },
  {
    question: "The app isn't syncing with Apple Health. What should I do?",
    answer:
      "Open the iOS Health app → Sharing → Apps → Roselle, and confirm all categories are toggled on. Then reopen Roselle and go to Settings → Apple Health → Reconnect. If the issue persists, restarting your device usually resolves sync delays.",
  },
  {
    question: "How do I cancel or manage my Premium subscription?",
    answer:
      "On your iPhone, open Settings → [your name] → Subscriptions → Roselle, then choose Cancel Subscription. Changes take effect at the end of your current billing period.",
  },
  {
    question: "I was charged but don't see Premium features unlocked.",
    answer:
      "Try Settings → Restore Purchases inside Roselle first. If your Premium features still aren't active within a few minutes, email us your Apple order confirmation and we'll resolve it right away.",
  },
  {
    question: "How do I delete my account and data permanently?",
    answer:
      "Go to Settings → Account → Delete Account. This permanently deletes your health data, account, and community activity within 30 days. You can also request deletion by emailing us directly.",
  },
  {
    question: "Can I transfer my data to a new phone?",
    answer:
      "Yes — if you're signed in with an account, your data syncs automatically to any device signed in with the same account. Otherwise, export your data from Settings → Export Data and import it on your new device.",
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <GradientBackground variant="soft" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="mb-5 inline-block rounded-full bg-rose-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-rose-700">
            We&rsquo;re here to help
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-plum-900 sm:text-5xl">
            Support
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-plum-400">
            Whatever question you have — big, small, or a little awkward — our team is
            genuinely happy to help.
          </p>
        </div>
      </section>

      <section className="relative pb-4 pt-4 sm:pb-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <GlassCard className="p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-plum-900">Email us</h3>
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="mt-2 block text-[15px] font-medium text-rose-600 hover:underline"
              >
                {siteConfig.supportEmail}
              </a>
            </GlassCard>

            <GlassCard className="p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-plum-900">Response time</h3>
              <p className="mt-2 text-[15px] text-plum-500">
                Within 24 hours on weekdays, usually much faster
              </p>
            </GlassCard>

            <GlassCard className="p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600">
                <LifeBuoy className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-plum-900">Help center</h3>
              <p className="mt-2 text-[15px] text-plum-500">
                Browse common questions below before reaching out
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl">
              Common support questions
            </h2>
            <p className="mt-4 text-[17px] text-plum-400">
              Can&rsquo;t find your answer? Email {siteConfig.supportEmail} and a real person
              will get back to you.
            </p>
          </div>

          <div className="mt-12">
            <SupportFAQAccordion faqs={supportFaqs} />
          </div>
        </div>
      </section>

      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <GlassCard hover={false} className="flex flex-col items-center gap-6 p-10 text-center sm:p-14">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-lavender-400">
              <MessageSquareText className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-plum-900 sm:text-3xl">
                Still need a hand?
              </h3>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-plum-400">
                Send us a message and include your device model and iOS version if it&rsquo;s a
                technical issue — it helps us solve it faster.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={`mailto:${siteConfig.supportEmail}`} size="md">
                Email Support
              </Button>
              <Button
                href={siteConfig.appStoreUrl}
                variant="secondary"
                size="md"
                icon={<Apple className="h-4 w-4" />}
              >
                View on the App Store
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
