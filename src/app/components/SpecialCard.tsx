"use client";

import { SkiperCard } from "@/components/ui/skiper-card";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import React from "react";

interface ImageType {
  src: StaticImageData;
  alt?: string;
}

interface SpecialCardProps {
  images: ImageType[];
}

const SpecialCard: React.FC<SpecialCardProps> = ({ images }) => {
  // Predefined reusable class sets
  const step1Img1Class = cn(
    "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 ease-in-out dark:border-stone-700/50",
    "absolute left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px]",
    "md:left-[35px] md:top-[29%] md:group-hover:translate-y-2"
  );

  const step1Img2Class = cn(
    "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 ease-in-out dark:border-stone-700/50",
    "absolute left-[45%] top-[60%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px]",
    "md:group-hover:translate-y-2"
  );

  return (
    <div className="border rounded-[24px] m-2 bg-gradient-to-b from-neutral-900/90 to-stone-800 dark:from-neutral-950/90 dark:to-neutral-800/90 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <SkiperCard
        title="Components that pop"
        description="Make your app feel alive with subtle animations and smooth transitions."
        step1img1Class={step1Img1Class}
        step1img2Class={step1Img2Class}
        step2img1Class="rounded-[24px] md:group-hover:translate-y-1"
        step2img2Class="rounded-[24px] md:group-hover:translate-y-1"
        step3imgClass="rounded-[24px] shadow-md md:group-hover:scale-105 transition-transform duration-500"
        image={{
          step1dark1: images[0]?.src,
          step1dark2: images[1]?.src,
          step1light1: images[0]?.src,
          step1light2: images[1]?.src,
          step2dark1: images[2]?.src,
          step2dark2: images[3]?.src,
          step2light1: images[2]?.src,
          step2light2: images[3]?.src,
          step3dark: images[4]?.src,
          step3light: images[4]?.src,
          step4light: images[5]?.src,
          alt: images[0]?.alt || "Skiper Card",
        }}
      />
    </div>
  );
};

export default SpecialCard;