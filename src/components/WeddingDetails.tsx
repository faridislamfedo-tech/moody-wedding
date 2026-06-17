import { motion } from "motion/react";
import { Clock, Navigation, MapPin, Compass, ExternalLink } from "lucide-react";

export default function WeddingDetails() {
  return (
    <section id="venue-details" className="py-24 px-6 bg-[#F1EDE4] relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-light/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium mb-2"
          >
            Where & When
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-5xl serif font-medium tracking-tight text-[#2D2D2D] mb-4"
          >
            Wedding Details
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold/40 mx-auto mb-3" />
          <p className="text-sm font-sans font-light italic text-[#555555]">
            Celebration on the beautiful Mediterranean Coast of Alexandria
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left card: Sea-view & Detail Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex flex-col justify-between glass-card p-8 md:p-10 rounded-2xl shadow-xl border-gold/15"
          >
            <div>
              <div className="flex items-center gap-2 text-gold-dark font-sans tracking-widest text-xs uppercase mb-4">
                <Compass className="w-4 h-4 animate-spin-slow" />
                <span>Ceremony & Reception</span>
              </div>

              <h3 className="serif text-3xl text-[#2D2D2D] mb-4">
                El Mahrousa Hotel
              </h3>

              <p className="text-sm text-[#555555] font-sans font-light leading-relaxed mb-6">
                Our reception is celebrated at the magnificent El Mahrousa Hotel, Alexandria. The venue sits directly on the sea, showcasing spectacular views of Alexandria's historic coast, where the sky meets the Mediterranean shore.
              </p>

              {/* Arrival Hours */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-gold/10 text-gold-dark mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-[#2D2D2D] leading-tight">Guest Arrival</h4>
                    <p className="font-sans font-light text-xs text-gold-dark mt-0.5 font-medium">8:00 PM Promptly</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-gold/10 text-gold-dark mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-[#2D2D2D] leading-tight">Location Details</h4>
                    <p className="font-sans font-light text-xs text-[#555555] mt-0.5">Corniche Road, Sidi Bisher, Alexandria, Egypt</p>
                  </div>
                </div>
              </div>
            </div>

            {/* View Venue Button */}
            <div>
              <a 
                href="https://elmahrousahotel.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-sans text-xs uppercase tracking-widest font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 w-full group hover:-translate-y-0.5"
              >
                <span>View Venue</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right card: Scenic image and interactive map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Visual Header Image */}
            <div className="h-48 md:h-56 relative overflow-hidden rounded-2xl shadow-md border border-white">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
                alt="El Mahrousa Hotel, Alexandria Coast" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                <span className="text-white text-xs uppercase tracking-widest font-sans flex items-center gap-1.5 font-medium">
                  <Navigation className="w-4 h-4 text-gold-light" /> Mediterranean Seashore Venue
                </span>
              </div>
            </div>

            {/* Interactive embedded Map */}
            <div className="flex-1 min-h-[280px] rounded-2xl overflow-hidden border border-gold/30 shadow-lg relative bg-white">
              <iframe 
                src="https://maps.google.com/maps?q=El%20Mahrousa%20Hotel,%20Sidi%20Bisher,%20Alexandria,%20Egypt&t=m&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                title="El Mahrousa Hotel Alexandria Location Map"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
