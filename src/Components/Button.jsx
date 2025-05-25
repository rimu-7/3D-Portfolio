import { useState, useRef, useEffect } from "react";

const Button = ({ text, className, id, dropdown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (e) => {
    if (!dropdown) {
      e.preventDefault();
      const target = document.getElementById("counter");
      if (target && id) {
        const offset = window.innerHeight * 0.15;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <a
        onClick={handleClick}
        className={`${className ?? ""} cta-wrapper cursor-pointer`}
      >
        <div className="cta-button group">
          <div className="bg-circle" />
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
          </div>
        </div>
      </a>

      {/* Dropdown content */}
      {dropdown && isOpen && (
        <div className="">
          <div className="py-1">
            <a
              href="./Mutasim fuad rimu.pdf"
              download="MutasimFuadRimu_CV_English.pdf"
              className="flex items-center text-sm text-gray-300 rounded hover:text-blue-600 transition-colors duration-200"
            >
              <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">English Version</p>
                <div className="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
              </div>
            </a>
            <a
              href="./Mutasim fuad rimu-1.pdf"
              download="复原_MutasimFuadRimu_CV_中文.pdf"
              className="flex items-center transition-colors duration-200"
            >
              <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text px-1">中文版本 Chinese</p>
                <div className="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
