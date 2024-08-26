import MagicButton from "@/components/MagicButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {};

const FeatureCard = (props: Props) => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 mb-10 md:mb-32 group cursor-pointer border border-zinc-400/30 rounded-xl p-8">
      <Link
        href="/"
        className="relative flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0"
      >
        <div className="group-hover:scale-105 transform transition duration-200">
          <Image
            src="/p1.svg"
            className="transition duration-300 blur-0 object-cover aspect-video rounded-2xl h-full"
            width={800}
            height={400}
            alt="blog"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-xl md:text-4xl text-zinc-700 dark:text-zinc-200">
              10 Portfolio Website Examples That Stand Out In 2024
            </h2>
            <h4 className="font-normal text-base text-zinc-700 max-w-lg mt-4 dark:text-zinc-200">
              I personally have always been a fan of great portfolio websites.
              I&apos;m always on the look for new ideas and inspirations. Today,
              I&apos;ve curated a list of best porfolio websites from all over
              the internet for you to get inspired from.
            </h4>
          </div>
          <MagicButton
            title="Read More"
            icon={<FaArrowRight />}
            position="right"
            className="hover:scale-95 transform transition duration-200"
          />
        </div>
      </Link>
    </div>
  );
};

export default FeatureCard;
