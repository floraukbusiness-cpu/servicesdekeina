import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sage-300">
          <span className="font-serif text-base font-semibold">Keïna Rauck</span>
          <span className="text-slate-600">·</span>
          <span className="text-sm">Secteur de Val d'Arry</span>
        </div>

        <p className="text-xs flex items-center gap-1.5">
          Fait avec <Heart size={12} className="text-sage-500" /> en Normandie
        </p>
      </div>
    </footer>
  );
}
