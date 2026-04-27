import entertainment_1 from "../assets/entertainment/entertainment-1.webp";
import entertainment_2 from "../assets/entertainment/entertainment-2.webp";
import entertainment_3 from "../assets/entertainment/entertainment-3.webp";


export const entertainmentData = [
  {
    id: "aquarium",
    title: "Aquarium Experience",
    tag: "Signature Anchor",
    desc: "A multi-level immersive marine attraction designed to drive tourism, extend dwell time, and anchor family visitation across all demographics.",
    stats: [
      { v: "3M+", l: "Annual Visitors" },
      { v: "500+", l: "Species" },
      { v: "+40%", l: "Dwell Impact" },
    ],
    image: entertainment_1,
  },
  {
    id: "themepark",
    title: "Indoor Theme Park",
    tag: "High-Energy Zone",
    desc: "A year-round, climate-controlled entertainment engine combining rides, VR, and large-scale attractions that convert footfall into repeat visits.",
    stats: [
      { v: "20+", l: "Attractions" },
      { v: "All Ages", l: "Audience" },
      { v: "365", l: "Days Active" },
    ],
    image: entertainment_2,
  },
  {
    id: "arena",
    title: "Live Event Arena",
    tag: "Regional Draw",
    desc: "A flexible venue platform engineered for concerts, launches, and large-scale productions — positioning the property as a regional entertainment hub.",
    stats: [
      { v: "8,000", l: "Capacity" },
      { v: "50+", l: "Events / Year" },
      { v: "Regional", l: "Pull" },
    ],
    image: entertainment_3,
  },
];
