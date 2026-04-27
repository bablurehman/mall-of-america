

import events_h1 from "../assets/events/events-h1.webp";
import events_h2 from "../assets/events/events-h2.webp";
import events_h3 from "../assets/events/events-h3.webp";


export const eventsStats = [
  { value: "500+",    label: "Events Per Year" },
  { value: "40M+",    label: "Annual Visitors" },
  { value: "10,000",  label: "Max Capacity" },
  { value: "12+",     label: "Dedicated Venues" },
];

export const eventsCategories = [
  {
    title: "Headline Concerts & Live Music",
    type: "Concert",
    venue: "The Rotunda",
    capacity: "Up to 10,000",
    description:
      "Stadium-scale productions inside America's most-visited destination. Full stage rigging, festival-grade PA, and a built-in audience of 150,000+ every weekend.",
    highlight: true,
  },
  {
    title: "Brand Activations & Experiential",
    type: "Brand Activation",
    venue: "East Broadway / West Market",
    capacity: "Up to 5,000",
    description:
      "Immersive pop-ups, live demos, and sampling campaigns positioned in the highest-footfall corridors. Social-first design with dedicated content capture zones.",
  },
  {
    title: "Corporate Events & Conferences",
    type: "Corporate",
    venue: "Private Suites / PAC",
    capacity: "20 – 500",
    description:
      "Keynotes, town halls, awards ceremonies, and leadership summits. Full AV, catering, executive transport, and private access protocols.",
  },
  {
    title: "Product Launches",
    type: "Product Launch",
    venue: "Rotunda / Expo Hall",
    capacity: "Up to 10,000",
    description:
      "National media draw. Landmark positioning. Drive-in access for large builds. Your launch earns press attention before a single invite is sent.",
  },

  {
    title: "Celebrity & Cultural Events",
    type: "Celebrity",
    venue: "Performing Arts Center",
    capacity: "Up to 500 seated",
    description:
      "Meet & greets, premieres, signings, and cultural festivals. Proven A-list track record. Full security, green room, and VIP infrastructure.",
  },
];

export const eventHighlights = [
  {
    type: "Fashion Event",
    title: "International Runway Showcase",
    image: events_h1,
    venue: "Luxury Wing Hall",
    date: "Oct 2025",
    desc: "Global designers and influencers driving premium audience attention.",
    format: "Invite + Public",
    scale: "12K+ attendees",
    impact: "Influencer + press amplification",
  },
  {
    type: "Exhibition",
    title: "Future Tech & Innovation Expo",
    image: events_h2,
    venue: "Convention Center",
    date: "Nov 2025",
    desc: "Large-scale expo blending consumer discovery with B2B opportunities.",
    format: "Exhibition + Talks",
    scale: "70K+ visitors",
    impact: "B2B + consumer engagement",
  },
  {
    type: "Corporate Event",
    title: "Global Leadership Summit",
    image: events_h3,
    venue: "Executive Conference Suites",
    date: "Jan 2026",
    desc: "High-level corporate gathering enabling partnerships and deal-making.",
    format: "Closed-Door + Media",
    scale: "5K+ delegates",
    impact: "Enterprise partnerships",
  },
];

export const eventsCapabilities = [
  {
    title: "Full Production",
    desc: "Stage rigging, L-Acoustics PA, 4K LED walls, broadcast fiber",
  },
  {
    title: "Flexible Scale",
    desc: "200-person private suite to 10,000-guest headline events",
  },
  {
    title: "Live-Ready",
    desc: "Multi-Gbps fiber backbone for streaming and broadcast",
  },
  {
    title: "Built-In Audience",
    desc: "150,000+ weekend visitors — your audience is already here",
  },
  {
    title: "365-Day Calendar",
    desc: "Year-round programming with flexible booking windows",
  },
  {
    title: "Dedicated Team",
    desc: "In-house production, logistics, security, and guest services",
  },
];
