import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-center text-gray-600 bg-white/90 backdrop-blur shadow mt-4">
      &copy; {new Date().getFullYear()} Zeebra. All rights reserved.
    </footer>
  );
};

export default Footer;
