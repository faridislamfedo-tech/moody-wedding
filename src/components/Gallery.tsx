import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GalleryItem } from "../types";

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    caption: "A joyful stroll on our engagement day.",
    aspectRatio: "portrait",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    caption: "The radiant spark of our beginnings.",
    aspectRatio: "landscape",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
    caption: "Capturing a moment of pure bliss.",
    aspectRatio: "square",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    caption: "An elegant evening together.",
    aspectRatio: "portrait",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1465495910483-0d67410469c3?auto=format&fit=crop&q=80&w=800",
    caption: "Gazing into our beautiful future.",
    aspectRatio: "landscape",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&q=80&w=800",
    caption: "Surrounded by summer flowers and ocean breezes.",
    aspectRatio: "portrait",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    caption: "The dream seaside beach reception.",
    aspectRatio: "landscape",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1507504038482-76210f54ce55?auto=format&fit=crop&q=80&w=800",
    caption: "Ocean views and promises of forever.",
    aspectRatio: "square",
  },
];

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    document.body.style.overflow = "hidden"; // disable background scroll
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = "unset"; // restore background scroll
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => 
      prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1
    );
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => 
      prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section id="gallery" className="py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium mb-2"
          >
            A Glimpse of our love
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-5xl serif font-medium tracking-tight text-[#2D2D2D] mb-4"
          >
            Captured Moments
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold/40 mx-auto" />
        </div>

        {/* Editorial Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden rounded-2xl group cursor-zoom-in shadow-md hover:shadow-xl transition-all duration-300 border border-gold/10"
            >
              {/* Overlay with Zoom Indicator */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center text-white">
                <ZoomIn className="w-8 h-8 text-gold-light mb-2 scale-75 group-hover:scale-100 transition-transform duration-300" />
                <span className="text-[10px] uppercase tracking-widest font-sans font-medium">Enlarge Portrait</span>
              </div>

              {/* Responsive Zooming Image */}
              <img 
                src={item.src} 
                alt={item.caption}
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] group-hover:scale-105"
                loading="lazy"
              />

              {/* Caption Tag (visible on small screen overlays or subtle layout bar) */}
              <div className="p-4 bg-white/95 border-t border-gold/15 flex flex-col">
                <p className="text-xs text-[#2D2D2D] font-sans font-light italic truncate">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal Animation */}
        <AnimatePresence>
          {activeImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            >
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer z-50"
                title="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Selector Button */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 md:left-8 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-colors cursor-pointer z-50"
                title="Previous Image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Right Selector Button */}
              <button 
                onClick={handleNext}
                className="absolute right-4 md:right-8 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-colors cursor-pointer z-50"
                title="Next Image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Central Dynamic Card Display */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[80vh] flex flex-col items-center bg-[#1a1a1a]/40 p-2 md:p-3 rounded-2xl border border-white/10"
              >
                <img 
                  key={GALLERY_ITEMS[activeImageIndex].id}
                  src={GALLERY_ITEMS[activeImageIndex].src} 
                  alt={GALLERY_ITEMS[activeImageIndex].caption} 
                  className="max-h-[70vh] max-w-full rounded-xl object-contain shadow-2xl"
                />

                {/* Lightbox Caption bar footer */}
                <div className="mt-3 text-center px-4 w-full">
                  <p className="text-white/90 text-sm italic font-sans font-light leading-relaxed">
                    {GALLERY_ITEMS[activeImageIndex].caption}
                  </p>
                  <p className="text-white/30 text-xxs font-mono tracking-widest mt-1 uppercase">
                    Moments of Ahmed & Mai • {activeImageIndex + 1} / {GALLERY_ITEMS.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
