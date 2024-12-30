'use client'

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Rubik_Glitch } from 'next/font/google';
import { PowerGlitch } from 'powerglitch';

const rubikGlitch = Rubik_Glitch({
	weight: "400",
	subsets: ['latin'],
});

const PoweredBy = () => {
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (textRef.current) {
			PowerGlitch.glitch(textRef.current, {
				playMode: 'always',
				hideOverflow: false,
				timing: {
					duration: 2000,
					iterations: Infinity,
					easing: 'ease-in-out',
				},
				glitchTimeSpan: {
					start: 0.4,
					end: 0.6,
				},
				shake: {
					velocity: 8,
					amplitudeX: 0.1,
					amplitudeY: 0.1,
				},
				slice: {
					count: 4,
					velocity: 10,
					minHeight: 0.02,
					maxHeight: 0.15,
					hueRotate: true,
				},
			});
		}
	}, []);

	return (
		<div className="absolute items-center gap-5 right-[80px] z-50 bottom-[36px] flex scale-50 md:scale-75 lg:scale-100">
			<div
				ref={textRef}
				className={`${rubikGlitch.className} leading-tight text-[#EAEBE4]/50 text-[29px]`}
			>
				<div>POWERED BY</div>
				<div>SEND ARCADE</div>
			</div>
			<div className="w-[83px] flex items-center justify-center relative aspect-square">
				<Image
					src="/creator-circle.svg"
					className="animate-spin relative"
					alt="creator-circle"
					fill
				/>
				<Image
					className=""
					src="/mascot.svg"
					alt="image"
					width={40}
					height={40}
				/>
			</div>
		</div>
	);
};

export default PoweredBy;

