import React, { useEffect, useRef, useState } from "react";
import Karo1 from '../../assets/TC.jpg';
import Karo2 from '../../assets/JF.jpg';
import Karo3 from '../../assets/MM.jpg';
import Karo4 from '../../assets/RL.jpg';
import Karo5 from '../../assets/KD.jpg';
import Karo6 from '../../assets/TF.jpg';
import Karo7 from '../../assets/FG.jpg';
import Karo8 from '../../assets/OP.jpg';

const items = [
  { id: 1, title: 'Reckless', image: Karo4 },
  { id: 2, title: 'Maple Manta', image: Karo3 },
  { id: 3, title: 'Taufan', image: Karo6 },
  { id: 4, title: 'Flat Guy', image: Karo7 },
  { id: 5, title: 'Ophiucus', image: Karo8 },
  { id: 6, title: 'Keinginan Daging', image: Karo5 },
  { id: 7, title: 'Trash Can', image: Karo1 },
  { id: 8, title: 'Junk Food', image: Karo2 },
  { id: 9, title: 'Reckless', image: Karo4 },
  { id: 10, title: 'Maple Manta', image: Karo3 },
  { id: 11, title: 'Taufan', image: Karo6 },
  { id: 12, title: 'Flat Guy', image: Karo7 },
  { id: 13, title: 'Ophiucus', image: Karo8 },
  { id: 14, title: 'Keinginan Daging', image: Karo5 },
  { id: 15, title: 'Trash Can', image: Karo1 },
  { id: 16, title: 'Junk Food', image: Karo2 },
];

export default function Carousel({ showDay }) {
  const containerRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const firstSet = containerRef.current.querySelector(".carousel-set");
      if (firstSet) {
        setTrackWidth(firstSet.offsetWidth);
      }
    }
  }, []);

  return (
    <div className={`w-full bg-[#3c3c3c] border-t-4 border-r-4 border-b-4 border-l-4 border-t-[#585858] border-r-[#585858] border-b-[#1b1b1b] border-l-[#1b1b1b] h-1/4 overflow-hidden select-none z-20 relative flex justify-between items-center transition-all duration-1000 ease-in-out
        ${showDay ? 'bottom-[-25%]' : 'bottom-[63%]'}`}>
      <div className="text-white mb-5 mt-5 px-8 font-micro min-w-1/4 z-30 bg-[#3c3c3c]">
        <h2 className="text-8xl font-bold tracking-widest">MY WORKS</h2>
        <p className="text-xl mt-2 max-w-2xl">
          Here are some examples of my work in graphic design. I've been passionate about graphic design since vocational high school, and I have a strong desire to learn more about UI/UX design.
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex flex-row gap-6 whitespace-nowrap will-change-transform w-full"
        style={{
          animation: `slide-loop 40s linear infinite`,
          "--slide-distance": `-${trackWidth}px`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...Array(2)].map((_, i) => (
          <div className="carousel-set flex flex-row gap-6" key={i}>
            {items.map((item) => (
              <div
                key={`${i}-${item.id}`}
                className="group relative min-w-[180px] h-[180px] bg-white rounded overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#222] text-white text-lg px-4 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(var(--slide-distance));
          }
        }
      `}</style>
    </div>
  );
}
