import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    let currentPosition = window.pageYOffset;
    const scrollStep = -currentPosition / 40; // Adjust divisor to control the speed

    const slowScroll = () => {
      currentPosition += scrollStep;
      window.scrollTo(0, currentPosition);

      if (currentPosition > 0) {
        requestAnimationFrame(slowScroll);
      }
    };

    requestAnimationFrame(slowScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {visible && (
        <div
          className="fixed bottom-5 right-5 z-[999] cursor-pointer hover:scale-110 transform transition-all duration-300 ease-in-out text-white text-3xl bg-primary w-10 h-10 flex items-center justify-center rounded-full opacity-90 hover:opacity-100 border-white border"
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
