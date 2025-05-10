"use client";

import { IconHeart, IconX } from '@tabler/icons-react'
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";
import { toast } from 'sonner';

type Film = {
  quote: string;
  name: string;
  tags: string[];
  image: string;
};
export const AnimatedFilmChoice = ({ films }: { films: Film[] }) => {
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState([0]);

  const handleLike = () => {
    setActive((prev) => (prev + 1) % films.length);
    setSeen((prev) => {
      const next = (prev[prev.length - 1] + 1) % films.length;
      return [...prev, next];
    });
    toast.success("Film ajouté à votre liste de favoris !", {
      richColors: true,
    });
  };

  const handleDislike = () => {
    setActive((prev) => (prev + 1) % films.length);
    setSeen((prev) => {
      const next = (prev[prev.length - 1] + 1) % films.length;
      return [...prev, next];
    });

    toast.error("Film retiré de votre liste de favoris !", {
      richColors: true,
    });
  };

  const isActive = (index: number) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
      <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
        <div className="gap-20 space-y-14">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {films.map((film, index) => (
                    <motion.div
                        key={film.name}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                          z: -100,
                          rotate: randomRotateY(),
                        }}
                        animate={{
                          opacity: isActive(index) ? 1 : 0.7,
                          scale: isActive(index) ? 1 : 0.95,
                          z: isActive(index) ? 0 : -100,
                          rotate: isActive(index) ? 0 : randomRotateY(),
                          zIndex: isActive(index)
                              ? 40
                              : films.length + 2 - index,
                          y: isActive(index) ? [0, -80, 0] : 0,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                          z: 100,
                          rotate: randomRotateY(),
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 origin-bottom flex items-center justify-center"
                    >
                      <img
                          src={film.image}
                          alt={film.name}
                          width={250}
                          draggable={false}
                          className="rounded-3xl object-cover object-center"
                      />
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 py-4">
            <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
            >
              <h3 className="text-2xl font-bold text-white text-center">
                {films[active].name}
              </h3>
              <div className={"flex justify-center"}>
                {films[active].tags.map((tag, index) => (
                    <span
                        key={index}
                        className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-neutral-700 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                ))}
              </div>
              <motion.p className="mt-8 text-lg text-neutral-300 text-center">
                {films[active].quote.split(" ").map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{
                          filter: "blur(10px)",
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          filter: "blur(0px)",
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                          delay: 0.02 * index,
                        }}
                        className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex w-full justify-center gap-4 pt-12 md:pt-0">
              <button
                  onClick={handleDislike}
                  className="group/button flex items-center justify-center rounded-full p-4 bg-red-400"
              >
                <IconX className="h-14 w-14 text-white transition-transform duration-300 group-hover/button:rotate-12"/>
              </button>
              <button
                  onClick={handleLike}
                  className="group/button flex items-center justify-center rounded-full p-4 bg-green-400"
              >
                <IconHeart
                    className="h-14 w-14 text-white transition-transform duration-300 group-hover/button:-rotate-24"/>
              </button>
            </div>
            <div className={"flex justify-center"}>
              <button
                  onClick={handleLike}
                  className="group/button flex items-center w-1/2 justify-center rounded-full p-4 bg-neutral-600"
              >
                Voir le film
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
