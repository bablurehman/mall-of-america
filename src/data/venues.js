import {
  FaRulerCombined,
  FaBoxOpen,
  FaTruck,
  FaBolt,
  FaWifi,
  FaHotel,
  FaTheaterMasks,
  FaVolumeUp,
  FaLightbulb,
  FaVideo,
  FaCar,
  FaMapMarkerAlt,
  FaBroadcastTower,
  FaSun,
} from "react-icons/fa";

import { FaBuilding, FaWarehouse } from "react-icons/fa";

export const venues = [
  {
    id: "rotunda",
    name: "The Rotunda",
    tag: "10,000 Capacity",
    desc: "Central atrium with festival-grade production.",
    link: "/venues/rotunda",
    icon: FaBuilding,
  },
  {
    id: "pac",
    name: "Performing Arts",
    tag: "500 Seated",
    desc: "World-class theater with acoustics.",
    link: "/venues/performing-arts",
    icon: FaTheaterMasks,
  },
  {
    id: "expo",
    name: "Exposition Hall",
    tag: "400,000 sq ft",
    desc: "Largest column-free expo floor.",
    link: "/venues/exposition",
    icon: FaWarehouse,
  },
];

/* ================= ROTUNDA ================= */

export const rotundaStats = [
  { value: "10,000", label: "Capacity" },
  { value: "4 Floors", label: "Atrium" },
  { value: "40M+", label: "Footfall" },
];

export const rotundaSpecs = [
  {
    icon: FaMapMarkerAlt,
    label: "Position",
    value: "Central Atrium",
    desc: "Visible from all levels",
  },
  {
    icon: FaVolumeUp,
    label: "Audio",
    value: "L-Acoustics K2",
    desc: "Festival-grade sound",
  },
  {
    icon: FaLightbulb,
    label: "Lighting",
    value: "40,000 lb Rigging",
    desc: "Concert-ready system",
  },
  {
    icon: FaVideo,
    label: "Video",
    value: "4K LED Walls",
    desc: "Large-format displays",
  },
  {
    icon: FaSun,
    label: "Natural Light",
    value: "Sky-Lit",
    desc: "Glass ceiling architecture",
  },
  {
    icon: FaBroadcastTower,
    label: "Broadcast",
    value: "Live Ready",
    desc: "Streaming enabled",
  },
];

/* ================= PERFORMING ================= */

export const performingStats = [
  { value: "500", label: "Seats" },
  { value: "Pro Audio", label: "Sound" },
  { value: "Full Rig", label: "Lighting" },
];

export const performingSpecs = [
  {
    icon: FaTheaterMasks,
    label: "Capacity",
    value: "500 Seated",
    desc: "Tiered seating layout",
  },
  {
    icon: FaVolumeUp,
    label: "Audio",
    value: "Pro Acoustics",
    desc: "Engineered sound system",
  },
  {
    icon: FaLightbulb,
    label: "Lighting",
    value: "Full Rig",
    desc: "Stage-ready lighting",
  },
  {
    icon: FaVideo,
    label: "Broadcast",
    value: "Live Ready",
    desc: "Streaming capability",
  },
  {
    icon: FaCar,
    label: "Access",
    value: "Private Entry",
    desc: "Artist & crew access",
  },
  {
    icon: FaBroadcastTower,
    label: "Production",
    value: "Multi-Cam",
    desc: "Full production setup",
  },
];

/* ================= EXPOSITION ================= */

export const expositionStats = [
  { value: "400K sq ft", label: "Area" },
  { value: "30 ft", label: "Height" },
  { value: "Drive-In", label: "Access" },
];

export const expositionSpecs = [
  {
    icon: FaRulerCombined,
    label: "Area",
    value: "400K sq ft",
    desc: "Column-free layout",
  },
  {
    icon: FaBoxOpen,
    label: "Height",
    value: "30 ft",
    desc: "Supports large builds",
  },
  {
    icon: FaTruck,
    label: "Access",
    value: "Drive-In",
    desc: "Freight enabled",
  },
  {
    icon: FaBolt,
    label: "Power",
    value: "3-Phase",
    desc: "High-density supply",
  },
  {
    icon: FaWifi,
    label: "Connectivity",
    value: "10Gbps",
    desc: "Enterprise WiFi",
  },
  {
    icon: FaHotel,
    label: "Hotels",
    value: "1600+ Rooms",
    desc: "On-site stay options",
  },
];
