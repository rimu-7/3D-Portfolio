import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className=" text-white py-12 text-center">
      <p>&#169; {currentYear} Rimu Bhai, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
