"use client";
import { useHover } from "@uidotdev/usehooks";
import { m, LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import FavoriteStar from "./FavoriteStar";
export default function AppPlaque({ app }: { app: any }) {
  const [ref, hovering] = useHover();

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={ref}
        className="md:h-unset relative flex h-32 w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-md bg-gray-800 md:aspect-video md:w-52"
      >
        <m.div
          className="z-[1] h-16 w-16 overflow-hidden rounded-xl bg-primary"
          animate={{
            scale: hovering ? 1.2 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={"/a/" + app.id}>
            <Image
              src={app.img}
              alt={app.name}
              width={128}
              height={128}
              quality={60}
              className="h-full w-full object-cover"
            />
          </Link>
        </m.div>
        <div className="absolute right-2 top-2 z-10 cursor-pointer">
          {/* <FavoriteStar id={app.id} /> */}
        </div>
        <div className="z-[1] flex flex-col">
          <div className="text-md font-medium text-white">{app.name}</div>
        </div>
        <m.div
          animate={{ scale: hovering ? 1.6 : 1.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="absolute z-0 h-full w-full"
        >
          <Image
            src={app.img}
            alt={app.name}
            width={1}
            height={1}
            quality={1}
            className="absolute z-0 h-full w-full blur-md brightness-50"
          />
        </m.div>
      </div>
    </LazyMotion>
  );
}
