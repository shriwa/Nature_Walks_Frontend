import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {visible && (
        <div
          className="fixed bottom-5 right-5 z-[999] cursor-pointer hover:scale-105 text-white text-3xl bg-primary w-10 h-10 flex items-center justify-center rounded-full "
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
