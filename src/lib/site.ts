export const siteConfig = {
  name: "Keïna Rauck",
  role: "Baby-sitting · Garde d'animaux · Cours d'anglais",
  zone: "Secteur de Val d'Arry",
  // Numéro WhatsApp au format international, sans "+" ni espaces.
  whatsappNumber: "33641845229",
  defaultMessage:
    "Bonjour Keïna, je vous contacte depuis votre site et j'aimerais quelques informations.",
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.defaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
