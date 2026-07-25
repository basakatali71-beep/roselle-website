import Link from "next/link";
import { Instagram, Twitter, Mail } from "lucide-react";
import RoselleLogo from "@/components/icons/RoselleLogo";
import { footerLinks, siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-rose-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <RoselleLogo className="h-9 w-9" withWordmark />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-plum-400">
              {siteConfig.tagline}. Built for every body, every cycle, every day.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Roselle on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-600 transition-colors hover:bg-rose-100"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href={siteConfig.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Roselle on Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-600 transition-colors hover:bg-rose-100"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                aria-label="Email Roselle"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-600 transition-colors hover:bg-rose-100"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-plum-400">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-plum-600 transition-colors hover:text-rose-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-plum-400">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-[15px] text-plum-600">
              <li>
                <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-rose-600">
                  {siteConfig.supportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-rose-100 pt-8 sm:flex-row">
          <p className="text-sm text-plum-400">
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <p className="text-sm text-plum-400">
            Roselle is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
