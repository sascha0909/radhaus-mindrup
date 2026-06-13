"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Award, Bike, Truck, Package, MessageCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const iconMap = {
  ShoppingCart,
  Award,
  Bike,
  Truck,
  Package,
  MessageCircle,
};

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mb-14 lg:mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Was wir für Sie tun
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4"
          >
            Unsere Leistungen
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-lg leading-relaxed">
            Von der Probefahrt bis zur Lieferung – wir begleiten Sie auf dem
            Weg zu Ihrem perfekten E-Bike.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                variants={scaleIn}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(14,165,233,0.12)" }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-5">
                  {Icon && <Icon className="size-6 text-sky-500" />}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2.5">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 mb-5">
            Noch Fragen zum richtigen E-Bike?
          </p>
          <a
            href={`tel:015205161641`}
            className="inline-flex items-center gap-2 h-12 px-7 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Einfach anrufen – wir beraten Sie!
          </a>
        </motion.div>
      </div>
    </section>
  );
}
