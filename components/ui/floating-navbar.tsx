"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = previous !== undefined ? current - previous : 0;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 left-1/2 -translate-x-1/2 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-[var(--blue-dark)]/80 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 sm:px-8 py-2 items-center justify-center space-x-2 sm:space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-white items-center flex space-x-1 hover:text-neutral-200 text-sm sm:text-base"
            )}
          >
            {navItem.icon && <span>{navItem.icon}</span>}
            <span>{navItem.name}</span>
          </a>
        ))}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf8WYtZ2g07XHd-D8TMUu1fyQjZAOK3kKPVbWfhaDHU5jCSIw/viewform"
          className="border text-xs sm:text-sm font-medium relative border-white text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-white hover:text-[var(--blue-dark)]"
        >
          <span>Register</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
