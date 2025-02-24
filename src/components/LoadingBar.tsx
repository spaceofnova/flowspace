"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingBar() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "0.5rem" }}
        exit={{ height: 0 }}
        className="absolute top-0 left-0 z-100 h-1 w-full overflow-hidden"
      >
        <motion.div
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          animate={{ left: ["-100%", "108%"] }}
          exit={{ left: "100%" }}
          className="bg-primary absolute h-full w-96"
        />
      </motion.div>
    </AnimatePresence>
  );
}
