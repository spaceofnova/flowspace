import { m, LazyMotion, domAnimation } from "framer-motion";
import { buttonVariants } from "./button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="text-center flex flex-col items-center md:items-start xl:p-16 lg:p-12 md:p-10 p-4 md:text-left w-full gap-8">
        <m.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="xl:text-7xl lg:text-6xl text-5xl font-bold xl:w-4/12 lg:w-5/12 md:w-6/12 w-full leading-tight"
        >
          Flowspace: Student-Made Mindfulness for Better Breaks
        </m.h1>
        <m.p
          className="xl:w-5/12 lg:w-4/12 md:w-6/12 w-full text-neutral-content"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            delay: 0.5,
          }}
        >
          Refresh your mind and beat stress with Flowspace. Student-created
          activities to boost focus and well-being during breaks.
        </m.p>
        <Link
          to="/auth/signup"
          className={buttonVariants({ variant: "default" }) + " w-fit"}
        >
          Get Started!
        </Link>
      </div>
    </LazyMotion>
  );
}
