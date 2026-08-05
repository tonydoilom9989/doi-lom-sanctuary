export type TourCategory = "elephant-care" | "trekking" | "combo";
export type TourDifficulty = "Easy" | "Moderate" | "Challenging";

export type Tour = {
  slug: string;
  name: string;
  category: TourCategory;
  categoryLabel: string;
  duration: string;
  durationDays: string;
  difficulty: TourDifficulty;
  groupSize?: string;
  groupSizeMax?: number;
  startLocation: string;
  languages: string;
  price: number;
  priceUnit: string;
  shortDesc: string;
  highlights?: string[];
  childDiscount?: string;
  activitiesLabel?: string;
  activitiesText?: string;
  timeSlots?: { icon: string; title: string; desc: string }[];
  programNote?: string;
  programNoteIcon?: string;
  includes: string[];
  excludes: string[];
  whatToBring: string[];
  itinerary: { time?: string; dayLabel?: string; title: string; desc?: string }[];
  photo: string;
  tint: string;
  featured?: boolean;
  popular?: boolean;
};

export const tours: Tour[] = [
  // ELEPHANT CARE (2)
  {
    slug: "morning-elephant-care",
    name: "Half Day Elephant Care Experience",
    category: "elephant-care",
    categoryLabel: "Elephant Care",
    duration: "Half day",
    durationDays: "Half day",
    difficulty: "Easy",
    startLocation: "Mae Taeng",
    languages: "EN · TH",
    price: 1700,
    priceUnit: "per person",
    childDiscount: "Children under 10 years old · 25% discount",
    shortDesc: "Prepare herbal medicine for the elephants, feed them, and walk along the trail with them.",
    includes: [
      "Round-trip transfer from Chiang Mai",
      "Insurance",
      "A Thai style lunch",
    ],
    excludes: ["Hotel pickups outside city limits", "All kinds of drinks"],
    whatToBring: ["Extra clothes", "Swimming suit", "Sandals", "Own allergies medication", "Rain coat (rainy season)", "Winter coat (winter season)", "Walking shoes", "Sunblock lotion", "Insect spray", "Towel"],
    timeSlots: [
      { icon: "sun", title: "Morning", desc: "pick up 8.00 - 8.30 am. Return 2.00 pm." },
      { icon: "cloud-sun", title: "Afternoon", desc: "pick up 12.00-12.30 pm. Return 5.30 pm." },
    ],
    itinerary: [
      { title: "Hotel Pick-up and drive to Doi Lom Elephant Sanctuary" },
      { title: "Change into traditional Mahout clothing" },
      { title: "Learn about elephant care and conservation" },
      { title: "Make natural herbal medicine for the elephants" },
      { title: "Feed, walk, and interact closely with the elephants" },
      { title: "Take elephants to play in the mud and let them enjoy rubbing against the rock and trees." },
      { title: "Take the elephants to the river for drinking and bathing" },
      { title: "Relax and shower at the nearby waterfall" },
    ],
    photo: "/img/tours/morning-elephant-care.png",
    tint: "#c8ddb8",
    featured: true,
  },
  {
    slug: "full-day-elephant-care",
    name: "Full Day Elephant Care Experience",
    category: "elephant-care",
    categoryLabel: "Elephant Care",
    duration: "Full day",
    durationDays: "Full day",
    difficulty: "Easy",
    startLocation: "Mae Taeng",
    languages: "EN · TH",
    price: 2200,
    priceUnit: "per person",
    childDiscount: "Children under 10 years old · 25% discount",
    shortDesc: "Spend more time with the herd — prepare herbal medicine and food, walk with the elephants, observe their natural behavior, and enjoy meaningful time close to them.",
    includes: [
      "Round-trip transfer from Chiang Mai",
      "Insurance",
      "A Thai style lunch",
    ],
    excludes: ["Hotel pickups outside city limits", "All kinds of drinks"],
    whatToBring: ["Extra clothes", "Swimming suit", "Sandals", "Own allergies medication", "Rain coat (rainy season)", "Winter coat (winter season)", "Walking shoes", "Sunblock lotion", "Insect spray", "Towel"],
    itinerary: [
      { title: "Hotel Pick-up 8.00 - 8.30 am. and drive to Doi Lom Elephant Sanctuary" },
      { title: "Change into traditional Mahout clothing" },
      { title: "Learn about elephant care and conservation" },
      { title: "Make natural herbal medicine for the elephants" },
      { title: "Feed, walk, and interact closely with the elephants" },
      { title: "Take elephants to play in the mud and let them enjoy rubbing against the rock and trees" },
      { title: "Lunch break" },
      { title: "Travel into the mountains to bring elephants food and prepare vitamins" },
      { title: "Take elephants to drink water and bathe, while providing food and vitamins through close and respectful interaction" },
      { title: "Relax at the nearby waterfall" },
    ],
    programNote: "This program is designed to give you plenty of time with the elephants without rushing. We focus on caring for them with love and respect, allowing them to live naturally and peacefully. All activities are gentle and unforced, allowing them to live peacefully in their final home.",
    photo: "/img/tours/full-day-elephant-care.png",
    tint: "#9dc27e",
    featured: true,
    popular: true,
  },
  {
    slug: "half-day-elephant-care-atv",
    name: "Half Day Elephant Care Experience + ATV Adventure",
    category: "elephant-care",
    categoryLabel: "Elephant Care",
    duration: "Full day",
    durationDays: "Full day",
    difficulty: "Moderate",
    startLocation: "Mae Taeng",
    languages: "EN · TH",
    price: 3000,
    priceUnit: "per person",
    childDiscount: "Children under 10 years old · 25% discount",
    shortDesc: "Spend the morning caring for the elephants — feeding, walking, and bathing them in the river — then finish the day with an ATV ride along the scenic trails of Mae Taeng.",
    includes: [
      "Round-trip transfer from Chiang Mai",
      "Insurance",
      "A Thai style lunch",
    ],
    excludes: ["Hotel pickups outside city limits", "All kinds of drinks"],
    whatToBring: ["Extra clothes", "Swimming suit", "Sandals", "Own allergies medication", "Rain coat (rainy season)", "Winter coat (winter season)", "Walking shoes", "Sunblock lotion", "Insect spray", "Towel"],
    itinerary: [
      { title: "Hotel pick-up and transfer to Doi Lom Elephant Sanctuary" },
      { title: "Change into traditional mahout clothing" },
      { title: "Learn about elephant care and conservation" },
      { title: "Make natural herbal medicine for the elephants" },
      { title: "Feed the elephants, walk with them, and interact closely in a natural environment" },
      { title: "Take the elephants to play in the mud and let them enjoy rubbing against rocks and trees" },
      { title: "Take the elephants to the river for drinking and bathing" },
      { title: "Relax and shower at a nearby waterfall" },
      { title: "Enjoy an ATV ride along the scenic trails of Mae Taeng" },
    ],
    photo: "/img/tours/half-day-elephant-care-atv.png",
    tint: "#b4cfa6",
  },

  // TREKKING (1)
  {
    slug: "waterfall-trek",
    name: "Full Day Adventure",
    category: "trekking",
    categoryLabel: "Trekking",
    duration: "Full day",
    durationDays: "Full day",
    difficulty: "Moderate",
    startLocation: "Mae Taeng",
    languages: "EN · TH",
    price: 2500,
    priceUnit: "per person",
    childDiscount: "Children under 10 years old · 25% discount",
    shortDesc: "Elephant care, trekking, waterfall, and bamboo rafting.",
    includes: [
      "Round-trip transfer from Chiang Mai",
      "Insurance",
      "Food and drinking water",
    ],
    excludes: ["Hotel pickups outside city limits", "All kinds of drinks"],
    whatToBring: ["Extra clothes", "Swimming suit", "Sandals", "Own allergies medication", "Rain coat (rainy season)", "Winter coat (winter season)", "Walking shoes", "Sunblock lotion", "Insect spray", "Towel"],
    itinerary: [],
    activitiesText: "Hotel pick-up is at 8.30 AM, followed by a 1-hour drive to the countryside. Begin a 1.5-hour trek through the forest, visiting a local village and farms before arriving at Doi Lom Elephant Sanctuary. After lunch, enjoy caring for the elephants by feeding and take the elephants to the river for drinking and bathing. Relax at a nearby waterfall, then finish the day with a 40-minute bamboo rafting experience. Return to Chiang Mai around 5.00 PM.",
    photo: "/img/tours/waterfall-trek.png",
    tint: "#b4cfa6",
  },

  // COMBO (2)
  {
    slug: "elephant-waterfall-combo",
    name: "2 Days 1 Night Trekking Adventure",
    category: "combo",
    categoryLabel: "Combo",
    duration: "2 days 1 night",
    durationDays: "2 days 1 night",
    difficulty: "Moderate",
    startLocation: "Mae Taeng",
    languages: "EN · TH",
    price: 5000,
    priceUnit: "per person",
    childDiscount: "Children under 10 years old · 25% discount",
    shortDesc: "Explore a hidden, non-tourist area in the mountains north of Chiang Mai. Experience authentic hill tribe culture, jungle trekking, elephant care, and bamboo rafting in a peaceful natural setting.",
    includes: [
      "Round-trip transfer from Chiang Mai",
      "Insurance",
      "All food on the trip",
      "1-night accommodation",
    ],
    excludes: ["Personal gear", "Hotel pickups outside city limits", "All kinds of drinks"],
    whatToBring: ["Extra clothes", "Swimming suit", "Sandals", "Own allergies medication", "Rain coat (rainy season)", "Winter coat (winter season)", "Walking shoes", "Sunblock lotion", "Insect spray", "Towel"],
    itinerary: [
      { dayLabel: "Day 1", title: "Hotel pickup: 9.00 - 9.30 AM. Drive approximately 1 hour to Mae Taeng District." },
      { title: "Stop at a local market for supplies." },
      { title: "Continue to a Hmong hill tribe village where the trek begin." },
      { title: "Learn about local culture and traditional village life from your guide." },
      { title: "Trek through jungle trails and mountain scenery for approximately 4 hours." },
      { title: "Relax and swim at a natural waterfall." },
      { title: "Arrive at Doi Lom Elephant Sanctuary around 4.00 PM." },
      { title: "Dinner and overnight stay at the sanctuary." },
      { dayLabel: "Day 2", title: "Breakfast and change into traditional mahout clothing." },
      { title: "Enjoy all activities included in the half-day elephant care program." },
      { title: "Continue with bamboo rafting for approximately 40 minutes." },
      { title: "Return to Chiang Mai 5 PM." },
    ],
    photo: "/img/tours/elephant-waterfall-combo.png",
    tint: "#c8ddb8",
    featured: true,
  },
  {
    slug: "overnight-sanctuary-stay",
    name: "3 Days 2 Nights Trekking Adventure",
    category: "combo",
    categoryLabel: "Combo",
    duration: "3 days",
    durationDays: "3 days",
    difficulty: "Moderate",
    startLocation: "Mae Taeng",
    languages: "EN · TH",
    price: 6500,
    priceUnit: "per person",
    childDiscount: "Children under 10 years old · 25% discount",
    shortDesc: "This program includes all activities from the 2 Days 1 Night Trekking Adventure, with the following additional experiences.",
    activitiesLabel: "Additional activities",
    activitiesText: "This program includes all activities from the 2 Days 1 Night tour, plus:",
    includes: [
      "Round-trip transfer from Chiang Mai",
      "Insurance",
      "All food on the trip",
      "2-night accommodation",
    ],
    excludes: ["Personal gear", "Hotel pickups outside city limits", "All kinds of drinks"],
    whatToBring: ["Extra clothes", "Swimming suit", "Sandals", "Own allergies medication", "Rain coat (rainy season)", "Winter coat (winter season)", "Walking shoes", "Sunblock lotion", "Insect spray", "Towel"],
    itinerary: [
      { title: "Additional jungle trekking on Day 2 approximately 4-5 hours." },
      { title: "Overnight stay in a traditional Lahu hill tribe village." },
      { title: "Dinner and local cultural experience included." },
      { title: "Experience deeper jungle trekking, authentic village life, and more time in nature." },
      { title: "Visit mountain viewpoints, waterfall, and a bat cave." },
      { title: "Return to Chiang Mai around 5.00 PM." },
    ],
    photo: "/img/tours/overnight-sanctuary-stay.jpg",
    tint: "#f5ede3",
  },
];

export const tourCategories = [
  { id: "all", label: "All tours", count: tours.length },
  { id: "elephant-care", label: "Elephant care", count: tours.filter((t) => t.category === "elephant-care").length },
  { id: "trekking", label: "Trekking", count: tours.filter((t) => t.category === "trekking").length },
  { id: "combo", label: "Combo", count: tours.filter((t) => t.category === "combo").length },
];
