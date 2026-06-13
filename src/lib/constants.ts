export const SHOP = {
  name: "KAGU E-BIKES",
  tagline: "Ihr E-Bike-Spezialist in Moormerland",
  phone: "01520 5161641",
  phoneTel: "tel:015205161641",
  address: {
    street: "Hauptstraße 169",
    city: "26802 Moormerland",
    full: "Hauptstraße 169, 26802 Moormerland",
  },
  hours: [
    // Öffnungszeiten bitte manuell eintragen:
    { days: "Öffnungszeiten", time: "Bitte anfragen", closed: false },
  ],
  rating: 4.9,
  reviewCount: 43,
  mapsUrl:
    "https://www.google.com/maps/search/Hauptstra%C3%9Fe+169+26802+Moormerland",
  googleReviewsUrl:
    "https://www.google.com/maps/search/KAGU+E-BIKES+Moormerland",
} as const;

export const SERVICES = [
  {
    id: "kaufen",
    title: "E-Bikes kaufen",
    description:
      "Große Auswahl an City-, Trekking- und Mountain-E-Bikes. Namhafte Hersteller direkt ab Lager.",
    icon: "ShoppingCart",
  },
  {
    id: "gazelle",
    title: "Gazelle E-Bikes",
    description:
      "Autorisierter Gazelle-Partner. Das volle Sortiment der niederländischen Traditionsmarke.",
    icon: "Award",
  },
  {
    id: "probefahrt",
    title: "Probefahrten",
    description:
      "Testen Sie Ihr Wunsch-E-Bike ausgiebig vor dem Kauf. Einfach vorbeikommen – keine Anmeldung nötig.",
    icon: "Bike",
  },
  {
    id: "lieferung",
    title: "Lieferservice",
    description:
      "Ihr neues E-Bike wird bequem direkt zu Ihnen nach Hause geliefert.",
    icon: "Truck",
  },
  {
    id: "gebraucht",
    title: "Gebrauchträder",
    description:
      "Geprüfte Gebraucht-E-Bikes in Top-Zustand zu fairen Preisen. Pegasus, Gazelle und mehr.",
    icon: "Package",
  },
  {
    id: "beratung",
    title: "Beratung",
    description:
      "Persönliche, ehrliche Beratung – ohne Verkaufsdruck. Wir helfen Ihnen, das perfekte E-Bike zu finden.",
    icon: "MessageCircle",
  },
] as const;

export const REVIEWS = [
  {
    author: "Artur Wist",
    rating: 5,
    text: "Der Inhaber war super! Er hat uns sehr gut, freundlich, geduldig und sehr kompetent beraten und hat auch nicht versucht uns irgendwas anzudrehen, nur um was zu verkaufen. Ich würde auf jeden Fall wieder ein Fahrrad hier kaufen 😀",
    date: "vor 6 Monaten",
  },
  {
    author: "L G",
    rating: 5,
    text: "Waren heute ganz spontan da, um ein Rad zu probieren. Eine sehr nette Beratung und ein gutes Gespräch. 6 Räder weiter war das perfekte Fahrrad gefunden. Sehr kompetenter und angenehmer Verkäufer!",
    date: "vor einem Jahr",
  },
  {
    author: "Heinrich Cordes",
    rating: 5,
    text: "Ich habe dort ein Pegasus E-Bike gekauft, das Fahrrad war in einem Top-Zustand. Sehr zufrieden mit dem Kauf und der freundlichen Beratung.",
    date: "vor einem Jahr",
  },
] as const;

export const TRUST_ITEMS = [
  { label: "Gazelle & Pegasus Partner", icon: "Award" },
  { label: "Probefahrt möglich", icon: "Bike" },
  { label: "Lieferservice", icon: "Truck" },
] as const;
