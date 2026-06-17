import { motion } from "motion/react";
import { TimelineItem } from "../types";
import { Heart, Sparkles, Star, Milestone } from "lucide-react";

const STORY_DATA: TimelineItem[] = [
  {
    id: "first-meeting",
    year: "2025",
    title: "First Meeting",
    description: "Ahmed and Mai met in 2025 and immediately formed a meaningful connection. What began as a simple introduction instantly felt like a milestone that would change their lives forever.",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "growing-closer",
    year: "2025",
    title: "Growing Closer",
    description: "After meeting, they began talking regularly and getting to know each other better. What started as lighthearted conversations quickly became something incredibly special, finding comfort and deep trust in each details.",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "engagement",
    year: "2025",
    title: "Our Engagement",
    description: "As their love grew stronger, Ahmed and Mai decided to take the next step. They got engaged, surrounded by the infinite love, laughter, and support of their beautiful families in a warmth-filled gathering.",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "wedding-day",
    year: "2026",
    title: "The Wedding Day",
    description: "Now they are excited to begin their next chapter together and celebrate their wedding with their absolute closest family and friends at El Mahrousa Hotel in Alexandria. The begining of forever.",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
  },
];

export default function OurStory() {
  const getIcon = (id: string) => {
    switch (id) {
      case "first-meeting":
        return <Star className="w-5 h-5 text-gold-dark" />;
      case "growing-closer":
        return <Sparkles className="w-5 h-5 text-gold-dark" />;
      case "engagement":
        return <Heart className="w-5 h-5 text-gold-dark fill-gold-light" />;
      default:
        return <Milestone className="w-5 h-5 text-gold-dark" />;
    }
  };

  return (
    <section id="our-story" className="py-24 px-6 relative bg-ivory overflow-hidden">
      
      {/* Background Floral/Seaside Aesthetics */}
      <div className="absolute top-10 left-5 text-gold-light/10 select-none pointer-events-none text-9xl font-serif">
        ❀
      </div>
      <div className="absolute bottom-10 right-5 text-gold-light/10 select-none pointer-events-none text-9xl font-serif">
        ❀
      </div>

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium mb-2"
          >
            How our journey began
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-5xl serif font-medium tracking-tight text-[#2D2D2D] mb-4"
          >
            Our Story
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold/40 mx-auto" />
        </div>

        {/* Timeline Line Container */}
        <div className="relative">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gold/25 -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {STORY_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id} 
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* central milestone dot */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 md:top-auto -translate-x-1/2 z-30 flex items-center justify-center p-1 bg-ivory rounded-full border border-gold/40 shadow-inner">
                    <div className="w-8 h-8 rounded-full bg-gold-light/30 flex items-center justify-center">
                      {getIcon(item.id)}
                    </div>
                  </div>

                  {/* Empty side placeholder on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Active content side */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 pr-0 md:px-12 flex flex-col justify-center"
                  >
                    <div className="glass-card p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:border-gold/35 transition-all duration-300">
                      
                      {/* Event year tag */}
                      <span className="serif text-xs md:text-sm text-gold-dark font-semibold bg-gold-light/20 px-3 py-1 rounded-full inline-block mb-3">
                        {item.year}
                      </span>
                      
                      {/* Card Title */}
                      <h3 className="text-xl md:text-2xl serif text-[#2D2D2D] mb-3">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-[#555555] text-xs md:text-sm leading-relaxed mb-4 font-sans font-light">
                        {item.description}
                      </p>

                      {/* Photo frame */}
                      <div className="relative overflow-hidden rounded-xl h-44 sm:h-56 shadow-sm group">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors duration-500" />
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
