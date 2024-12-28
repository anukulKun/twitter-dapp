import Image from "next/image";
import React from "react";
import { Jaro } from "next/font/google";

const jaro = Jaro({ subsets: ["latin"] });

const CyberLoader = () => {
	return (
		<div className="w-[275.14px] absolute aspect-square right-[132px] bottom-[200px]">
			<div className="h-full w-full relative ">
				<Image
					src="/disk-inner.svg"
					className="w-[185.45px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square"
					width={185.45}
					height={185.45}
					alt="disk-inner"
				/>
				<span
					className={`${jaro.className} text-[46px] text-[#40F4FF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
				>
					456
				</span>
				<Image fill src="/disk-outer.svg" alt="outer-disk" />
			</div>
		</div>
	);
};

export default CyberLoader;
