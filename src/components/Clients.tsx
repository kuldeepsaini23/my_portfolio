/* eslint-disable @next/next/no-img-element */
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { companies, testimonials } from "@/data";

type Props = {
  data: any;
};

const Clients = ({data}: Props) => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      {/* Cards */}
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={data}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
        {/* Companies */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies?.map((company, index) => (
            <div key={index} className="flex md:max-w-60 max-w-32 gap-2">
              <img
                src={company.img}
                alt={company.name}
                className="md:w-10 w-5"
              />
              <img
                src={company.nameImg}
                alt={company.name}
                className="md:w-24 w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
