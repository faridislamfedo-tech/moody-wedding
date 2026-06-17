import { ComponentType } from "react";
import { motion } from "motion/react";
import { Users, GlassWater, Utensils, Music, Sparkles } from "lucide-react";

interface ScheduleEvent {
  time: string;
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
}

const EVENTS: ScheduleEvent[] = [
  {
    time: "8:00 PM",
    title: "Guest Arrival",
    desc: "We welcome our beloved friends and family to the seaside event space at El Mahrousa Hotel Alexandria.",
    icon: Users,
  },
  {
    time: "8:30 PM",
    title: "Welcome Reception",
    desc: "Greet the seaside sunset with refreshing mocktails, champagne reception, and ambient melodies.",
    icon: GlassWater,
  },
  {
    time: "9:00 PM",
    title: "The Royal Dinner",
    desc: "A luxury Mediterranean dining service crafted meticulously by el-Mahrousa's top culinary chefs.",
    icon: Utensils,
  },
  {
    time: "10:00 PM",
    title: "Celebration & Music",
    desc: "First dance, cake cutting, and celebrating on the dance floor overlooking the Mediterranean waves.",
    icon: Music,
  },
  {
    time: "12:00 AM",
    title: "Wedding Finale",
    desc: "A sparking, magical send-off to crown the beautiful evening and mark the next chapter of love.",
    icon: Sparkles,
  },
];

export default function Schedule() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section id="wedding-schedule" className="py-24 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium mb-2"
          >
            The Itinerary
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-5xl serif font-medium tracking-tight text-[#2D2D2D] mb-4"
          >
            Wedding Schedule
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold/40 mx-auto mb-3" />
          <p className="text-xs tracking-wider uppercase font-sans text-gold-dark font-semibold">
            Saturday, 27 June 2026
          </p>
        </div>

        {/* Dynamic Timeline Schedule */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-6 md:pl-0"
        >
          {/* Timeline background trail line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] bg-gold/25 -translate-x-1/2" />

          <div className="space-y-12">
            {EVENTS.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row relative items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Absolute Timeline Icon Node */}
                  <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-gold border border-gold-light text-white shadow-lg">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Empty block on one side on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Text card on the other side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 pr-0 md:px-10">
                    <div className="bg-ivory hover:bg-[#FAF8F2] border border-gold/15 p-6 rounded-2xl transition-colors duration-300 shadow-md">
                      
                      {/* Time Marker */}
                      <span className="serif text-base font-bold text-gold-dark block mb-1">
                        {event.time}
                      </span>

                      {/* Event Title */}
                      <h4 className="font-sans font-semibold text-[#2D2D2D] text-lg mb-2">
                        {event.title}
                      </h4>

                      {/* Summary Notes */}
                      <p className="text-xs text-[#666666] leading-relaxed font-sans font-light">
                        {event.desc}
                      </p>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
