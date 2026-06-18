export type Stay = {
  slug: string;
  name: string;
  type: string;
  shortDesc?: string;
  bedType: string;
  roomSize?: string;
  view: string;
  poolType: string;
  poolLabel?: string;
  poolIcon?: string;
  sleeps?: string;
  sleepsMax: number;
  pricePerNight: number;
  description: string;
  amenities: string[];
  includes: string[];
  excludes: string[];
  policies: { title: string; lines: string[] }[];
  photo: string;
  photoTint: string;
  gallery?: string[];
  popular?: boolean;
};

export const stays: Stay[] = [
  {
    slug: "deluxe-pool-bungalow",
    name: "Bungalow with Mini Pool",
    type: "Private Bungalow",
    shortDesc: "A private bungalow with a small private pool.",
    bedType: "King bed",
    view: "Mountain and river view",
    poolType: "Mini pool",
    sleeps: "1–2 guests",
    sleepsMax: 2,
    pricePerNight: 1700,
    description:
      "Our most-loved room — a bungalow hand-built by Tony, with a private mini pool overlooking the elephant nearby. Inside, there is a king bed, bathroom, and natural views all around the room. If you are lucky, the elephants may walk past your bungalow.",
    amenities: [
      "Air conditioning",
      "Hot water shower",
      "WiFi",
      "Private mini pool",
      "Towels and toiletries",
      "Natural Mae Taeng view",
    ],
    includes: ["Breakfast", "Parking"],
    excludes: ["Tour activities", "Transfer service"],
    policies: [
      { title: "Check-in / Check-out", lines: ["Check-in from 10:00 AM – 12:00 PM", "Check-out by 12:00 PM."] },
    ],
    photo: "/img/stays/bungalow-with-mini-pool/main.png",
    photoTint: "#9dc27e",
    gallery: [
      "/img/stays/bungalow-with-mini-pool/thumb-1.png",
      "/img/stays/bungalow-with-mini-pool/thumb-2.png",
      "/img/stays/bungalow-with-mini-pool/thumb-3.png",
      "/img/stays/bungalow-with-mini-pool/thumb-4.jpeg",
    ],
    popular: true,
  },
  {
    slug: "glamping-tent",
    name: "Family Room",
    type: "Large Room",
    shortDesc: "A private room for 3–4 guests.",
    bedType: "King bed",
    view: "Mountain and river view",
    poolType: "Group room",
    poolLabel: "Room for multiple guests",
    poolIcon: "home",
    sleeps: "3–4 guests",
    sleepsMax: 4,
    pricePerNight: 2500,
    description:
      "A special room designed to accommodate groups. It overlooks the elephant meadow and features a king bed, bathroom, and natural views all around the room. Perfect for a fun stay with friends or a relaxing family getaway.",
    amenities: [
      "Air conditioning",
      "Hot water shower",
      "WiFi",
      "Private mini pool",
      "Towels and toiletries",
      "Natural Mae Taeng view",
    ],
    includes: ["Breakfast", "Parking"],
    excludes: ["Tour activities", "Transfer service"],
    policies: [
      { title: "Check-in / Check-out", lines: ["Check-in from 10:00 AM – 12:00 PM", "Check-out by 12:00 PM."] },
    ],
    photo: "/img/stays/family-room/main.png",
    photoTint: "#3a5c2a",
    gallery: [
      "/img/stays/family-room/thumb-1.png",
      "/img/stays/family-room/thumb-2.png",
      "/img/stays/family-room/thumb-3.jpeg",
      "/img/stays/family-room/thumb-4.jpeg",
    ],
  },
];
