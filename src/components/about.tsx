"use client";

import Image from "next/image";
import { MapPin, Languages } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";

const timeline = [
  {
    year: "2013 – 2020",
    title: "Scolarité en Angleterre",
    description:
      "7 ans de scolarité complète en Angleterre. L'anglais fait partie intégrante de ma vie — pas une langue apprise, une langue vécue.",
  },
  {
    year: "2024",
    title: "Brevet des collèges",
    description: "Je l'ai obtenu au Collège Simone Veil de Villers-Bocage.",
  },
  {
    year: "2025",
    title: "Baccalauréat en cours",
    description:
      "Je suis au Lycée François de Malherbe à Caen, spécialités Français et Mathématiques. Diplôme prévu en 2026.",
  },
];

const qualities = [
  "Souriante et avenante",
  "Autonome et fiable",
  "Sens des responsabilités",
  "Rigueur et ponctualité",
  "À l'aise avec le public",
  "Apprend rapidement",
];

export function About() {
  return (
    <Section id="profil" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <Reveal>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 rounded-2xl bg-sage-100 -z-10" />
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-xl max-w-sm mx-auto lg:mx-0">
              <Image
                src="/WhatsApp_Image_2026-07-26_at_00.04.09.jpeg"
                alt="Keïna Rauck, jeune bilingue passionnée"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            {/* Language badge */}
            <div className="absolute -right-2 sm:-right-6 top-8 bg-white rounded-2xl shadow-lg px-4 py-3 border border-sage-100 max-w-[160px]">
              <div className="flex items-center gap-2 text-sage-700 mb-1">
                <Languages size={15} />
                <span className="text-xs font-semibold uppercase tracking-wider">Bilingue</span>
              </div>
              <p className="text-xs text-slate-600">Français — Anglais</p>
            </div>
            {/* Zone badge */}
            <div className="absolute -right-2 sm:-right-6 bottom-8 bg-white rounded-2xl shadow-lg px-4 py-3 border border-sage-100 max-w-[160px]">
              <div className="flex items-center gap-2 text-sage-700 mb-1">
                <MapPin size={15} />
                <span className="text-xs font-semibold uppercase tracking-wider">Zone</span>
              </div>
              <p className="text-xs text-slate-600">Secteur de Val d'Arry</p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Qui je suis"
              title="Une jeune femme sérieuse, passionnée et bilingue."
              description="Je m'appelle Keïna, j'ai 17 ans. Après 7 ans passés en Angleterre, je suis revenue en France avec un bagage unique : une vraie maîtrise de l'anglais, de l'autonomie, et l'envie de m'investir dans ce que je fais."
            />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 space-y-4">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="flex gap-4 group"
                >
                  <div className="flex flex-col items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-sage-500 mt-1.5 shrink-0" />
                    <span className="w-px flex-1 bg-sage-200 mt-1" />
                  </div>
                  <div className="pb-6 last:pb-0">
                    <span className="text-xs font-medium text-sage-600 uppercase tracking-wider">
                      {item.year}
                    </span>
                    <p className="font-serif text-base font-semibold text-sage-900 mt-0.5">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 pt-8 border-t border-sage-100">
              <p className="text-xs font-medium uppercase tracking-widest text-sage-600 mb-3">
                Ce qui me définit
              </p>
              <div className="flex flex-wrap gap-2">
                {qualities.map((q) => (
                  <span
                    key={q}
                    className="inline-block rounded-full border border-sage-200 bg-sage-50 px-3 py-1 text-xs font-medium text-sage-700"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
