export type Testimonial = {
  initials: string;
  author: string;
  origin: string;
  quote: string;
  rating: number;
  meta: string;
  source: "Google" | "TripAdvisor";
};

// Real Google reviews — sourced from Google Maps "Doi Lom Elephant Rescue Sanctuary"
// Ordered with strongest/most balanced first (positions 1-3 are shown on Home & About)

export const testimonials: Testimonial[] = [
  {
    initials: "SF",
    author: "Sabine Fensie",
    origin: "",
    quote:
      "🌿 An unforgettable day! 🌿 We had an amazing day with the elephants, beautiful animals that are treated with the utmost respect. It was such a touching and enriching experience — you can really feel the love and care they receive. A huge thank you to the whole team, who were absolutely wonderful from start to finish: welcoming, smiling, passionate, and attentive. I would definitely recommend this activity! 🐘💚",
    rating: 5,
    meta: "7 months ago",
    source: "Google",
  },
  {
    initials: "SR",
    author: "Sanne Renée",
    origin: "",
    quote:
      "Doi Lom Elephant Sanctuary is an amazing place. The elephants there came from the tribes up north and are now being cared for here. We prepared their medicine, fed them, walked with them, and bathed them. The caretakers are super friendly and gentle with the elephants and nothing is forced. The experience genuinely feels like you're assisting the caretakers in what they do on the daily for the elephants! It's small scaled which makes the experience intimate and personal, but also ensures all three elephants are taken care of properly. I absolutely loved this place and would recommend it to anyone! 🐘💞",
    rating: 5,
    meta: "8 months ago",
    source: "Google",
  },
  {
    initials: "JA",
    author: "Jasmin",
    origin: "",
    quote:
      "We have chosen this sanctuary because we wanted to visit a small and — most important — an ethical one. We enjoyed our time there very much. There are 3 elderly elephants and it seems the sanctuary takes good care of them. Just watching the elephants from such a close distance is simply impressing. We did not observe any rude behavior of the staff with the elephants. They also have a really nice dog who joined us most of the time :-)",
    rating: 5,
    meta: "6 months ago",
    source: "Google",
  },
  {
    initials: "SN",
    author: "Steffen Nolte",
    origin: "",
    quote:
      "Amazing experience! 🐘💚 We had such a great time at this ethical elephant sanctuary. The elephants are well cared for — no chains or riding, just natural, kind interactions. We got to feed, scratch, and bathe them in the river, which was so much fun and really refreshing for us too! The staff were super friendly, lunch was delicious, and pickup was included. We also combined it with rafting — highly recommend! 🌿✨",
    rating: 5,
    meta: "8 months ago",
    source: "Google",
  },
  {
    initials: "SB",
    author: "Sonia Barradas",
    origin: "",
    quote:
      "Absolutely a wonderful experience! We enjoyed our half day visit, and the female elephants are so gentle and well behaved. We made medicine and walk with them, and the grand finale bathing them. Absolutely take the tour, offered at the hotels is so worth it! Is there a way to donate?",
    rating: 5,
    meta: "5 months ago",
    source: "Google",
  },
  {
    initials: "GJ",
    author: "G Jas",
    origin: "",
    quote:
      "What a memorable day at Doi Lom Elephant Rescue! My fiancé and I were rafting in the area when we noticed many elephants and sanctuaries nearby. After finishing our activity, we quickly searched on Google and found Doi Lom Elephant Rescue — we loved their excellent reviews, quick and friendly response, and inspiring mission, so we decided to pay a visit. If you're looking for a truly authentic and intimate experience, away from the crowds, this is the perfect place. Our guide, Sai, made the experience even more unforgettable — so devoted and knowledgeable, and it was amazing to see how naturally he communicated with the elephants. I will never forget this day! 🐘💫",
    rating: 5,
    meta: "7 months ago",
    source: "Google",
  },
];

// UGC / Instagram cards
export type UGC = { handle: string; caption: string; tint: string; photo: string };

export const ugcPosts: UGC[] = [
  { handle: "@soyzekrix", caption: "De las mejores experiencias que tuve en Tailandia 🇹🇭 Mi primer contacto con uno de los animales que más me flipaban de pequeño… ¡ELEFANTES! 😍", tint: "#9dc27e", photo: "/img/ugc/@username_1.png" },
  { handle: "@julien_dbc", caption: "Doi Lom Elephant rescue sanctuary 🐘🌴 Chiang Mai 🇹🇭", tint: "#c8ddb8", photo: "/img/ugc/@username_2.png" },
  { handle: "@cristianlecchi", caption: "Muchas Gracias @doilomelephantrescue por esta hermosa experiencia. ❤️🐘", tint: "#d4b48a", photo: "/img/ugc/@username_3.png" },
  { handle: "@nachorodriguez9", caption: "Kop khun khrap 🫶🏼🇹🇭🐘", tint: "#b4cfa6", photo: "/img/ugc/@username_4.png" },
  { handle: "@elenaperinelli", caption: "🐘", tint: "#f5ede3", photo: "/img/ugc/@username_5.png" },
];
