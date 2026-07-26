"use client";

import { ShieldCheck, Clock, Star, Smile, BookOpen, Heart } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";

const reasons = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Fiable et ponctuelle",
    description:
      "Je suis sérieuse dans tout ce que je fais et je respecte mes engagements. Vous pouvez compter sur moi.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Expérience réelle",
    description:
      "J'ai déjà réalisé des gardes d'enfants en toute autonomie, en respectant les consignes et avec une surveillance attentive.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Bilingue anglais",
    description:
      "Après 7 ans de scolarité en Angleterre, l'anglais est ma deuxième langue maternelle — un vrai plus au quotidien.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "À l'aise avec les animaux",
    description:
      "J'aime les animaux et je prends soin d'eux avec attention : promenades, visites à domicile, accompagnement bienveillant.",
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Souriante et avenante",
    description:
      "Les enfants m'adorent. Mon naturel chaleureux met immédiatement à l'aise les petits comme les parents.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Disponible et réactive",
    description:
      "Lycéenne sérieuse, je sais gérer mes priorités. Je réponds rapidement et je m'adapte à vos besoins.",
  },
];

export function WhyTrust() {
  return (
    <Section id="confiance" className="bg-white">
      <Reveal>
        <SectionHeading
          eyebrow="Pourquoi me faire confiance"
          title="Une présence rassurante pour votre famille."
          description="Derrière chaque mission, une personne sérieuse, impliquée et bienveillante."
          align="center"
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="rounded-2xl border border-sage-100 bg-cream-50 p-6 hover:shadow-md hover:border-sage-200 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sage-100 text-sage-700 mb-4">
                {item.icon}
              </span>
              <h3 className="font-serif text-lg font-semibold text-sage-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
