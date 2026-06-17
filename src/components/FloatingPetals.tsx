import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number; // percentage
  size: number; // pixels
  delay: number; // seconds
  duration: number; // seconds
  swayDur: number; // seconds
  opacity: number;
  angle: number;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate initial set of petals
    const initialPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 12 + 10,
      delay: Math.random() * -10, // negative delay so they start immediately at different positions
      duration: Math.random() * 8 + 8,
      swayDur: Math.random() * 4 + 3,
      opacity: Math.random() * 0.4 + 0.3,
      angle: Math.random() * 360,
    }));
    setPetals(initialPetals);

    // Keep spawning new petals to replace old ones over time
    const interval = setInterval(() => {
      setPetals((prev) => {
        // Keep up to 22 petals on screen at once
        const nextId = prev.length ? Math.max(...prev.map((p) => p.id)) + 1 : 1;
        const newPetal: Petal = {
          id: nextId,
          left: Math.random() * 100,
          size: Math.random() * 12 + 10,
          delay: 0,
          duration: Math.random() * 8 + 8,
          swayDur: Math.random() * 4 + 3,
          opacity: Math.random() * 0.4 + 0.3,
          angle: Math.random() * 360,
        };
        // Filter out some old ones to avoid memory/performance leak
        const filtered = prev.filter((p) => p.delay !== 0 || Math.random() > 0.1);
        return [...filtered.slice(-20), newPetal];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]" aria-hidden="true">
      {petals.map((petal) => (
        <svg
          key={petal.id}
          className="absolute"
          style={{
            top: "-20px",
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.2}px`,
            opacity: petal.opacity,
            animation: `
              petalFall ${petal.duration}s linear ${petal.delay}s infinite,
              petalSway ${petal.swayDur}s ease-in-out infinite alternate
            `,
            transform: `rotate(${petal.angle}deg)`,
            color: Math.random() > 0.5 ? "#FFF0F1" : "#F7E7CE",
          }}
          viewBox="0 0 30 35"
          fill="currentColor"
        >
          {/* Custom realistic rose/flower petal path */}
          <path d="M15,0 C25,10 30,22 15,35 C0,22 5,10 15,0 Z" />
        </svg>
      ))}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes petalFall {
          0% {
            transform: translateY(-5vh) rotate(0deg);
          }
          100% {
            transform: translateY(105vh) rotate(360deg);
          }
        }
        @keyframes petalSway {
          0% {
            margin-left: -30px;
          }
          100% {
            margin-left: 30px;
          }
        }
      `}} />
    </div>
  );
}
