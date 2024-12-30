"use client";

import Image from "next/image";
import React from "react";
import { Jaro } from "next/font/google";
import { motion } from "motion/react";

const jaro = Jaro({ subsets: ["latin"] });

const CyberLoader = () => {
	const rotateAnimation = {
		rotate: 360,
		transition: {
			duration: 10,
			repeat: Infinity,
			ease: "linear",
		},
	};

	const counterRotateAnimation = {
		rotate: -360,
		transition: {
			duration: 8,
			repeat: Infinity,
			ease: "linear",
		},
	};

	return (
		<div
			className="absolute sm:right-[10%] right-[56%] sm:bottom-[20%] bottom-[55%] flex sm:flex-row flex-col justify-center items-center scale-50 sm:scale-60 md:scale-75 lg:scale-100"
		>
			<div className="relative aspect-square w-[150px] sm:w-[200px] md:w-[275.14px]">
				{/* Outer disk container */}
				<motion.div className="absolute inset-0" animate={rotateAnimation}>
					<Image fill src="/disk-outer.svg" alt="outer-disk" />
				</motion.div>

				{/* Inner disk container */}
				<div className="absolute w-[70px] sm:w-[100px] md:w-[135.91px] h-[70px] sm:h-[100px] md:h-[135.91px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					{/* Inner disk with rotation */}
					<motion.div
						className="w-full h-full"
						animate={counterRotateAnimation}
					>
						<Image
							src="/disk-inner.svg"
							className="w-full h-full"
							width={135.91}
							height={135.91}
							alt="disk-inner"
						/>
					</motion.div>
				</div>

				{/* Number display */}
				<span
					className={`${jaro.className} text-[20px] sm:text-[30px] md:text-[38px] text-[#40F4FF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 `}
				>
					456
				</span>
			</div>
			<h1
				className={`${jaro.className} text-sm sm:text-lg md:text-xl mt-2 text-center hidden sm:block`}
			>
				players
			</h1>
		</div>
	);
};

export default CyberLoader;
