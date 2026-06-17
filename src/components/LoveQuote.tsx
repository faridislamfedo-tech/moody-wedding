import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function LoveQuote() {
  return (
    <section className="py-28 text-center bg-white px-6 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute left-1/2 top-4 -translate-x-1/2 text-gold-light/10 text-9xl font-serif select-none pointer-events-none">
        ❦
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center"
        >
          {/* Decorative quote quote open icon */}
          <span className="serif text-8xl text-gold/25 block leading-none h-12 select-none">“</span>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl serif italic leading-relaxed text-[#2D2D2D] max-w-3xl">
            Every love story is beautiful, but ours is our favorite.
          </h2>

          <span className="serif text-8xl text-gold/25 block leading-none h-6 select-none mt-4">”</span>

          {/* Golden flower and heart separator */}
          <div className="mt-10 flex justify-center items-center gap-4 text-gold select-none">
            <span className="text-lg">❀</span>
            <div className="w-8 h-[1px] bg-gold/35" />
            <Heart className="w-5 h-5 text-gold fill-gold-light/40 animate-pulse" />
            <div className="w-8 h-[1px] bg-gold/35" />
            <span className="text-lg">❀</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
