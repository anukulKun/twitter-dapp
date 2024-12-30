"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const EstimatedTime = () => {
  const [rotation, setRotation] = useState(0);
  // const [timeLeft, setTimeLeft] = useState("");

  // useEffect(() => {
  //   const rotationInterval = setInterval(() => {
  //     setRotation((prevRotation) => (prevRotation + 6) % 360);
  //   }, 1000);

  //   const countdownInterval = setInterval(() => {
  //     const now = new Date();
  //     const targetDate = new Date("2024-12-31T16:00:00");
  //     const difference = targetDate.getTime() - now.getTime();

  //     if (difference > 0) {
  //       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor(
  //         (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       );
  //       const minutes = Math.floor(
  //         (difference % (1000 * 60 * 60)) / (1000 * 60)
  //       );
  //       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //       setTimeLeft(
  //         `${days.toString().padStart(2, "0")}:${hours
  //           .toString()
  //           .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
  //           .toString()
  //           .padStart(2, "0")}`
  //       );
  //     } else {
  //       setTimeLeft("00:00:00:00");
  //       clearInterval(countdownInterval);
  //     }
  //   }, 1000);

  //   return () => {
  //     clearInterval(rotationInterval);
  //     clearInterval(countdownInterval);
  //   };
  // }, []);
  return (
    <div className="absolute h-[204.89px] w-[416.31px] bottom-[-26px] sm:bottom-0 left-[-3.5%] sm:left-[6%] scale-[40%] sm:scale-50 md:scale-75 lg:scale-100 ">
      <div className="h-full w-full relative  ">
        <svg
          width="461"
          height="215"
          viewBox="0 0 461 215"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M350.968 49.1996H128.122V6.98993H350.968V49.1996Z"
            fill="#F8F8F8"
            fillOpacity="0.6"
          />
          <text
            x="135"
            y="35"
            fill="#000000"
            fillOpacity="1"
            fontSize="18"
            fontWeight=""
            fontFamily="monospace"
            textAnchor="start"
          >
            Estimated Time
          </text>
          <path
            d="M391.867 59.4239L371.811 72.5981H170.528V40.8098H391.867V59.4239Z"
            fill="#F8F8F8"
            fillOpacity="0.6"
          />
          <path
            d="M445.415 49.397H391.867V47.4963H444.629L454.985 37.1405L442.335 20.7547H350.968V18.854H443.252L457.541 37.2716L445.415 49.397Z"
            fill="#F8F8F8"
            fillOpacity="0.6"
          />
          <path
            d="M409.694 19.8367L399.273 9.54645H350.968V7.64569H400.059L411.005 18.4603L409.694 19.8367Z"
            fill="#F8F8F8"
            fillOpacity="0.6"
          />
          <path
            d="M162.663 58.5068H119.536V8.62857H121.437V56.6061H162.663V58.5068Z"
            fill="#F8F8F8"
            fillOpacity="0.6"
          />
          <path
            d="M39.8996 172.88L38.5887 171.569L103.673 106.484V73.0575L119.862 56.8684L121.173 58.1792L105.574 73.844V107.271L105.312 107.533L39.8996 172.88Z"
            fill="#F8F8F8"
            fillOpacity="0.6"
          />
          <path
            d="M31.4458 208.01H3.45898V180.023H5.35967V206.109H31.4458V208.01Z"
            fill="#F8F8F8"
            fillOpacity="0.6"
          />
          <path
            d="M40.1631 185.005H38.2622V173.142H26.4645V171.307H40.1631V185.005Z"
            fill="#F8F8F8"
            fillOpacity="0.6"
          />
          <path
            opacity="0.5"
            d="M34.0666 200.801H10.4711V177.206H34.0666V200.801Z"
            fill="#F8F8F8"
            fillOpacity="0.6"
          />
          <path
            d="M26.3334 193.066H18.2062V185.004H26.3334V193.066Z"
            fill="#F8F8F8"
            fillOpacity="0.6"
          />
          <path
            d="M372.074 82.1685H161.746V66.4381H163.647V80.2677H372.074V82.1685Z"
            fill="#F8F8F8"
            fillOpacity="0.6"
          />

          {/* Animated element */}
          <circle
            cx="230"
            cy="107"
            r="5"
            fill="#F8F8F8"
            fillOpacity="0.6"
            transform={`rotate(${rotation} 230 107)`}
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 230 107"
              to="360 230 107"
              dur="60s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Countdown timer */}
        <div className=" absolute top-[40px] left-[170px] w-[220px] h-[30px] flex items-center justify-center">
          <div className="text-black text-lg font-mono">{"00:00:00:00"}</div>
        </div>

        {/* Decorators Image */}
        <Image
          src="/estimated-time-decorators.svg"
          alt="estimated-time-decorators"
          width={461}
          height={215}
          className="absolute top-24 left-32 h-12 w-auto z-0 sm:block hidden"
        />
      </div>
    </div>
  );
};

export default EstimatedTime;
