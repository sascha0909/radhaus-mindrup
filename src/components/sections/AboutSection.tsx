"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Award } from "lucide-react";
import { SHOP } from "@/lib/constants";
import { slideInLeft, fadeInUp, staggerContainer } from "@/lib/animations";

function CountUp({
  end,
  duration = 1400,
  decimals = 0,
}: {
  end: number;
  duration?: number;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
    </span>
  );
}

function PersonIllustration() {
  return (
    <svg
      viewBox="0 0 340 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Person body */}
      <circle cx="170" cy="80" r="50" stroke="#0ea5e9" strokeWidth="8" />
      {/* Torso */}
      <path d="M120 160 Q170 140 220 160 L240 280 H100 Z" stroke="#0ea5e9" strokeWidth="7" fill="none" strokeLinejoin="round" />
      {/* Left arm */}
      <path d="M120 170 Q90 200 75 240" stroke="#0ea5e9" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* Right arm */}
      <path d="M220 170 Q250 200 265 240" stroke="#0ea5e9" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* Legs */}
      <path d="M130 280 L115 370" stroke="#0ea5e9" strokeWidth="7" strokeLinecap="round" />
      <path d="M210 280 L225 370" stroke="#0ea5e9" strokeWidth="7" strokeLinecap="round" />
      {/* Feet */}
      <path d="M108 370 L130 370" stroke="#0ea5e9" strokeWidth="7" strokeLinecap="round" />
      <path d="M218 370 L240 370" stroke="#0ea5e9" strokeWidth="7" strokeLinecap="round" />
      {/* Wrench in hand */}
      <path
        d="M265 240 Q275 230 285 235 L310 260 Q315 268 308 275 L295 288 Q287 293 280 286 L255 261 Z"
        stroke="#f97316"
        strokeWidth="6"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="290" y1="270" x2="330" y2="310" stroke="#f97316" strokeWidth="7" strokeLinecap="round" />
      {/* Smile detail */}
      <path d="M152 88 Q170 102 188 88" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Eyes */}
      <circle cx="155" cy="72" r="5" fill="#0ea5e9" />
      <circle cx="185" cy="72" r="5" fill="#0ea5e9" />
    </svg>
  );
}

const STATS = [
  { value: SHOP.rating, suffix: "★", label: "Google-Bewertung", decimals: 1 },
  { value: SHOP.reviewCount, suffix: "", label: "Kundenstimmen", decimals: 0 },
];

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 lg:py-32 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={slideInLeft}
              className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Über uns
            </motion.p>
            <motion.h2
              variants={slideInLeft}
              className="font-heading text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
            >
              KAGU E-BIKES –
              <br />
              <span className="text-sky-500">Ihr Experte</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-600 text-lg leading-relaxed mb-5"
            >
              Bei KAGU E-BIKES in Moormerland finden Sie eine große Auswahl an
              hochwertigen Elektrofahrrädern. Von City-E-Bikes bis hin zu
              E-Mountainbikes – wir beraten Sie ehrlich und ohne Verkaufsdruck.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-slate-500 leading-relaxed mb-10"
            >
              Kommen Sie einfach vorbei und machen Sie eine Probefahrt. Ihr
              neues E-Bike liefern wir auch direkt zu Ihnen nach Hause.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-4 py-8 border-t border-slate-200"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-4xl lg:text-5xl font-bold text-sky-500 leading-none mb-1.5">
                    <CountUp end={stat.value} decimals={stat.decimals} />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
              <div className="text-center">
                <div className="font-heading text-3xl lg:text-4xl font-bold text-sky-500 leading-tight mb-1.5">
                  E-Bike
                </div>
                <div className="text-xs text-slate-500 font-medium">Experte</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-4">
              <a
                href={SHOP.phoneTel}
                className="inline-flex items-center gap-2 h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="size-4" />
                {SHOP.phone}
              </a>
              <a
                href={SHOP.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 border-2 border-slate-200 text-slate-600 hover:border-sky-300 hover:text-sky-600 font-semibold rounded-xl transition-all"
              >
                <MapPin className="size-4" />
                {SHOP.address.full}
              </a>
            </motion.div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative bg-sky-50 rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #0ea5e9 1.5px, transparent 1.5px)",
                    backgroundSize: "28px 28px",
                  }}
                />
              </div>
              {/* SVG illustration */}
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <PersonIllustration />
              </div>
              {/* Placeholder text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <p className="text-xs text-slate-400 mb-1">Foto folgt</p>
                  <p className="font-bold text-slate-800">Ihr KAGU E-BIKES Team</p>
                  <p className="text-xs text-slate-500">Hauptstraße 169, Moormerland</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-orange-500 text-white rounded-2xl px-5 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Award className="size-5" />
                <div>
                  <p className="font-bold text-sm">Ihr E-Bike-Experte</p>
                  <p className="text-xs opacity-80">in Moormerland</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
