import { FaCrown, FaLayerGroup, FaBolt } from "react-icons/fa";

import sponshorship_1 from "../assets/sponshorship/sponshorship-1.webp";
import sponshorship_2 from "../assets/sponshorship/sponshorship-2.webp";
import sponshorship_3 from "../assets/sponshorship/sponshorship-3.webp";

export const audience = [
  { value: "40M+",  label: "Annual Visitors" },
  { value: "$82K+", label: "Avg. Household Income" },
  { value: "58%",   label: "Ages 18–44" },
  { value: "40%",   label: "Out-of-State Visitors" },
];

export const sponsorshipTiers = [


  {
    id: "category-partner",
    title: "Category Partner",
    label: "Category Exclusive Partner",
    icon: FaLayerGroup,

    accent: "from-[var(--color-accent)]/10 to-transparent",
    border: "border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]",
    badge:
      "text-[var(--color-accent)] border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5",

    benefits: [
      "Exclusive rights within defined category",
      "Dedicated branded activation environments",
      "Category-wide digital integration",
      "Co-branded participation in flagship events",
      "Scheduled annual campaign windows",
      "Audience analytics and engagement insights",
    ],

    reach: "15M+ targeted reach",
    price: "Investment from $150K / year",
  },
    {
    id: "title-partner",
    title: "Title Partner",
    label: "Global Naming Rights Partner",
    icon: FaCrown,

    accent: "from-[var(--color-accent)]/10 to-transparent",
    border: "border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]",
    badge:
      "text-[var(--color-accent)] border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5",

    benefits: [
      "Exclusive naming rights across destination ecosystem",
      "Category exclusivity across all commercial verticals",
      "Prime visibility across digital & physical ecosystem",
      "Co-owned flagship event programming rights",
      "Integrated presence across screens, app & signage network",
      "Global PR amplification and brand storytelling support",
    ],

    reach: "40M+ premium annual reach",
    price: "Investment from $500K / year",
  },

  {
    id: "activation-partner",
    title: "Activation Partner",
    label: "Experiential Activation Partner",
    icon: FaBolt,

    accent: "from-[var(--color-accent)]/10 to-transparent",
    border: "border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]",
    badge:
      "text-[var(--color-accent)] border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5",

    benefits: [
      "Per-event activation opportunities",
      "High-footfall experiential branding zones",
      "Content + social amplification integration",
      "Sampling and interactive engagement rights",
      "Event-level visibility and media coverage",
      "Flexible campaign-based structures",
    ],

    reach: "500K–2M per activation",
    price: "Investment from $25K / event",
  },
];

export const activation = [
  {
    id: "auto-brand",
    brand: "Auto Brand",
    type: "Title Partner",
    description:
      "A 4-day immersive brand takeover transforming the Rotunda into a live automotive experience zone.",
    metrics: [
      "200K+ touchpoints",
      "3.2M+ impressions",
      "National press coverage",
    ],
    impact:
      "Turned a retail destination into a flagship automotive experience platform.",
    image: sponshorship_1,
  },

  {
    id: "tech-company",
    brand: "Tech Company",
    type: "Category Partner",
    description:
      "A 6-week interactive activation blending live demos, sampling, and digital streaming integration.",
    metrics: [
      "1.5M+ engaged visitors",
      "Multi-platform streaming",
      "High dwell-time uplift",
    ],
    impact:
      "Unified physical and digital engagement into a seamless brand ecosystem.",
    image: sponshorship_2,
  },

  {
    id: "entertainment-studio",
    brand: "Entertainment Studio",
    type: "Activation Partner",
    description:
      "A premium red-carpet premiere experience at the Performing Arts Center with full media integration.",
    metrics: [
      "500 VIP guests",
      "40+ media outlets",
      "Global amplification",
    ],
    impact:
      "Positioned the venue as a high-profile global entertainment destination.",
    image: sponshorship_3,
  },
];