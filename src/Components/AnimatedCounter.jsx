import React, { useRef } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);

    card.style.setProperty("--start", angle);
  };

  return (
    <div id="counter" className="w-full py-10">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {counterItems.map((item, index) => (
          <div
            key={item.label}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="card bg-zinc-900 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center items-center relative overflow-hidden isolate transition-transform duration-300"
            style={{
              "--start": "0",
              "--border-color": "#1bf87b",
            }}
          >
            <div className="counter-number text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 relative z-10 text-center">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white text-lg sm:text-xl lg:text-2xl font-normal mt-2 text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
