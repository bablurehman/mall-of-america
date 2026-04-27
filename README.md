# Mall Sales Deck — Interactive Browser-Based Sales Presentation

An immersive, browser-based interactive sales deck built for Mall of America, one of the world’s largest and most iconic mixed-use retail and entertainment destinations.

Designed to replace fragmented PDFs, spreadsheets, and manual presentations with a premium, self-guided digital pitch experience for prospective retail tenants, brand sponsors, and event partners—communicating the scale, energy, and commercial opportunity of the property through interactive storytelling, video, and data-driven presentation.


## Live Demo

**Deployed URL:** https://mall-of-americas.vercel.app


## GitHub Repository

**Repository:** https://github.com/bablurehman/mall-of-america


## Project Objective

This project was created as part of an interview assignment to design and develop a premium interactive sales deck for one of the world’s largest shopping malls.

The goal was to build a cinematic, non-linear, video-first browser experience that:

* Tells the property’s story without narration
* Creates immediate emotional buy-in
* Highlights leasing, sponsorship, and event opportunities
* Functions as both a live sales presentation tool and standalone exploratory experience



## Chosen Property

**Mall of America**


## Tech Stack

* **Frontend Framework:** React 19
* **Build Tool:** Vite
* **Routing:** React Router DOM
* **Styling:** Tailwind CSS v4
* **Animation:** Framer Motion
* **Icons:** React Icons
* **Linting:** ESLint


## Key Features

### Cinematic Intro Experience

* Fullscreen autoplay/video-first hero section
* Immediate visual storytelling focused on scale and impact

### Non-Linear Navigation

* Digideck-style section jumping
* Self-guided exploration for users

### Modular Storytelling Sections

* Why This Property
* Retail Ecosystem
* Luxury Positioning
* Dining & Lifestyle
* Attractions & Entertainment
* Events / Platform Opportunities

### Expandable Architecture

* Componentized structure designed for future expansion into:

  * Leasing Submodules
  * Sponsorship Decks
  * Venue-Specific Modules
  * Event Booking Experiences

### Responsive & Performance Focused

* Desktop + tablet optimized
* Lazy-loaded media/assets
* Performance-conscious animation implementation


## Design Decisions

### Luxury / Premium Visual Language

The interface was intentionally designed to reflect the polish and confidence of luxury digital experiences inspired by:

* Apple
* Tesla
* Hermès
* Digideck
* Disney / Universal destination storytelling

### Video-First Storytelling

Video is used as a primary communication layer rather than decorative enhancement to better communicate the scale, energy, and experiential nature of the property.

### Business-Oriented Information Hierarchy

Each section was structured to support one or more commercial objectives:

* Drive retail leasing inquiries
* Drive sponsorship / activation conversations
* Promote venue/event booking opportunities



## Architecture Overview

```plaintext
src/
├── assets/          # Images, videos, static assets
├── components/
│   ├── layout/      # Navbar, wrappers, shared layout
│   ├── sections/    # Main deck sections
│   ├── ui/          # Reusable UI components
├── data/            # Static content/data models
├── hooks/           # Custom hooks
├── pages/           # Route-level pages/modules
└── App.jsx
```


## AI Tools Used

AI tools were integrated throughout the design and development process to accelerate execution, improve iteration speed, and support high-quality creative output.

### ChatGPT

Used for:

* Frontend architecture planning
* Component/system design ideation
* UX and interaction brainstorming
* Content refinement and narrative structuring
* Development troubleshooting and implementation support

### Claude

Used for:

* Alternative architectural review and implementation validation
* UI/UX feedback and design iteration support
* Refinement of product/storytelling strategy

### Gemini

Used for:

* AI-assisted image generation and visual concept creation
* Supplemental creative asset production where source media was limited

These tools were used to enhance workflow efficiency while maintaining full human direction over product strategy, design decisions, and implementation quality.


## Setup Instructions

### Clone Repository

```bash
git clone <https://github.com/bablurehman/mall-of-america>
cd mall-sales-deck
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```


## Future Improvements

Given additional time, planned enhancements would include:

* Deeper sub-module expansion for sponsorship/leasing/event paths
* CMS/content management integration for real sales team updates
* Analytics/tracking for engagement insights
* Dynamic personalization by prospect type
* Enhanced 3D / motion interactions


## Author Notes

This project was approached not as a marketing website, but as a purpose-built interactive sales enablement product.

The emphasis was placed on:

* Strategic storytelling
* Premium UX/UI craft
* Modular architecture
* Performance-conscious frontend engineering
* AI-accelerated workflow without sacrificing quality
