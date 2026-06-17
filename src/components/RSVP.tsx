import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Heart, Mail, Users, Phone, ShieldCheck } from "lucide-react";
import { RSVPEntry } from "../types";

export default function RSVP() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [guestsCount, setGuestsCount] = useState<number>(1);
  const [isAttending, setIsAttending] = useState<boolean>(true);
  const [message, setMessage] = useState("");
  
  const [savedRSVP, setSavedRSVP] = useState<RSVPEntry | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load existing RSVP from localStorage if present
  useEffect(() => {
    const existing = localStorage.getItem("ahmed_mai_wedding_rsvp");
    if (existing) {
      try {
        setSavedRSVP(JSON.parse(existing));
      } catch (err) {
        console.error("Local load failed", err);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    const rsvpData: RSVPEntry = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      guestsCount: isAttending ? guestsCount : 0,
      isAttending,
      message: message.trim(),
      submittedAt: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Simulate luxury API response / network delay
    setTimeout(() => {
      localStorage.setItem("ahmed_mai_wedding_rsvp", JSON.stringify(rsvpData));
      setSavedRSVP(rsvpData);
      setIsSubmitting(false);
      
      // Reset state fields
      setFullName("");
      setPhone("");
      setGuestsCount(1);
      setIsAttending(true);
      setMessage("");
    }, 1250);
  };

  const handleEdit = () => {
    if (!savedRSVP) return;
    setFullName(savedRSVP.fullName);
    setPhone(savedRSVP.phone);
    setGuestsCount(savedRSVP.guestsCount || 1);
    setIsAttending(savedRSVP.isAttending);
    setMessage(savedRSVP.message);
    setSavedRSVP(null); // Return to form mode
  };

  const handleDelete = () => {
    if (window.confirm("Would you like to retract your RSVP?")) {
      localStorage.removeItem("ahmed_mai_wedding_rsvp");
      setSavedRSVP(null);
    }
  };

  return (
    <section 
      id="rsvp" 
      className="py-24 px-6 bg-cover bg-center relative flex items-center justify-center min-h-[600px]"
      style={{
        backgroundImage: `linear-gradient(rgba(252, 251, 247, 0.82), rgba(252, 251, 247, 0.88)), url('https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=2000')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-3xl w-full relative z-10">
        
        <AnimatePresence mode="wait">
          {!savedRSVP ? (
            /* RSVP FORM ELEMENT */
            <motion.div
              key="rsvp-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="glass-card shadow-xl p-8 md:p-12 lg:p-14 border border-gold/15 rounded-3xl"
            >
              <div className="text-center mb-10">
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold mb-2 block">
                  Kindly Respond
                </span>
                <h2 className="text-4xl md:text-5xl serif text-[#2D2D2D] mb-3">
                  RSVP
                </h2>
                <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-2" />
                <p className="text-xs text-[#555555] italic font-sans font-light">
                  Please confirm your attendance by June 1, 2026
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 font-sans">
                
                {/* Inputs: Normal view */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xxs uppercase tracking-widest text-[#555555] font-semibold mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Farid Islam"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-[#CCCCCC] focus:border-gold py-2.5 outline-none transition-colors text-sm font-light text-[#2D2D2D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xxs uppercase tracking-widest text-[#555555] font-semibold mb-2">
                      Phone Number
                    </label>
                    <div className="relative flex items-center">
                      <Phone className="absolute right-0 w-4 h-4 text-[#888888] pointer-events-none" />
                      <input 
                        type="tel" 
                        placeholder="e.g. +20 100 0000 000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full bg-transparent border-b border-[#CCCCCC] focus:border-gold py-2.5 pr-6 outline-none transition-colors text-sm font-light text-[#2D2D2D]"
                      />
                    </div>
                  </div>
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xxs uppercase tracking-widest text-[#555555] font-semibold mb-2">
                      Will you attend?
                    </label>
                    <select
                      value={isAttending ? "yes" : "no"}
                      onChange={(e) => setIsAttending(e.target.value === "yes")}
                      className="w-full bg-transparent border-b border-[#CCCCCC] focus:border-gold py-2.5 outline-none transition-colors text-sm font-light text-[#2D2D2D]"
                    >
                      <option value="yes" className="text-black bg-white">Joyfully Accept</option>
                      <option value="no" className="text-black bg-white">Regretfully Decline</option>
                    </select>
                  </div>

                  <div className={`${isAttending ? "opacity-100" : "opacity-40 pointer-events-none"} transition-opacity`}>
                    <label className="block text-xxs uppercase tracking-widest text-[#555555] font-semibold mb-2">
                      Number of Guests
                    </label>
                    <div className="relative flex items-center">
                      <Users className="absolute right-0 w-4 h-4 text-[#888888] pointer-events-none" />
                      <select
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                        disabled={!isAttending}
                        className="w-full bg-transparent border-b border-[#CCCCCC] focus:border-gold py-2.5 pr-6 outline-none transition-colors text-sm font-light text-[#2D2D2D]"
                      >
                        <option value={1} className="text-black bg-white">1 Person (Self)</option>
                        <option value={2} className="text-black bg-white">2 Persons</option>
                        <option value={3} className="text-black bg-white">3 Persons</option>
                        <option value={4} className="text-black bg-white">4 Persons</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Textarea message box */}
                <div>
                  <label className="block text-xxs uppercase tracking-widest text-[#555555] font-semibold mb-2">
                    Message for the couple
                  </label>
                  <textarea 
                    placeholder="Leave a sweet congratulatory note or diet requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-transparent border-[#CCCCCC] hover:border-gold focus:border-gold rounded-lg p-3 outline-none transition-colors text-sm font-light text-[#2D2D2D] h-28 border border-neutral-300 resize-none"
                  />
                </div>

                {/* Confirm Attendance Button */}
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-gold hover:bg-gold-dark text-white font-sans text-xs uppercase tracking-widest font-semibold py-4 px-12 rounded-full shadow-lg hover:shadow-gold/20 transition-all duration-300 cursor-pointer disabled:bg-[#CCCCCC] disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending RSVP...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>Confirm Attendance</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </motion.div>
          ) : (
            /* SUBMISSION COMPLETED / INVITATION STATE BOARD CARD */
            <motion.div
              key="rsvp-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="bg-white border-gold border rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
            >
              {/* Golden circular sparkles badge */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-light/25 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-light/15 rounded-tr-full pointer-events-none" />

              <div className="w-16 h-16 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>

              {/* Congratulations Header */}
              <span className="text-xs uppercase tracking-widest text-gold font-sans font-semibold mb-1 block">
                RSVP Registered Successfully
              </span>
              <h2 className="text-3xl md:text-4xl serif text-[#2D2D2D] mb-4">
                Thank You, {savedRSVP.fullName}!
              </h2>
              <p className="max-w-md mx-auto text-sm text-[#555555] font-sans font-light leading-relaxed mb-8">
                {savedRSVP.isAttending ? (
                  <>
                    "We are absolutely thrilled and joyfully honor your presence to share this milestone in our life. Your formal invitation card is locked in!"
                  </>
                ) : (
                  <>
                    "Your message has been received with warm regards. Although we will miss you at our wedding table, we value your blessing from the heart!"
                  </>
                )}
              </p>

              {/* Saved Card details dashboard */}
              <div className="max-w-md mx-auto bg-ivory/50 border border-gold/15 p-5 md:p-6 rounded-2xl text-left font-sans mb-8">
                <span className="text-xxs uppercase tracking-widest text-gold-dark font-semibold border-b border-gold/10 pb-2 block mb-4">
                  Confirmed Registration Receipt
                </span>
                
                <div className="space-y-3.5 text-xs">
                  <p className="flex justify-between border-b border-black/5 pb-1.5 font-light">
                    <span className="text-[#888888] uppercase tracking-wider text-[10px]">Registered Name</span>
                    <span className="font-semibold text-[#2D2D2D]">{savedRSVP.fullName}</span>
                  </p>
                  <p className="flex justify-between border-b border-black/5 pb-1.5 font-light">
                    <span className="text-[#888888] uppercase tracking-wider text-[10px]">Contact Phone</span>
                    <span className="font-semibold text-[#2D2D2D]">{savedRSVP.phone}</span>
                  </p>
                  <p className="flex justify-between border-b border-black/5 pb-1.5 font-light">
                    <span className="text-[#888888] uppercase tracking-wider text-[10px]">Guest Status</span>
                    <span className="font-semibold text-gold-dark">
                      {savedRSVP.isAttending ? `Attending (${savedRSVP.guestsCount} ${savedRSVP.guestsCount === 1 ? 'person' : 'persons'})` : 'Decline'}
                    </span>
                  </p>
                  {savedRSVP.message && (
                    <p className="pt-1.5">
                      <span className="text-[#888888] uppercase tracking-wider text-[10px] block mb-1">Your message</span>
                      <span className="font-light italic text-xs text-[#555555] leading-relaxed block bg-white px-3 py-2 rounded border border-black/5">
                        "{savedRSVP.message}"
                      </span>
                    </p>
                  )}
                  <p className="text-[10px] text-right font-mono text-[#888888] tracking-widest uppercase mt-4">
                    Registered: {savedRSVP.submittedAt}
                  </p>
                </div>
              </div>

              {/* Action Buttons to edit or reset */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  type="button"
                  onClick={handleEdit}
                  className="w-full sm:w-auto border border-gold text-gold hover:bg-gold/10 font-sans text-xs uppercase tracking-widest font-semibold py-3 px-8 rounded-full transition-all duration-300 cursor-pointer"
                >
                  Edit RSVP
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="w-full sm:w-auto text-red-500 hover:bg-red-500/5 hover:text-red-600 font-sans text-xs uppercase tracking-widest font-semibold py-3 px-8 rounded-full transition-all duration-300 cursor-pointer"
                >
                  Cancel RSVP
                </button>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5">
                <p className="text-xxs font-sans text-[#aaaaaa] flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Checked and secure LocalStorage persistence
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
