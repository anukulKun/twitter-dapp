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
		<div className="w-[275.14px] absolute aspect-square right-[132px] bottom-[200px]">
			<div className="h-full w-full relative">
				{/* Outer disk container */}
				<motion.div className="absolute inset-0" animate={rotateAnimation}>
					<Image fill src="/disk-outer.svg" alt="outer-disk" />
				</motion.div>

				{/* Inner disk container */}
				<div className="w-[185.45px] h-[185.45px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					{/* Inner disk with rotation */}
					<motion.div
						className="w-full h-full"
						animate={counterRotateAnimation}
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
