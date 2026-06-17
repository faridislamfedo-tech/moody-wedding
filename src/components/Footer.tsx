import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-[#1C1C1C] text-white text-center relative overflow-hidden">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,33,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Main Initial logo & Name */}
        <div className="serif text-3xl md:text-4xl text-gold-light mb-4 select-none tracking-wider gold-gradient-text font-serif">
          Ahmed <span className="text-xl md:text-2xl font-light italic text-white/50">&</span> Mai
        </div>

        {/* Date and Location line */}
        <p className="opacity-50 font-sans tracking-[0.25em] text-[10px] md:text-xs uppercase mb-8">
          27 June 2026 • Alexandria, Egypt
        </p>

        {/* Love icon divider */}
        <div className="flex items-center gap-2 mb-8 select-none">
          <div className="w-12 h-[1px] bg-white/10" />
          <Heart className="w-4 h-4 text-gold fill-current" />
          <div className="w-12 h-[1px] bg-white/10" />
        </div>

        {/* Thank You Note */}
        <p className="font-sans font-light text-xs md:text-sm text-white/70 max-w-md mx-auto leading-relaxed italic">
          "Thank you for celebrating our special day with us. Your love, laughter, and support make our journey complete."
        </p>

        {/* Attribution / Copyright line */}
        <div className="mt-12 pt-12 border-t border-white/5 w-full text-[9px] font-mono tracking-widest uppercase text-white/30">
          <p>© {currentYear} Ahmed & Mai. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
