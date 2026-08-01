"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import firstImage from "@/public/assets/CAROUSEL/1.png";
import secondImage from "@/public/assets/CAROUSEL/2.png";
import thirdImage from "@/public/assets/CAROUSEL/3.png";
import fourthImage from "@/public/assets/CAROUSEL/4.png";
import fifthImage from "@/public/assets/CAROUSEL/5.png";

const slides = [firstImage, secondImage, thirdImage, fourthImage, fifthImage];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === slides.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="indicators-carousel"
      className="relative w-11/12 border-10 border-amber-50 rounded-4xl shadow-lg shadow-gray-500/50 dark:shadow-gray-500/50"
      data-carousel="static"
    >
      <div className="relative overflow-hidden rounded-base h-full w-full rounded-4xl">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out rounded-4xl"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative rounded-4xl">
              <Image
                src={slide}
                className="block w-full h-full object-cover rounded-4xl opacity-70"
                alt={`Slide ${index + 1}`}
                width={1179}
                height={896}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-base transition-colors duration-200 ${
              index === activeIndex
                ? "bg-white/80 dark:bg-gray-800/80"
                : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800/60"
            }`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 inset-s-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800">
          <svg
            className="w-5 h-5 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 inset-e-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800">
          <svg
            className="w-5 h-5 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
