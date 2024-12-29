"use client";

import type React from "react";
import { motion } from "motion/react";
import ScrambleText from "./ui/scramble-text";

const AnimatedLoader: React.FC = () => {
  const textStaggerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    },
  };

	return (
		<div className="absolute w-[386px] h-[203px] top-4 left-4">
			<div className="relative h-full w-full">
				<motion.span
					className="top-[48px] text-neutral-500 absolute left-[145px] text-[7px]"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 1 }}
				>
          <ScrambleText>SENDdRQtYMWaQrBroBrJ2Q53fgVuq95CV9UPGEvpCxa</ScrambleText>
				</motion.span>
				<motion.span
					className="absolute top-[80px] text-[28px] left-[120px]"
					initial="hidden"
					animate="visible"
					transition={{ delay: 2.5, duration: 1, staggerChildren: 0.1 }}
          aria-hidden
				>
          <span className="sr-only">SENDING IT</span>
          {"SENDING IT".split("").map((char, index) => (
            <motion.span variants={textStaggerAnimation} key={index}>
              {char}
            </motion.span>
          ))}
        </motion.span>
			</div>
			<motion.svg
				width="386"
				height="203"
				viewBox="0 0 386 203"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				initial="hidden"
				animate="visible"
				className="absolute top-0"
			>
				<title>loader</title>
				{/* Main rectangle */}
				<motion.path
					d="M366.732 183.875H99.9937V65.969H366.732V183.875Z"
					fill="none"
					fillOpacity="0.8"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 1, delay: 0.5, ease: "linear" }}
				/>
				<motion.path
					d="M101.785 182.078H365.019V67.688H101.785V182.078Z"
					fill="transparent"
					fillOpacity="0.8"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					stroke="#FFFFFF"
					strokeWidth="2"
					transition={{ duration: 1, delay: 0.5, ease: "linear" }}
				/>

				{/* Inner rectangles */}
				<motion.g
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.2,
								delayChildren: 1.5,
							},
						},
					}}
				>
					<motion.rect
						x="125.121"
						y="133.62"
						width="220.35"
						height="23.195"
						fill="white"
						fillOpacity="0.7"
						initial={{ width: 0 }}
						animate={{ width: 220.35 }}
						transition={{ duration: 1, ease: "linear" }}
					/>
					<motion.rect
						x="123.188"
						y="131.687"
						width="220.349"
						height="27.061"
						fill="transparent"
						fillOpacity="0.7"
						stroke="#FFFFFF"
						strokeWidth="2"
						initial={{ width: 0 }}
						animate={{ width: 220.349 }}
						transition={{ duration: 1, ease: "linear" }}
					/>
				</motion.g>

				{/* Corner elements */}
				<motion.g
					opacity="0.4"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 0.4,
							transition: {
								staggerChildren: 0.1,
								delayChildren: 2,
							},
						},
					}}
				>
					{[
						"M378.785 91.6969H377.076V55.5733H340.952V53.7865H378.785V91.6969Z",
						"M89.5628 91.6969H87.8538V53.7865H125.686V55.5733H89.5628V91.6969Z",
						"M378.785 195.018H340.952V193.231H377.076V157.185H378.785V195.018Z",
						"M125.686 195.018H87.8538V157.185H89.5628V193.231H125.686V195.018Z",
					].map((d, i) => (
						<motion.path
							key={`corner-${i}`}
							d={d}
							fill="#F8F8F8"
							fillOpacity="0.8"
							variants={{
								hidden: { pathLength: 0 },
								visible: { pathLength: 1, opacity: [0, 0, 0, 0.2, 1, 0.5, 0.2, 0.7, 0.3, 0.6, 1, 1, 1], },
							}}
							transition={{ duration: 1, ease: "linear" }}
						/>
					))}
				</motion.g>

				{/* Small square in top-left */}
				<motion.g
					opacity="0.4"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 0.4,
							transition: { delay: 2.5, duration: 1, ease: "linear" },
						},
					}}
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M37.6668 38.015H15.4489V15.797H37.6668V38.015ZM17.2356 36.2282H35.8801V17.5061H17.2356V36.2282Z"
						fill="#F8F8F8"
						fillOpacity="0.8"
					/>
				</motion.g>

				<motion.path
					d="M30.4096 31.1771H22.6781V21.5127H30.4096V31.1771Z"
					fill="#F8F8F8"
					fillOpacity="0.8"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 3, duration: 1, ease: "linear" }}
				/>

				{/* Small corner elements */}
				<motion.g
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.1,
								delayChildren: 3.3,
							},
						},
					}}
				>
					{[
						"M45.8728 17.6469H44.2621V9.53437H36.2084V7.98242H45.8728V17.6469Z",
						"M9.1481 17.6469H7.21521V7.98242H18.8125V9.53437H9.1481V17.6469Z",
						"M45.8728 46.6402H36.2084V44.7778H44.2621V35.0428H45.8728V46.6402Z",
						"M18.8125 46.6402H7.21521V35.0428H9.1481V44.7778H18.8125V46.6402Z",
					].map((d, i) => (
						<motion.path
							key={`small-corner-${i}`}
							d={d}
							fill="#F8F8F8"
							fillOpacity="0.8"
							variants={{
								hidden: { pathLength: 0 },
								visible: { pathLength: 1 },
							}}
							transition={{ duration: 1, ease: "linear" }}
						/>
					))}
				</motion.g>

				{/* Connecting line */}
				<motion.path
					d="M88.3963 65.969H64.0454L43.9399 45.9766L45.2216 44.7073L64.8465 64.1443H88.3963V65.969Z"
					fill="#F8F8F8"
					fillOpacity="0.8"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ delay: 3.8, duration: 1, ease: "linear" }}
				/>
			</motion.svg>
		</div>
	);
};

export default AnimatedLoader;
