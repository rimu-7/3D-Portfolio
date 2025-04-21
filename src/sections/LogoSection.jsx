import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaPython, FaGit, 
  FaDatabase, FaCloud, FaDocker, FaGitAlt, FaFlask 
} from 'react-icons/fa'; // Frontend, Backend, and DevOps icons

import { SiMongodb, SiCloudinary, SiFastapi } from 'react-icons/si'; // Additional icons
import { DiMysql } from "react-icons/di";

// Define the icons with their unique ids
const logoIconsList = [
  {
    id: 1, 
    name: 'html', 
    icon: <FaHtml5 size={40} color="#E34F26" />,  // HTML Icon
  },
  {
    id: 2, 
    name: 'css', 
    icon: <FaCss3Alt size={40} color="#1572B6" />,  // CSS Icon
  },
  {
    id: 3, 
    name: 'javascript', 
    icon: <FaJs size={40} color="#F7DF1E" />,  // JavaScript Icon
  },
  {
    id: 4, 
    name: 'nodejs', 
    icon: <FaNodeJs size={40} color="#68A063" />,  // Node.js Icon
  },
  {
    id: 5, 
    name: 'react', 
    icon: <FaReact size={40} color="#61DAFB" />,  // React Icon
  },
  {
    id: 6, 
    name: 'mongodb', 
    icon: <SiMongodb size={40} color="#47A248" />,  // MongoDB Icon
  },
  {
    id: 7, 
    name: 'cloudinary', 
    icon: <SiCloudinary size={40} color="#F4F4F4" />,  // Cloudinary Icon
  },
  {
    id: 8, 
    name: 'python', 
    icon: <FaPython size={40} color="#306998" />,  // Python Icon
  },
  {
    id: 9, 
    name: 'git', 
    icon: <FaGit size={40} color="#F05032" />,  // Git Icon
  },
  {
    id: 10, 
    name: 'flask', 
    icon: <SiFastapi size={40} color="#2496ED" />,  // Flask Icon
  },
  {
    id: 11, 
    name: 'docker', 
    icon: <FaDocker size={40} color="#2496ED" />,  // Docker Icon
  },
  {
    id: 12, 
    name: 'database', 
    icon: <FaDatabase size={40} color="#f7a81d" />,  // Database Icon
  },
  {
    id: 1, 
    name: 'html', 
    icon: <FaHtml5 size={40} color="#E34F26" />,  // HTML Icon
  },
  {
    id: 2, 
    name: 'css', 
    icon: <FaCss3Alt size={40} color="#1572B6" />,  // CSS Icon
  },
  {
    id: 3, 
    name: 'javascript', 
    icon: <FaJs size={40} color="#F7DF1E" />,  // JavaScript Icon
  },
  {
    id: 4, 
    name: 'nodejs', 
    icon: <FaNodeJs size={40} color="#68A063" />,  // Node.js Icon
  },
  {
    id: 5, 
    name: 'react', 
    icon: <FaReact size={40} color="#61DAFB" />,  // React Icon
  },
  {
    id: 6, 
    name: 'mongodb', 
    icon: <SiMongodb size={40} color="#47A248" />,  // MongoDB Icon
  },
  {
    id: 7, 
    name: 'cloudinary', 
    icon: <SiCloudinary size={40} color="#F4F4F4" />,  // Cloudinary Icon
  },
  {
    id: 8, 
    name: 'python', 
    icon: <FaPython size={40} color="#306998" />,  // Python Icon
  },
  {
    id: 9, 
    name: 'git', 
    icon: <FaGit size={40} color="#F05032" />,  // Git Icon
  },
  {
    id: 10, 
    name: 'flask', 
    icon: <SiFastapi size={40} color="#2496ED" />,  // Flask Icon
  },
  {
    id: 11, 
    name: 'docker', 
    icon: <FaDocker size={40} color="#2496ED" />,  // Docker Icon
  },
  {
    id: 12, 
    name: 'database', 
    icon: <FaDatabase size={40} color="#f7a81d" />,  // Database Icon
  },
  {
    id: 13, 
    name: 'html', 
    icon: <FaHtml5 size={40} color="#E34F26" />,  // HTML Icon
  },
  {
    id: 14, 
    name: 'css', 
    icon: <FaCss3Alt size={40} color="#1572B6" />,  // CSS Icon
  },
  {
    id: 15, 
    name: 'javascript', 
    icon: <FaJs size={40} color="#F7DF1E" />,  // JavaScript Icon
  },
  {
    id: 16, 
    name: 'nodejs', 
    icon: <FaNodeJs size={40} color="#68A063" />,  // Node.js Icon
  },
  {
    id: 17, 
    name: 'react', 
    icon: <FaReact size={40} color="#61DAFB" />,  // React Icon
  },
  {
    id: 18, 
    name: 'mongodb', 
    icon: <SiMongodb size={40} color="#47A248" />,  // MongoDB Icon
  },
  {
    id: 19, 
    name: 'cloudinary', 
    icon: <SiCloudinary size={40} color="#F4F4F4" />,  // Cloudinary Icon
  },
  {
    id: 20, 
    name: 'python', 
    icon: <FaPython size={40} color="#306998" />,  // Python Icon
  },
  {
    id: 21, 
    name: 'git', 
    icon: <FaGit size={40} color="#F05032" />,  // Git Icon
  },
  {
    id: 22, 
    name: 'flask', 
    icon: <FaFlask size={40} color="#2496ED" />,  // Flask Icon
  },
  {
    id: 23, 
    name: 'docker', 
    icon: <FaDocker size={40} color="#2496ED" />,  // Docker Icon
  },
  {
    id: 24, 
    name: 'database', 
    icon: <FaDatabase size={40} color="#f7a81d" />,  // Database Icon
  },
  {
    id: 25, 
    name: 'database', 
    icon: <DiMysql size={40} color="#306998" />,  // Database Icon
  },
];

// Repeat the logoIconsList 3 times to create the infinite loop
const repeatedLogoIconsList = [...logoIconsList, ...logoIconsList, ...logoIconsList];

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex items-center justify-center marquee-item">
      {/* Render the icon directly */}
      <div className="icon-container">{icon}</div>
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="relative my-10 md:my-20">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-r" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 z-10" />
      <div className="w-[100dvw] overflow-hidden relative h-52">
        <div className="absolute flex items-center gap-5 md:gap-12 w-[300%] h-full marquee-box">
          {repeatedLogoIconsList.map((icon) => (
            <LogoIcon key={icon.id} icon={icon.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
