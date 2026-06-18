// FAQ data — 5 sections, with persona tags
// Persona tags: "solo" (Sophie persona) and "couples" (Marcus & Kim persona)

export type Persona = "solo" | "couples";

export type FAQItem = {
  q: string;
  a: string;
  tags?: Persona[];
  // Optional extras
  paymentMethods?: { name: string; desc: string; icon: string }[];
  transport?: { icon: string; title: string; desc: string }[];
  hasMap?: boolean;
  hasAntiScam?: boolean;
};

export type FAQGroup = {
  id: string;
  title: string;
  icon: "card" | "sun" | "paw" | "pin" | "home";
  items: FAQItem[];
};

export const faqGroups: FAQGroup[] = [
  {
    id: "booking-payment",
    title: "Booking & payment",
    icon: "card",
    items: [
      {
        q: "How do I book a tour or room?",
        a: "Message Tony directly on WhatsApp. He'll confirm available dates, send a short questionnaire about your group, and follow up with payment instructions for the deposit.",
      },
      {
        q: "How far in advance should I book?",
        a: "For tours, you can book as late as 1 day in advance. For overnight stays, please book 2–3 days ahead.",
      },
      {
        q: "How do I pay the deposit?",
        a: "There are three options — Wise, which is best for international guests, PromptPay for instant transfers within Thailand, or a direct bank transfer to our Krungthai Bank account. Tony will send the correct payment details via WhatsApp once your dates have been confirmed.",
        tags: ["solo", "couples"],
        paymentMethods: [
          { name: "Wise", desc: "Best for international guests", icon: "transfer" },
          { name: "PromptPay", desc: "Instant Thai bank transfer", icon: "qr" },
          { name: "Bank Transfer", desc: "Krungthai Bank", icon: "bank" },
        ],
        hasAntiScam: true,
      },
      {
        q: "What's your cancellation policy?",
        a: "We do not offer cancellations for tours or accommodation. If you cancel your booking, the deposit is non-refundable. Please make sure of your plans before booking to avoid any inconvenience.",
      },
      {
        q: "Do you accept card payment?",
        a: "Not on-site. Bank transfer or Wise only for the deposit; the remainder can be paid in cash on the day if preferred. We are working on adding a card terminal in 2026.",
      },
      {
        q: "Can I pay for everyone in one transaction?",
        a: "Yes — for bookings of 2 or more guests, payment can be made in a single transfer for the entire group. Tony will send one payment instruction covering the total cost for all guests in your booking.",
        tags: ["couples"],
      },
    ],
  },
  {
    id: "on-the-day",
    title: "On the day",
    icon: "sun",
    items: [
      {
        q: "What time does the tour start?",
        a: "For most tours, pickup from your accommodation in Chiang Mai is between 8:00 AM and 8:30 AM.",
        tags: ["solo", "couples"],
      },
      {
        q: "What should I wear?",
        a: "We provide traditional mahout clothing (pants and a shirt) for all activities. We recommend bringing closed-toe shoes and a water bottle with you.",
        tags: ["solo"],
      },
      {
        q: "Can I take photos?",
        a: "Yes, phones and cameras are welcome.\n\nThe only rule is no flash photography near the elephants, as it may disturb or startle them.",
        tags: ["solo", "couples"],
      },
      {
        q: "Is lunch provided?",
        a: "Yes — every tour includes a traditional Thai local-style lunch.\n\nWe also offer vegetarian, vegan, and gluten-free options. Just let us know in advance.",
        tags: ["solo"],
      },
      {
        q: "Is there mobile signal at the sanctuary?",
        a: "We have WiFi available.\n\nA central WiFi network is provided around the dining area and extends to the guest rooms and bungalows.",
        tags: ["couples"],
      },
      {
        q: "What if it rains?",
        a: "Activities will continue as normal because the elephants love the rain.\n\nWe may adjust the schedule slightly depending on the weather, but tours will still go ahead in light to moderate rain.",
        tags: ["couples"],
      },
      {
        q: "What is the maximum group size?",
        a: "A maximum of 20 guests per day. If your group is larger than this, please contact Tony in advance.\n\nEven on our busiest days, guests spend time with the elephants in small groups to ensure a more personal experience and to minimize disturbance to the elephants' wellbeing.",
      },
    ],
  },
  {
    id: "our-elephants",
    title: "Our elephants",
    icon: "paw",
    items: [
      {
        q: "Can I ride the elephants?",
        a: "No — never. Elephant spines are not designed to carry weight. Every elephant in our care arrived injured from that exact practice. We do not, ever.",
        tags: ["solo"],
      },
      {
        q: "Are the elephants chained at night?",
        a: "No. The elephants roam freely within a 25-rai forest reserve. They have hammock-style shelters they can choose to enter during heavy rain.",
        tags: ["solo"],
      },
      {
        q: "What happens if an elephant doesn't want to interact?",
        a: "Then you watch from a distance, and you respect that. The freedom to walk away is the entire point of the sanctuary.",
      },
      {
        q: "Can I bathe the elephants?",
        a: "We do not force the elephants to bathe. It is entirely up to each elephant whether they want to enter the water or not.\n\nDuring some seasons, especially when the weather is cold, elephants may not want to bathe. However, in the hot season, they usually enjoy spending time in the water and bathing.",
        tags: ["solo"],
      },
      {
        q: "Will I see all of the elephants?",
        a: "Most likely, yes.\n\nOur elephants live freely, so on rare occasions one may be out foraging in the forest, or an elephant may be receiving special care if it is unwell. However, Tony will always let you know in advance if there are any unusual circumstances before your visit.",
        tags: ["solo"],
      },
    ],
  },
  {
    id: "getting-here",
    title: "Getting here",
    icon: "pin",
    items: [
      {
        q: "How do I get to the sanctuary?",
        a: "Round-trip transportation from your accommodation in Chiang Mai is included in every tour.\n\nPickup is between 8:00 AM and 8:30 AM, and the drive takes approximately 60 minutes through the beautiful Mae Taeng Valley before arriving at the sanctuary.",
        tags: ["solo", "couples"],
      },
      {
        q: "What if I come independently?",
        a: "We can send you a pinned location for use with navigation apps. Guests traveling independently should plan to arrive between 9:00 AM and 10:00 AM.",
        tags: ["solo", "couples"],
        transport: [
          { icon: "car", title: "Shared hotel pickup", desc: "Included in most tour programs, with pickup from your hotel between 8:00 AM and 8:30 AM." },
          { icon: "taxi", title: "Grab or private car", desc: "Transportation from Chiang Mai can be quite expensive if you are not using your own vehicle. We recommend joining our tour transfer service, which is included in the program." },
        ],
        hasMap: true,
      },
      {
        q: "Can I be picked up from Pai or Chiang Rai?",
        a: "Pickup from Pai is possible with at least 7 days' notice. Tony will provide a separate quote for the pickup and transfer service.\n\nFor guests traveling from Chiang Rai, we recommend coming to Chiang Mai first and joining the tour from there, as it is the most convenient option.",
      },
      {
        q: "What time will I get back to Chiang Mai?",
        a: "Half-day tours usually return to Chiang Mai at around 2:00 PM.\n\nFull-day tours usually return at around 6:00 PM.\n\nPlease note that these times are approximate and may vary depending on traffic, weather, and other circumstances.",
      },
    ],
  },
  {
    id: "staying-overnight",
    title: "Staying overnight",
    icon: "home",
    items: [
      {
        q: "Where will I sleep?",
        a: "We offer two accommodation types: a Family Room and a Private Bungalow with a Mini Pool.\n\nAll accommodations are located within the Doi Lom property and are approximately 200 meters from the elephant meadow.",
        tags: ["couples"],
      },
      {
        q: "Is there WiFi and air conditioning?",
        a: "Most rooms have both. The Glamping Tent has open-air ventilation only — cool mountain air does the job. WiFi is strongest near the kitchen barn.",
        tags: ["couples"],
      },
      {
        q: "What is included in the room rate?",
        a: "All rooms include breakfast, a welcome fruit basket, daily housekeeping, and one elephant evening visit. Lunch and dinner are extra (or included with tour packages).",
      },
      {
        q: "Can I book the room without a tour?",
        a: "Yes — you can stay overnight without doing a tour day. Some guests come just to spend time on the deck with a book and watch the herd from a distance.",
        tags: ["couples"],
      },
    ],
  },
];

// Popular search chips
export const popularSearches = [
  "Cancellation policy",
  "How to pay deposit",
  "What to bring",
  "Group size",
  "Getting here",
];

// Quick FAQ teaser cards — reused on Contact page
export const quickFAQ = [
  {
    icon: "card",
    title: "How to pay deposit",
    desc: "Wise, PromptPay, or bank transfer. Tony sends details via WhatsApp personally.",
  },
  {
    icon: "pin",
    title: "Getting here",
    desc: "60 minutes north of Chiang Mai. Pickup included in most tours.",
  },
  {
    icon: "calendar-x",
    title: "Cancellation policy",
    desc: "No cancellations — deposit is non-refundable.",
  },
];
