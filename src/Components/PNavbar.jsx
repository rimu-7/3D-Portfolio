import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const PLinks = [
    {
      name: "Work",
      link: "/#work", // Updated to include hash
    },
    {
      name: "Experience",
      link: "/",
    },
    {
      name: "Skills",
      link: "/#skills",
    },
    {
      name: "Projects",
      link: "",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // Function to handle navigation to hash links
  const handleNavLinkClick = (e, link) => {
    if (link.includes('#')) {
      e.preventDefault();
      const [path, hash] = link.split('#');
      if (path === window.location.pathname) {
        // If we're already on the same page, just scroll to the section
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to the page first, then scroll to the section
        navigate(path);
        setTimeout(() => {
          const section = document.getElementById(hash);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link to={"/"} className="logo">
          Rimu | Bhai
        </Link>
        <nav className="desktop">
          <ul>
            {PLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <Link 
                  to={link}
                  onClick={(e) => handleNavLinkClick(e, link)}
                >
                  <span>{name}</span>
                  <span className="underline" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href="/contact" className="contact-btn group">
          <div className="inner">
            <span>Conatct me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default PNavbar;