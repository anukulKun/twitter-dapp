"use client";
import Image from "next/image";
import React from "react";
import { Jaro } from "next/font/google";
import { motion } from "motion/react";

const jaro = Jaro({ subsets: ["latin"] });

const CyberLoader = () => {
  // Configure the animation timing
  const numSteps = 48;
  const pauseDuration = 0.05; // Duration of pause at each step in seconds
  const stepDuration = 0.2; // Duration of movement between steps in seconds
  
  // Calculate total duration for one full rotation
  const totalDuration = (pauseDuration + stepDuration) * numSteps;
  
  // Create arrays for rotation values and timing
  const rotationSteps = Array.from({ length: numSteps }, (_, i) => i * (360 / numSteps));
  
  // Create times array with pauses
  const times = [];
  const keyframes = [];
  
  for (let i = 0; i < numSteps; i++) {
    const stepStart = i / numSteps;
    const moveEnd = stepStart + (stepDuration / totalDuration);
    const pauseEnd = moveEnd + (pauseDuration / totalDuration);
    
    // Add keyframes for the step
    times.push(stepStart, moveEnd);
    keyframes.push(rotationSteps[i], rotationSteps[i]);
    
    // Add pause keyframe if not the last step
    if (i < numSteps - 1) {
      times.push(pauseEnd);
      keyframes.push(rotationSteps[i]);
    }
  }

  const transition = {
    duration: totalDuration,
    ease: "linear",
    repeat: Infinity,
    times,
  };

  const stepAnimation = {
    rotate: keyframes,
    transition,
  };

  const counterStepAnimation = {
    rotate: keyframes.map(step => -step),
    transition,
  };

  return (
    <div className="w-[275.14px] absolute aspect-square right-[132px] bottom-[200px]">
      <div className="h-full w-full relative">
        {/* Outer disk container */}
        <motion.div className="absolute inset-0" animate={stepAnimation}>
          <Image fill src="/disk-outer.svg" alt="outer-disk" />
        </motion.div>
        {/* Inner disk container */}
        <div className="w-[185.45px] h-[185.45px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Inner disk with rotation */}
          <motion.div
            className="w-full h-full"
            animate={counterStepAnimation}
          >
            <Image
              src="/disk-inner.svg"
              className="w-full h-full"
              width={185.45}
              height={185.45}
              alt="disk-inner"
            />
          </motion.div>
        </div>
        {/* Number display */}
        <span
          className={`${jaro.className} text-[46px] text-[#40F4FF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10`}
        >
          456
        </span>
      </div>
    </div>
  );
};

export default CyberLoader;
