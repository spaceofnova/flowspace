"use client";
import Link from "next/link";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";

export default function AppPlaque({ app }: { app: any }) {
  const [bgColor, setBgColor] = useState("rgba(31, 41, 55, 0.85)"); // Default dark gray
  const [textColor, setTextColor] = useState("#ffffff");

  useEffect(() => {
    // Initialize the FastAverageColor
    const fac = new FastAverageColor();

    // Create an image element to analyze
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = app.img;

    img.onload = () => {
      try {
        // Get the dominant color from the image
        const color = fac.getColor(img);

        // Apply dominant color with transparency for better text readability
        setBgColor(
          `rgba(${color.value[0]}, ${color.value[1]}, ${color.value[2]}, 0.85)`,
        );

        // Use the detected text color (black or white based on brightness)
        setTextColor(color.isDark ? "#ffffff" : "#000000");
      } catch (e) {
        console.error("Error getting average color:", e);
      }
    };

    return () => {
      fac.destroy();
    };
  }, [app.img]);

  return (
    <div
      className={
        "outline-foreground/20 hover:outline-foreground relative aspect-video w-full overflow-hidden rounded-lg outline-2 outline-offset-2 hover:outline"
      }
      style={{
        transition: "outline 0.2s ease-in-out",
        maxWidth: "180px",
      }}
    >
      <Link href={"/a/" + app.id} className="block h-full w-full">
        {/* Full image as background */}
        <div className="h-full w-full">
          <NextImage
            src={app.img}
            alt={app.name}
            fill
            quality={75}
            className="object-cover"
          />
        </div>

        {/* Name bar at bottom with auto bgcolor */}
        <div
          className="absolute right-0 bottom-0 left-0 p-2 text-center"
          style={{
            background: bgColor,
            color: textColor,
          }}
        >
          <div className="truncate font-medium">{app.name}</div>
        </div>
      </Link>
    </div>
  );
}
