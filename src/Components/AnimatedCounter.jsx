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
    <div id="counter" className=" ">
      <div className="mx-auto px-20 grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={item.label}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="card bg-zinc-900 rounded-lg p-10 flex flex-col justify-center relative overflow-hidden isolate"
            style={{
              "--start": "0",
              "--border-color": "#1bf87b",
            }}
          >
            <div className="counter-number text-white text-5xl font-bold mb-2 relative z-10">
              <CountUp suffix={item.suffix} end={item.value} />
              <div className="text-white text-3xl font-normal mt-2">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
