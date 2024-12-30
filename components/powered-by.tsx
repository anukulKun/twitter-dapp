import Image from "next/image";
import React from "react";
import { Rubik_Glitch } from "next/font/google";

const rubikGlitch = Rubik_Glitch({
	weight: "400",
});

const PoweredBy = () => {
	return (
		<div className="absolute items-center gap-5 right-[100px] z-50 bottom-[44px] flex scale-50 md:scale-75 lg:scale-100">
			<div
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
