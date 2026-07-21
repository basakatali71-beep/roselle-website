"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import RoselleLogo from "@/components/icons/RoselleLogo";
import Button from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-nav shadow-glass" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Roselle home">
          <RoselleLogo className="h-9 w-9" withWordmark />
        </Link>

        {isLanding && (
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-plum-600 transition-colors hover:text-rose-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="hidden lg:flex">
          <Button href={siteConfig.appStoreUrl} size="sm" icon={<ArrowUpRight className="h-4 w-4" />}>
            Download
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-plum-900 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden glass-nav lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {isLanding &&
                navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-3 text-base font-medium text-plum-700 hover:bg-rose-100/60"
                  >
                    {link.label}
                  </a>
                ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-rose-200/60 pt-4">
                <Link href="/support" className="rounded-xl px-3 py-2 text-sm text-plum-500 hover:text-rose-600">
                  Support
                </Link>
                <Link href="/privacy" className="rounded-xl px-3 py-2 text-sm text-plum-500 hover:text-rose-600">
                  Privacy
                </Link>
                <Link href="/terms" className="rounded-xl px-3 py-2 text-sm text-plum-500 hover:text-rose-600">
                  Terms
                </Link>
              </div>
              <Button href={siteConfig.appStoreUrl} size="md" className="mt-3 w-full">
                Download on the App Store
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
