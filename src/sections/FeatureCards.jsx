import React, { useRef } from "react";
import { abilities } from "../constants";

const FeatureCards = () => {
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
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={title}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="card card-border rounded-xl p-8 flex flex-col gap-4 relative"
          >
            {/* Glow element */}
            <div className="glow"></div>

            {/* Card content */}
            <div className="size-14 flex items-center justify-center rounded-full relative z-10">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold relative z-10">
              {title}
            </h3>
            <p className="text-white text relative z-10">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
