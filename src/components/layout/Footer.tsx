import { Phone, MapPin, Clock, Bike, ExternalLink } from "lucide-react";
import { SHOP } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-sky-500">
                <Bike className="size-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                KAGU E-BIKES
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Ihr persönlicher E-Bike-Spezialist in Moormerland. Gazelle,
              Pegasus und mehr – mit ehrlicher Beratung.
            </p>
            <div className="mt-5 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="size-4 text-orange-400 fill-orange-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1.5 text-sm text-slate-400">
                {SHOP.rating} ({SHOP.reviewCount} Bewertungen)
              </span>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Kontakt & Anfahrt
            </h3>
            <div className="space-y-3.5">
              <a
                href={SHOP.phoneTel}
                className="flex items-center gap-3 text-sky-400 hover:text-sky-300 transition-colors group"
              >
                <Phone className="size-4 shrink-0 text-sky-500" />
                <span className="font-semibold">{SHOP.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="size-4 shrink-0 text-slate-500 mt-0.5" />
                <div>
                  <p className="text-sm">{SHOP.address.street}</p>
                  <p className="text-sm">{SHOP.address.city}</p>
                </div>
              </div>
              <a
                href={SHOP.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-sky-400 hover:text-sky-300 transition-colors"
              >
                Route planen
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Öffnungszeiten
            </h3>
            <div className="space-y-2.5">
              {SHOP.hours.map((h) => (
                <div key={h.days} className="flex items-start gap-3">
                  <Clock className="size-4 shrink-0 text-slate-500 mt-0.5" />
                  <div className="flex justify-between w-full gap-4">
                    <span className="text-sm text-slate-400">{h.days}</span>
                    <span
                      className={`text-sm font-medium ${
                        h.closed ? "text-red-400/70" : "text-white"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} KAGU E-BIKES. Alle Rechte vorbehalten.</p>
          <a href="#impressum" className="hover:text-slate-300 transition-colors">
            Impressum
          </a>
        </div>
      </div>
    </footer>
  );
}
