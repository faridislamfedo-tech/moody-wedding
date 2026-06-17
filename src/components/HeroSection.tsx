import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronDown, Calendar, MapPin } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    // Target date: June 27, 2026 at 20:00:00 (8:00 PM) Egypt Time (approx UTC+3 or same timezone as locally specified)
    const targetDate = new Date("2026-06-27T20:00:00").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("our-story");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 45, 45, 0.45), rgba(0, 0, 0, 0.55)), url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000')`,
          backgroundPosition: "center 35%",
        }}
      />

      {/* Luxury Geometric Border Overlay */}
      <div className="absolute inset-4 md:inset-8 border border-white/15 z-10 pointer-events-none" />
      <div className="absolute inset-6 md:inset-11 border border-white/5 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl px-6 flex flex-col items-center">
        
        {/* Sub-header */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-white/80 uppercase tracking-[0.3em] text-[10px] md:text-xs font-sans mb-6"
        >
          Together with their families invite you to celebrate the wedding of
        </motion.p>

        {/* Ahmed & Mai */}
        <div className="flex flex-col items-center justify-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-6xl sm:text-7xl md:text-[9.5rem] tracking-tight leading-none font-serif select-none"
          >
            Ahmed
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-gold-light my-2 select-none"
          >
            <span className="serif text-4xl sm:text-5xl md:text-6xl font-light italic opacity-90">&</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-6xl sm:text-7xl md:text-[9.5rem] tracking-tight leading-none font-serif select-none"
          >
            Mai
          </motion.h1>
        </div>

        {/* Location & Date Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 text-white/95 mb-10 text-sm md:text-base font-sans tracking-wide"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="font-medium">27 June 2026</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="italic">El Mahrousa Hotel, Alexandria</span>
          </div>
        </motion.div>

        {/* Countdown Timer with Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="glass-card bg-black/30 border-white/10 p-5 md:p-7 rounded-2xl w-full max-w-lg mb-8"
        >
          {timeLeft.isCompleted ? (
            <p className="text-gold text-2xl serif tracking-wider uppercase py-2 animate-pulse">
              The Celebration Has Begun ❤️
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-2 md:gap-4 text-white">
              <div className="text-center">
                <span className="block text-2xl md:text-4xl font-serif text-gold-light tracking-tight">{timeLeft.days.toString().padStart(2, '0')}</span>
                <span className="text-[9px] md:text-xxs uppercase tracking-[0.2em] font-sans text-white/60">Days</span>
              </div>
              <div className="text-center border-l border-white/10">
                <span className="block text-2xl md:text-4xl font-serif text-gold-light tracking-tight">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="text-[9px] md:text-xxs uppercase tracking-[0.2em] font-sans text-white/60">Hours</span>
              </div>
              <div className="text-center border-l border-white/10">
                <span className="block text-2xl md:text-4xl font-serif text-gold-light tracking-tight">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="text-[9px] md:text-xxs uppercase tracking-[0.2em] font-sans text-white/60 font-medium">Mins</span>
              </div>
              <div className="text-center border-l border-white/10">
                <span className="block text-2xl md:text-4xl font-serif text-gold-light tracking-tight">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="text-[9px] md:text-xxs uppercase tracking-[0.2em] font-sans text-white/60">Secs</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Animated Scroll Indicator - clickable */}
      <motion.button 
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.5, duration: 1 }}
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-30"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-white/40 uppercase tracking-[0.3em] text-[8px] font-sans font-semibold group-hover:text-white/60 transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="p-1 px-2 rounded-full border border-white/20 group-hover:border-gold transition-colors"
        >
          <ChevronDown className="w-5 h-5 text-gold-light" />
        </motion.div>
      </motion.button>
    </section>
  );
}
