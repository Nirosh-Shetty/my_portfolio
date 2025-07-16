import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
// import { GithubIcon, LinkedinIcon } from "./icons";
import { Download, Mail } from "lucide-react";
import ContactFormModal from "./contact-form/contact-form-modal";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                <span className="  text-zinc-900 dark:text-zinc-200">
                  {" "}
                  Hi, I&apos;m{" "}
                </span>{" "}
                Nirosh Shetty
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                A Software Engineer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="z-50 mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                <div className="flex items-center justify-start gap-2">
                  {" "}
                  <button
                    aria-label="open send mail modal"
                    type="button"
                    onClick={() => setIsOpenModal(true)}
                    className="lg:w-50 flex h-10 w-40 items-center justify-center gap-3 rounded-lg bg-accent p-2 text-sm text-background transition-colors duration-150 hover:bg-accent/80 sm:h-10 sm:w-20 sm:p-3 lg:w-44"
                  >
                    <Mail className="scale-90" />
                    Contact Me
                  </button>
                  <a
                    aria-label="open download CV modal"
                    href="/nirosh_resume.pdf"
                    download
                    className="lg:w-50 flex h-10 w-40 items-center justify-center gap-3 rounded-lg bg-accent p-2 text-sm text-background transition-colors duration-150 hover:bg-accent/80 sm:h-10 sm:w-20 sm:p-3 lg:w-44"
                  >
                    <Download className="scale-90" /> Download CV
                  </a>
                </div>
                {/* <p className="mt-6 text-base text-muted-foreground">
                  Develop, Test and deploy...
                </p> */}
                <Typewriter
                  text="Develop, Test and Deploy..."
                  className="text-2x mt-6 text-muted-foreground"
                />
                {/* <span>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <a
                      href="mailto:niroshshetty2020@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-primary">Email Me</button>
                    </a>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-secondary">Download Resume</button>
                    </a>
                  </div>
                </span> */}
                {/* <div className="mt-4 flex gap-4">
                  <a
                    href="https://github.com/niroshshetty"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="h-6 w-6 transition hover:text-accent" />
                  </a>
                  <a
                    href="https://linkedin.com/in/niroshshetty"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-6 w-6 transition hover:text-accent" />
                  </a>
                   <a
                    href="https://twitter.com/nirosh_shetty"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="h-6 w-6 transition hover:text-accent" />
                  </a> 
                </div> */}
                {/* <br></br>I am a software developer specializing in building
                high-performance, user-focused web applications. Skilled in{" "}
                <span className="font-semibold text-accent">ReactJS</span>,{" "}
                <span className="font-semibold text-accent">NextJS</span>, and
                an expert in{" "}
                <span className="font-semibold text-accent">JavaScript</span>,{" "}
                <span className="font-semibold text-accent">HTML</span> and{" "}
                <span className="font-semibold text-accent">CSS</span> */}
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
        <ContactFormModal
          showModal={isOpenModal}
          setShowModal={setIsOpenModal}
        />
      </div>
    </motion.section>
  );
}

import { useAnimationControls } from "framer-motion";
// import { useEffect } from "react";

export const sentenceVariants = {
  hidden: {},
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      delayChildren: i * 0.01,
      staggerChildren: 0.06,
    },
  }),
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

export const Typewriter = ({ text, loopDelay = 2000, ...rest }) => {
  const controls = useAnimationControls();

  useEffect(() => {
    let isMounted = true;

    const loopAnimation = async () => {
      while (isMounted) {
        await controls.start("visible");
        await new Promise((res) => setTimeout(res, loopDelay));
        await controls.start("hidden");
        await new Promise((res) => setTimeout(res, 300));
      }
    };

    // Defer execution to next tick
    setTimeout(() => {
      if (isMounted) loopAnimation();
    }, 0);

    return () => {
      isMounted = false;
    };
  }, [controls, text, loopDelay]);

  return (
    <motion.p
      key={text}
      variants={sentenceVariants}
      custom={0}
      initial="hidden"
      animate={controls}
      {...rest}
    >
      {text.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};
