import React, { useEffect, useState } from "react";
import { ArrowUp } from "phosphor-react"; // Assurez-vous que l'icône est importée correctement

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 560) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-28 sm:bottom-4 z-20 right-2 sm:right-4 p-2 bg-primary-default text-white rounded-full shadow-lg transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} weight="bold" />
    </button>
  );
};

export default ScrollToTopButton;
