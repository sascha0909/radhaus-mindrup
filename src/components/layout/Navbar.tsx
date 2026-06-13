"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Bike, Menu, X } from "lucide-react";
import { SHOP } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Bewertungen", href: "#bewertungen" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-sky-500 text-white group-hover:bg-sky-600 transition-colors">
              <Bike className="size-5" />
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-[15px] text-slate-900 tracking-tight">
                KAGU E-BIKES
              </span>
              <span className="block text-[11px] text-slate-500 font-normal">
                Moormerland
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SHOP.phoneTel}
              className="inline-flex items-center gap-2 h-10 px-5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              <Phone className="size-4" />
              {SHOP.phone}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-lg"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SHOP.phoneTel}
                className="mt-3 flex items-center justify-center gap-2 h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="size-5" />
                {SHOP.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
