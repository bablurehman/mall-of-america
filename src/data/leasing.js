import { FaGem, FaStar, FaStore, FaBolt, FaUtensils } from "react-icons/fa";

export const leasingCategories = {
  Luxury: {
    icon: FaGem,
    dot: "bg-yellow-400",
    badge: "bg-yellow-400/10 text-yellow-600 border-yellow-400/30",
  },

  Flagship: {
    icon: FaStar,
    dot: "bg-blue-400",
    badge: "bg-blue-400/10 text-blue-600 border-blue-400/30",
  },

  "Mid-Tier": {
    icon: FaStore,
    dot: "bg-green-400",
    badge: "bg-green-400/10 text-green-600 border-green-400/30",
  },

  "Pop-Up": {
    icon: FaBolt,
    dot: "bg-purple-400",
    badge: "bg-purple-400/10 text-purple-600 border-purple-400/30",
  },

  "F&B": {
    icon: FaUtensils,
    dot: "bg-orange-400",
    badge: "bg-orange-400/10 text-orange-600 border-orange-400/30",
  },
};

export const leasingStats = [
  { value: "520+", label: "Current Tenants" },
  { value: "40M+", label: "Annual Footfall" },
  { value: "5.6M", label: "Sq Ft of Space" },
  { value: "$82K+", label: "Avg. Visitor HHI" },
];

export const leasingSegments = [
  {
    key: "Luxury",
    headline: "Luxury & Designer",
    pitch:
      "Position your brand alongside the world's most recognized names. Our luxury wing delivers high-income shoppers with purchase intent and dwell times that convert.",
  },
  {
    key: "Flagship",
    headline: "Flagship Stores",
    pitch:
      "40M visitors. One address. A flagship here isn't just a store — it's a national statement. Command attention in North America's most-visited retail destination.",
  },
  {
    key: "Mid-Tier",
    headline: "High-Street & Mid-Tier",
    pitch:
      "The backbone of our retail mix. High-volume corridors, proven foot traffic, and a customer base that comes back. Ideal for growth brands ready to scale.",
  },
  {
    key: "Pop-Up",
    headline: "Pop-Up & Short-Term",
    pitch:
      "Test a market. Launch a product. Build buzz. Our flexible pop-up program gives brands 30–180 day placements in prime locations with no long-term commitment.",
  },
  {
    key: "F&B",
    headline: "Food & Beverage",
    pitch:
      "Dining is a destination at Mall of America — not an afterthought. Join a curated F&B mix that serves 150,000 visitors every weekend.",
  },
];

export const leasingTenants = [
  // Luxury
  {
    name: "Louis Vuitton",
    category: "Luxury",
    zone: "North Luxury Wing",
    sqft: "3,200",
    status: "Available",
    description:
      "Prime corner unit. Adjacent to Gucci and Dior. Highest-income shopper corridor in the property.",
  },
  {
    name: "Rolex Boutique",
    category: "Luxury",
    zone: "North Luxury Wing",
    sqft: "1,800",
    status: "Inquire",
    description:
      "Standalone boutique opportunity in the heart of the luxury district.",
  },
  {
    name: "Hermès",
    category: "Luxury",
    zone: "East Luxury Court",
    sqft: "2,600",
    status: "Available",
    description:
      "Flagship-format space with dedicated valet access and private client suite potential.",
  },

  // Flagship
  {
    name: "Nike Flagship",
    category: "Flagship",
    zone: "Main Atrium Level 1",
    sqft: "12,000",
    status: "Available",
    description:
      "Anchor position at the property's highest-traffic entry point. 40M annual visitors pass this location.",
  },
  {
    name: "Apple Store",
    category: "Flagship",
    zone: "West Corridor",
    sqft: "8,500",
    status: "Inquire",
    description:
      "Purpose-built tech flagship space with full glass frontage and dedicated Genius Bar infrastructure.",
  },
  {
    name: "Adidas Arena",
    category: "Flagship",
    zone: "South Entry",
    sqft: "9,200",
    status: "Available",
    description:
      "Multi-floor concept space. Ideal for immersive brand experiences and launch events.",
  },

  // Mid-Tier
  {
    name: "Zara",
    category: "Mid-Tier",
    zone: "Level 2 South",
    sqft: "6,400",
    status: "Available",
    description:
      "High-volume retail corridor with strong repeat visitation. Neighbouring H&M and Uniqlo.",
  },
  {
    name: "Levi's",
    category: "Mid-Tier",
    zone: "Level 1 East",
    sqft: "3,100",
    status: "Available",
    description:
      "Street-level placement with full storefront visibility and digital signage rights.",
  },
  {
    name: "Sephora",
    category: "Mid-Tier",
    zone: "Beauty Row",
    sqft: "4,200",
    status: "Inquire",
    description:
      "Dedicated beauty corridor with high female 18–44 demographic concentration.",
  },

  // Pop-Up
  {
    name: "Brand Launch Bay A",
    category: "Pop-Up",
    zone: "Rotunda Plaza",
    sqft: "800",
    status: "Available",
    description:
      "30–180 day flex lease. Central atrium positioning with 150K+ weekend visitors. Perfect for product launches.",
  },
  {
    name: "Brand Launch Bay B",
    category: "Pop-Up",
    zone: "North Entry Court",
    sqft: "600",
    status: "Available",
    description:
      "High-footfall entry activation zone. Full branding rights. Turnkey setup included.",
  },
  {
    name: "Seasonal Retail Unit",
    category: "Pop-Up",
    zone: "Level 3 Bridge",
    sqft: "1,200",
    status: "Available",
    description:
      "Ideal for seasonal campaigns, DTC brands, or entertainment IP activations.",
  },

  // F&B
  {
    name: "Restaurant Row Unit 4",
    category: "F&B",
    zone: "Dining District",
    sqft: "3,800",
    status: "Available",
    description:
      "Full-service restaurant opportunity. Outdoor terrace access. Adjacent to Cheesecake Factory and P.F. Chang's.",
  },
  {
    name: "Fast Casual Kiosk",
    category: "F&B",
    zone: "Food Court Level 1",
    sqft: "500",
    status: "Available",
    description:
      "High-turnover kiosk format. 20,000+ daily passes. Ideal for QSR expansion into Minnesota.",
  },
  {
    name: "Café / Grab-and-Go",
    category: "F&B",
    zone: "Office Tower Lobby",
    sqft: "1,100",
    status: "Inquire",
    description:
      "Captive corporate audience of 5,000+ daily office workers plus general mall traffic.",
  },
];
