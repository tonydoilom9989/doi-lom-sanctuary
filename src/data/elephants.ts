export type Elephant = {
  slug: string;
  name: string;
  sex: "Female" | "Male";
  age: number;
  ageDisplay: string;
  story: string;
  storyLabel: string;
  rescuedYear: number;
  rescuedFrom: string;
  pullQuote: { text: string; attribution: string };
  traits: string[];
  timeline: { year: string; description: string; isCurrent?: boolean }[];
  photo: string;
  thumbs: string[];
  themeTint: string;
};

export const elephants: Elephant[] = [
  {
    slug: "mae-bua",
    name: "Mae Bua",
    sex: "Female",
    age: 45,
    ageDisplay: "~45 years",
    storyLabel: "Her story",
    story:
      "Mae Bua was the very first elephant to arrive at Doi Lom — rescued from a trekking camp in 2008 where she had carried tourists on her back for fifteen years. She arrived underweight, exhausted, and afraid of human touch. It took Tony eighteen months of patient morning routines before she would accept a banana from his hand. Today she is the unquestioned matriarch of the herd: calm, watchful, the elephant the other two look to whenever something is unfamiliar.",
    rescuedYear: 2008,
    rescuedFrom: "Trekking camp",
    pullQuote: {
      text: "Mae Bua taught me that an elephant decides when she is ready. Not us. Her.",
      attribution: "— Tony, founder",
    },
    traits: ["Gentle", "Loves bananas", "Mud baths", "Protective"],
    timeline: [
      { year: "1981", description: "Born in northern Thailand, captured for tourism" },
      { year: "2008", description: "Rescued from a Chiang Mai trekking camp" },
      { year: "Today", description: "Matriarch of the herd · greets every new elephant", isCurrent: true },
    ],
    photo:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1200&q=80&auto=format&fit=crop",
    thumbs: [
      "https://images.unsplash.com/photo-1581435440890-0f5af3957d5b?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547073301-bb0d985d2c3f?w=600&q=80&auto=format&fit=crop",
    ],
    themeTint: "#c8ddb8",
  },
];
