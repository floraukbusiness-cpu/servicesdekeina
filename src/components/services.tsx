"use client";

import Image from "next/image";
import { MessageCircle, Baby, PawPrint, GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";

const services = [
  {
    id: "baby-sitting",
    icon: <Baby className="w-6 h-6" />,
    label: "Baby-sitting",
    tagline: "Votre enfant entre de bonnes mains.",
    description:
      "Je m'occupe de vos enfants à votre domicile avec autonomie et bienveillance : surveillance, jeux, aide aux devoirs. Je respecte vos consignes et je garde un œil attentif en toutes circonstances.",
    highlights: [
      "Garde à domicile en autonomie",
      "Respect des consignes parentales",
      "Surveillance et accompagnement",
      "Aide aux devoirs si besoin",
    ],
    image: "/keina-baby-sitting.jpg",
    imageAlt: "Keïna lisant une histoire à deux enfants sur un canapé",
    ctaMessage:
      "Bonjour Keïna, je suis intéressé(e) par vos services de baby-sitting. Pouvez-vous m'en dire plus ?",
    accent: "bg-sage-50",
  },
  {
    id: "garde-animaux",
    icon: <PawPrint className="w-6 h-6" />,
    label: "Garde d'animaux",
    tagline: "Vos animaux choyés comme à la maison.",
    description:
      "Chiens, chats, petits animaux : je veille sur vos compagnons pendant votre absence. Promenades, visites à domicile, nourrissage et compagnie, vos animaux ne seront pas seuls.",
    highlights: [
      "Promenades pour chiens",
      "Visites à domicile chats & autres",
      "Nourrissage et soins courants",
      "Présence rassurante et attentive",
    ],
    image: "/keina-pet-sitting.jpg",
    imageAlt: "Keïna donnant à manger à un chien golden retriever dans une cuisine",
    ctaMessage:
      "Bonjour Keïna, je suis intéressé(e) par vos services de garde d'animaux. Pouvez-vous m'en dire plus ?",
    accent: "bg-cream-50",
  },
  {
    id: "cours-anglais",
    icon: <GraduationCap className="w-6 h-6" />,
    label: "Cours d'anglais",
    tagline: "L'anglais courant, transmis avec naturel.",
    description:
      "Bilingue après 7 ans de scolarité en Angleterre, je maîtrise l'anglais comme une langue maternelle. Je propose des cours adaptés : adultes, collégiens et lycéens, en présentiel ou en visio.",
    highlights: [
      "7 ans de scolarité en Angleterre",
      "Anglais parlé au quotidien",
      "Cours pour adultes, collégiens & lycéens",
      "Présentiel ou visio, selon vos besoins",
    ],
    image: "/keina-cours-anglais.jpg",
    imageAlt: "Keïna donnant un cours d'anglais à un adolescent",
    ctaMessage:
      "Bonjour Keïna, je suis intéressé(e) par des cours d'anglais. Pouvez-vous m'en dire plus ?",
    accent: "bg-sage-50",
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-cream-50">
      <Reveal>
        <SectionHeading
          eyebrow="Mes services"
          title="Ce que je propose."
          description="Trois services pensés pour simplifier votre quotidien, avec sérieux et douceur."
        />
      </Reveal>

      <div className="mt-16 space-y-24">
        {services.map((service, i) => {
          const reversed = i % 2 !== 0;
          return (
            <Reveal key={service.id} delay={0.1}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  reversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className={reversed ? "[direction:ltr]" : ""}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-sage-900/10" />
                  </div>
                </div>

                {/* Text */}
                <div className={reversed ? "[direction:ltr]" : ""}>
                  <span className="inline-flex items-center gap-2 text-sage-600 mb-4">
                    {service.icon}
                    <span className="text-sm font-medium uppercase tracking-widest">
                      {service.label}
                    </span>
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-sage-900 text-balance">
                    {service.tagline}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {service.highlights.map((hl) => (
                      <li
                        key={hl}
                        className="flex items-start gap-2.5 text-sm text-slate-700"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-500 shrink-0" />
                        {hl}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <WhatsAppButton
                      message={service.ctaMessage}
                      size="default"
                    >
                      <MessageCircle size={16} />
                      Me contacter pour ce service
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
