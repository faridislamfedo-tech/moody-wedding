import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

// Components
import FloatingPetals from "./components/FloatingPetals";
import MusicPlayer from "./components/MusicPlayer";
import HeroSection from "./components/HeroSection";
import OurStory from "./components/OurStory";
import WeddingDetails from "./components/WeddingDetails";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import LoveQuote from "./components/LoveQuote";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Artificial luxury timing delay for smooth load asset simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolled = (window.scrollY / totalScroll) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 1. Cinematic Luxury Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-ivory flex flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              {/* Initials */}
              <h1 className="text-5xl sm:text-7xl serif gold-gradient-text tracking-widest font-serif leading-none">
                A & M
              </h1>
              
              {/* Divider */}
              <div className="w-16 h-[0.5px] bg-gold/25 my-4 animate-width" />
              
              {/* Subtitle */}
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-dark/70 font-medium">
                Loading Invitation
              </p>
              
              <div className="mt-8 flex gap-1 justify-center items-center h-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-gold/70 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Scroll Progress Tracker Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gold z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 3. Luxury Interactive Experience Elements */}
      <FloatingPetals />
      <MusicPlayer />

      {/* 4. One-Page Storytelling Blocks */}
      <div className="overflow-x-hidden w-full relative">
        <HeroSection />
        <OurStory />
        <WeddingDetails />
        <Schedule />
        <Gallery />
        <RSVP />
        <LoveQuote />
        <Footer />
      </div>
    </>
  );
}
