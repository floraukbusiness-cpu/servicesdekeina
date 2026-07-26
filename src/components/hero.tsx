"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream-50 overflow-hidden pt-24 pb-20">
      {/* Decorative background circles */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-sage-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 w-[500px] h-[500px] rounded-full bg-cream-200/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl w-full px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text column */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-600"
            >
              Secteur de Val d'Arry
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight text-sage-900"
            >
              Bonjour, <br />je suis <span className="text-sage-600 italic">Keïna</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-md text-balance"
            >
              Je propose du{" "}
              <strong className="font-bold italic text-sage-600">
                baby-sitting
              </strong>
              , de la{" "}
              <strong className="font-bold italic text-sage-600">
                garde d'animaux
              </strong>{" "}
              et des{" "}
              <strong className="font-bold italic text-sage-600">
                cours d'anglais
              </strong>
              .
              <br />
              Bilingue et sérieuse, je suis là pour que vous puissiez avoir
              l'esprit tranquille.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <WhatsAppButton
                size="lg"
                message="Bonjour Keïna, je voudrais en savoir plus sur vos services."
              >
                <MessageCircle size={18} />
                Me contacter sur WhatsApp
              </WhatsAppButton>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-sage-300 px-7 py-3.5 text-base font-medium text-sage-700 hover:bg-sage-50 transition-colors"
              >
                Voir mes services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-6"
            >
              {[
                { label: "Baby-sitting" },
                { label: "Garde d'animaux" },
                { label: "Cours d'anglais" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-500 shrink-0" />
                  {item.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 lg:w-96 xl:w-[420px]">
              {/* Card bg */}
              <div className="absolute inset-0 rounded-3xl bg-sage-200/40 rotate-3 scale-[1.02]" />
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                <Image
                  src="/WhatsApp_Image_2026-07-26_at_00.04.09.jpeg"
                  alt="Keïna Rauck, baby-sitter et prof d'anglais dans le secteur de Val d'Arry"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 420px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white rounded-2xl shadow-lg px-4 py-3 border border-sage-100">
                <p className="text-xs font-medium text-sage-600 uppercase tracking-wider">
                  Bilingue
                </p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">
                  7 ans en Angleterre
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
