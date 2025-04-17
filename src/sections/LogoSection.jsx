import React from 'react';
import { logoIconsList } from '../constants';

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex items-center justify-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="relative my-10 md:my-20">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-r " />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 z-10" />
      <div className="w-[100dvw] overflow-hidden relative h-52">
        <div className="absolute flex items-center gap-5 md:gap-12 w-[200%] h-full marquee-box">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
