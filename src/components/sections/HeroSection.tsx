"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Award, Bike, Truck } from "lucide-react";
import { SHOP, TRUST_ITEMS } from "@/lib/constants";
import { heroText, fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap = {
  Award,
  Bike,
  Truck,
  MapPin,
};

function BicycleSVG() {
  return (
    <svg
      viewBox="0 0 520 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Rear wheel */}
      <circle cx="130" cy="220" r="90" stroke="currentColor" strokeWidth="9" />
      {/* Front wheel */}
      <circle cx="390" cy="220" r="90" stroke="currentColor" strokeWidth="9" />
      {/* Hub details */}
      <circle cx="130" cy="220" r="12" stroke="currentColor" strokeWidth="7" />
      <circle cx="390" cy="220" r="12" stroke="currentColor" strokeWidth="7" />
      {/* Bottom bracket */}
      <circle cx="265" cy="220" r="14" stroke="currentColor" strokeWidth="7" />
      {/* Chain stay */}
      <line x1="142" y1="220" x2="251" y2="220" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      {/* Seat stay */}
      <line x1="142" y1="212" x2="210" y2="135" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      {/* Seat tube */}
      <line x1="210" y1="135" x2="265" y2="220" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
      {/* Down tube */}
      <line x1="340" y1="122" x2="265" y2="220" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
      {/* Top tube */}
      <line x1="210" y1="135" x2="340" y2="122" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      {/* Fork */}
      <line x1="340" y1="122" x2="390" y2="215" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
      {/* Head tube */}
      <line x1="338" y1="122" x2="348" y2="92" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      {/* Stem */}
      <line x1="343" y1="92" x2="343" y2="68" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      {/* Handlebar */}
      <line x1="316" y1="68" x2="370" y2="68" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      {/* Drops */}
      <path d="M316 68 Q312 68 310 80 Q308 92 312 96" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M370 68 Q374 68 376 80 Q378 92 374 96" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* Seat post */}
      <line x1="207" y1="135" x2="207" y2="112" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      {/* Saddle */}
      <path d="M182 112 Q195 106 207 108 Q219 106 232 112" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
      {/* Spokes rear */}
      <line x1="130" y1="220" x2="170" y2="140" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="130" y1="220" x2="200" y2="210" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="130" y1="220" x2="170" y2="298" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="130" y1="220" x2="60" y2="260" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="130" y1="220" x2="60" y2="178" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="130" y1="220" x2="90" y2="140" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      {/* Spokes front */}
      <line x1="390" y1="220" x2="430" y2="140" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="390" y1="220" x2="460" y2="210" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="390" y1="220" x2="430" y2="298" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="390" y1="220" x2="320" y2="260" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="390" y1="220" x2="320" y2="178" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="390" y1="220" x2="350" y2="140" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      {/* Crank */}
      <line x1="265" y1="220" x2="245" y2="248" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <line x1="265" y1="220" x2="285" y2="192" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      {/* Pedals */}
      <line x1="237" y1="248" x2="253" y2="248" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="277" y1="192" x2="293" y2="192" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f8fafc]">
      {/* Diagonal blue background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(108deg, #f8fafc 52%, #0ea5e9 52%)",
        }}
      />

      {/* Decorative bicycle SVG */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-2xl z-10 pointer-events-none opacity-[0.07] text-sky-900 pr-4 lg:pr-0">
        <BicycleSVG />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20 lg:pt-32 lg:pb-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide uppercase">
              <svg className="size-3.5 text-orange-500 fill-orange-500" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {SHOP.rating} von 5 – {SHOP.reviewCount} Google-Bewertungen
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={heroText}
              className="font-heading text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight text-slate-900"
            >
              Ihr E-Bike-
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.span
              variants={heroText}
              className="block font-heading text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight text-sky-500"
            >
              Spezialist.
            </motion.span>
          </div>

          {/* Subline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg lg:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed"
          >
            E-Bikes kaufen, testen und liefern lassen – in Moormerland.
            Gazelle, Pegasus und mehr. Persönliche Beratung ohne Verkaufsdruck.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href={SHOP.phoneTel}
              className="inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-200"
            >
              <Phone className="size-5" />
              Jetzt anrufen
            </a>
            <a
              href={SHOP.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-14 px-8 border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white text-base font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MapPin className="size-5" />
              Route planen
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-6"
          >
            {TRUST_ITEMS.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div key={item.label} className="flex items-center gap-2 text-sm text-slate-500">
                  {Icon && <Icon className="size-4 text-sky-400" />}
                  <span className="font-medium">{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
