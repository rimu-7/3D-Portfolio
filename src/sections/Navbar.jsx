import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const id = link.slice(1);
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, "#hero")}
          className="logo"
        >
          Rimu | Bhai
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                {link.startsWith("#") ? (
                  <a href={link} onClick={(e) => handleSmoothScroll(e, link)}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                ) : (
                  <Link to={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "#contact")}
          className="px-3 py-2 group bg-green-500 hover:border-2 hover:bg-neutral-900 border-2  text-black hover:border-green-500 rounded-lg duration-500 transition-colors text--900 hover:text-green-500"
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
