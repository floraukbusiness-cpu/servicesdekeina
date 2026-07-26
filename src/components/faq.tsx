"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Dans quelle zone intervenez-vous ?",
    a: "J'interviens dans le secteur de Val d'Arry et ses alentours. Contactez-moi par WhatsApp avec votre localisation et nous verrons ensemble si c'est possible.",
  },
  {
    q: "Quels âges d'enfants gardez-vous ?",
    a: "Je garde des enfants de tout âge, dès lors qu'ils ne nécessitent pas de soins médicaux spécifiques. Parlez-moi de votre situation et nous trouverons ce qui convient.",
  },
  {
    q: "Vous occupez-vous de quels animaux ?",
    a: "Principalement des chiens (promenades, visites à domicile) et des chats (visites, nourrissage). Pour d'autres animaux, n'hésitez pas à m'en parler.",
  },
  {
    q: "Les cours d'anglais se font comment ?",
    a: "En présentiel à votre domicile ou au mien dans le secteur de Val d'Arry, ou en visio selon votre préférence. Je m'adapte au niveau et aux objectifs de chaque élève.",
  },
  {
    q: "Quel est votre niveau d'anglais exactement ?",
    a: "J'ai été scolarisée 7 ans en Angleterre. L'anglais est ma deuxième langue maternelle : je le parle, l'écris et le comprends comme une native.",
  },
  {
    q: "Comment réserver ou se renseigner ?",
    a: "Tout passe par WhatsApp. C'est simple, rapide et direct. Cliquez sur le bouton de contact, présentez-vous et décrivez votre besoin, je vous réponds rapidement.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-sage-100">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-slate-800">{q}</span>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 mt-0.5 text-sage-600 transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-slate-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <Section id="faq" className="bg-cream-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Questions fréquentes"
            title="Vous avez une question ?"
            description="Les réponses aux questions les plus courantes. Pour tout le reste, un message WhatsApp suffit."
          />
          <div className="mt-8">
            <WhatsAppButton
              message="Bonjour Keïna, j'ai une question à vous poser."
              size="default"
            >
              <MessageCircle size={16} />
              Poser ma question sur WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
