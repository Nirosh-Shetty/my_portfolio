import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";
import DuotoneImage from "./duotone-image";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      {/* old */}
      {/* <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2"> */}
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-2/5">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <DuotoneImage
              src={heroProfileImg}
              //old
              //  width={100}
              // height={100}
              // className="h-auto w-full px-0 xl:px-16"
              width={400}
              height={400}
              className="mx-auto h-auto w-[90%] max-w-sm px-0 xl:px-16"
              alt="hero image"
              lightColor="#E0FFFF"
              darkColor="#004D4D"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Nirosh Shetty
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I’m a software engineer who enjoys building clean and useful web
              apps. I like turning ideas into real products with simple, solid
              code.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Check out my{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              to see what I’ve been working on with React, Next.js, TypeScript,
              and more.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src="https://flagcdn.com/in.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Bengaluru, India
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
