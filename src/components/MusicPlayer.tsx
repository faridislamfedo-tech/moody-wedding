import { useState, useEffect, useRef } from "react";
import { Music, Music4 } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio instance
    // Erik Satie's Gymnopédie No. 1 - extremely elegant, high-end, soothing piano.
    const audio = new Audio("https://upload.wikimedia.org/wikipedia/commons/a/ad/Gymnop%C3%A9die_No._1_by_Erik_Satie%2C_performed_by_Laurence_Windsor.mp3");
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    // Timeout to fade tooltip
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    return () => {
      audio.pause();
      clearTimeout(timer);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    setShowTooltip(false);
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio play blocked by browser policies: ", err);
          // Standard browser restriction - user interaction required
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="bg-ivory text-black border border-gold/40 px-3 py-1.5 rounded-lg text-xs font-sans tracking-wide shadow-xl animate-bounce flex items-center gap-1.5 glass-card">
          <span className="text-gold">❤️</span> Tap to play ambient music
        </div>
      )}

      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 cursor-pointer ${
          isPlaying 
            ? "bg-gold text-white scale-110 shadow-gold/30" 
            : "bg-white text-gold border border-gold/30 hover:bg-gold-light/20"
        }`}
        id="bg-music-toggle"
        title="Toggle romantic ambient music"
      >
        {isPlaying ? (
          <div className="flex items-end gap-0.5 justify-center h-4 w-4">
            <span className="w-[3px] bg-white rounded-full animate-wave" style={{ animationDelay: "0.1s" }}></span>
            <span className="w-[3px] bg-white rounded-full animate-wave" style={{ animationDelay: "0.5s" }}></span>
            <span className="w-[3px] bg-white rounded-full animate-wave" style={{ animationDelay: "0.3s" }}></span>
            <span className="w-[3px] bg-white rounded-full animate-wave" style={{ animationDelay: "0.7s" }}></span>
          </div>
        ) : (
          <Music className="w-5 h-5 animate-pulse" />
        )}
      </button>
    </div>
  );
}
