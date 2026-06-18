// Doi Lom Elephant Rescue — site configuration

export const site = {
  name: "Doi Lom Elephant Rescue Sanctuary",
  shortName: "Doi Lom",
  tagline: "No riding. No chains. Just three elephants, living free.",
  url: "https://doilomelephant.com",
  locale: "en_US",
  founder: "Tony",
  founderFull: "Tony Suriya",
  founded: 2002,
  yearsRunning: 24,
  tatLicense: "23/03633",

  location: {
    village: "Mae Taeng",
    district: "Mae Taeng",
    province: "Chiang Mai",
    postalCode: "50150",
    country: "Thailand",
    address: "39 Kuet Chang, Mae Taeng District, Chiang Mai 50150",
    distance: "45 min north of Chiang Mai",
    coords: { lat: 19.2165485, lng: 98.8810995 },
    googleMapsLink: "https://maps.app.goo.gl/1BPZrTddPFhQGBZd7",
    appleMapsLink: "https://maps.apple/p/.xUsMHSRge~_Ay",
    googleMapsEmbed:
      "https://maps.google.com/maps?q=19.2165485,98.8810995&z=15&hl=en&output=embed",
    googleReviewsLink:
      "https://www.google.com/search?hl=en&q=Doi+Lom+Elephant+Rescue+Sanctuary&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOQYJROclIYBnOjJURtcQvxcjAmw5cvzcbuv49K0zLDnBKl4JKVe9Zclp5EwndxyCYxpJMzrUo5I3tTIYsInNMjjRQ9MB3d9eu-tZzMd_yyvj4gDJ_ojezaHDE5Bv0O-NRw541ho%3D",
  },

  whatsapp: {
    display: "+66 91 789 8226",
    raw: "66917898226",
    link: "https://wa.me/66917898226",
    defaultMessage: "Hi Tony, I'd like to know more about Doi Lom Elephant Rescue.",
    replyTime: "Replies within 30 mins · When Tony wakes up",
  },

  email: "tonydoilom9989@gmail.com",
  hours: "Daily · 8am – 4pm",

  social: {
    instagram:
      "https://www.instagram.com/doilomelephantrescue?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    facebook: "https://www.facebook.com/doilomelephantrescue",
    tripadvisor: "https://tripadvisor.com/doilomelephant",
    instagramHandle: "@doilomelephantrescue",
    facebookHandle: "facebook.com/doilomelephantrescue",
  },

  rating: { score: 4.9, reviewCount: 395, source: "Google" },

  stats: {
    yearsOperating: 24,
    elephantCount: 1,
    googleReviews: 395,
    forestRai: 25,
  },

  // Counts used throughout the site
  counts: { tours: 5, rooms: 2, faqs: 26 },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Our elephants", href: "/our-elephants" },
  { label: "Tours", href: "/tours" },
  { label: "Stays", href: "/stays" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  { label: "Our elephants", href: "/our-elephants" },
  { label: "Tours", href: "/tours" },
  { label: "Stays", href: "/stays" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "About us", href: "/about" },
];

export const trustBadges = [
  { icon: "certificate", value: "TAT Licensed", label: `No. ${"23/03633"}` },
  { icon: "star", value: "4.9 ★ Rating", label: "395 Google reviews" },
  { icon: "clock", value: "24 Years", label: "On the mountain" },
  { icon: "users", value: "Family owned", label: "Run by Tony & local team" },
];

export function waLink(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsapp.defaultMessage);
  return `${site.whatsapp.link}?text=${text}`;
}
