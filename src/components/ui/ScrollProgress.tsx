"use client";

import { useState, useEffect } from "react";

function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      let progress = (scrollTop / maxScroll) * 100;
      if (Number.isNaN(progress)) progress = 0;

      console.log(
        window.scrollY,
        document.documentElement.scrollHeight,
        window.innerHeight,
      );
      setScrollPercentage(progress);
      console.log(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-12 left-0 z-50 h-1 bg-blue-500"
      style={{ width: `${scrollPercentage}%` }}
    />
  );
}

ScrollProgressBar.displayName = "ScrollProgressBar";

export default ScrollProgressBar;
