import Hero from "../sections/Hero";
import Overview from "../sections/Overview";
import Retail from "../sections/Retail";
import Luxury from "../sections/Luxury";
import Dining from "../sections/Dining";
import Entertainment from "../sections/Entertainment";
import EventsSection from "../sections/EventsSection";
import CTA from "../sections/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Retail />
      <Luxury />
      <Dining />
      <Entertainment />
      <EventsSection />
      <CTA />
    </>
  );
};

export default Home;