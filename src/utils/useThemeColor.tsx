import { useState, useEffect } from "react";

const useThemeColor = (initialColor: string = "#100a09") => {
  const [themeColor, setThemeColor] = useState<string>(initialColor);

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (metaThemeColor) {
      setThemeColor(metaThemeColor.getAttribute("content") || initialColor);
    } else {
      const newMetaThemeColor = document.createElement("meta");
      newMetaThemeColor.name = "theme-color";
      newMetaThemeColor.content = initialColor;
      document.head.appendChild(newMetaThemeColor);
    }
  }, [initialColor]);

  const updateThemeColor = (newColor: string) => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", newColor);
    }

    setThemeColor(newColor);
  };

  return [themeColor, updateThemeColor] as const;
};

export default useThemeColor;
