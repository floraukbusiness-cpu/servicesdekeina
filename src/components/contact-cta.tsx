"use client";

import { MessageCircle } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function ContactCTA() {
  return (
    <Section id="contact" className="bg-sage-900">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage-300 mb-4">
            Prêt à faire le premier pas ?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white text-balance leading-tight">
            Parlons de votre besoin.
          </h2>
          <p className="mt-5 text-lg text-sage-200 leading-relaxed text-balance">
            Un message suffit. Présentez-vous, décrivez votre besoin et votre
            zone, je vous réponds rapidement et on organise tout simplement.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              size="lg"
              variant="primary"
              className="bg-white text-sage-800 hover:bg-cream-50 shadow-none"
              message="Bonjour Keïna, je vous contacte depuis votre site. Je voudrais discuter de mes besoins."
            >
              <MessageCircle size={18} />
              Envoyer un message WhatsApp
            </WhatsAppButton>
          </div>

          <p className="mt-6 text-sm text-sage-400">
            Secteur de Val d'Arry · Disponible sur WhatsApp
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
