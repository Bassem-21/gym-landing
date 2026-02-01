import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutOurGym from "./components/AboutUs";
import OurCoaches from "./components/OurCoaches";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} onOpenMenu={() => setIsMenuOpen(true)} />
      <MobileMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Hero />
      <WhyChooseUs />
      <AboutOurGym />
      <OurCoaches />
    </>
  );
}
