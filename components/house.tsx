'use client'

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { PowerGlitch } from 'powerglitch';

const House = () => {
	const squidGameRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (squidGameRef.current) {
			PowerGlitch.glitch(squidGameRef.current, {
				playMode: 'always',
				hideOverflow: false,
				timing: {
					duration: 2000,
					iterations: Infinity,
					easing: 'ease-in-out',
				},
				glitchTimeSpan: {
					start: 0.4,
					end: 0.7,
				},
				shake: {
					velocity: 15,
					amplitudeX: 0.2,
					amplitudeY: 0.2,
				},
				slice: {
					count: 6,
					velocity: 15,
					minHeight: 0.02,
					maxHeight: 0.15,
					hueRotate: true,
				},
			});
		}
	}, []);

	return (
		<div className="h-full w-full max-w-[413px] -translate-x-1/2 left-1/2 absolute">
			<Image fill alt="house" src="/house.svg" className="-z-1" />
			<div className="absolute w-full left-1/2 -translate-x-1/2 top-[40px] h-[155.77px] max-w-[250px]">
				<div className="relative w-full h-full">
					<Image
						ref={squidGameRef}
						fill
						alt="squid game"
						src="/squid-game.svg"
						className="-z-1 w-full top-[45px]"
					/>
					<Image
						width={41}
						height={34}
						alt="s2"
						src="/s2.svg"
						className="-z-1 mt-4 absolute bottom-0 right-0 translate-y-2"
					/>
				</div>
			</div>
		</div>
	);
};

export default House;
