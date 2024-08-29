"use client";
import { LucideStars } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { onBroadcast } from "@/utils/functions";

export default function FavoriteAppList({ small }: { small?: boolean }) {
  const [Favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (window && localStorage) {
      const favoriteApps = JSON.parse(
        localStorage.getItem("favoriteApps") || "[]"
      );
      setFavorites(favoriteApps);
    }
  }, []);

  useEffect(() => {
    onBroadcast("favoriteApps", (data: string) => {
      if (data === "update") {
        setTimeout(() => {
          setFavorites(
            JSON.parse(localStorage.getItem("favoriteApps") || "[]")
          );
        });
      }
    });
  }, []);
  return small ? (
    <div className="flex flex-col gap-2 h-[calc(100%-15rem)]">
      
      {Favorites && (
        <div className="flex flex-col gap-2">
          {Favorites.map((app, index) => (
            <Button
              key={index}
              variant={"outline"}
              size={"icon"}
              className="text-md"
            >
              {index + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  ) : (
    <div className="flex flex-col gap-2 h-[calc(100%-9.5rem)]">
   
      {Favorites && Favorites.length > 0 && (
        <div className="flex flex-col gap-2">
          <AnimatePresence initial={false}>
            {Favorites.map((app, index) => (
              <motion.button
                key={index}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className={cn(
                  "flex gap-2 ",
                  buttonVariants({ variant: "outline" })
                )}
                style={{
                  justifyContent: "flex-start",
                }}
              >
                <LucideStars className="w-4 h-4" />
                {app}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
