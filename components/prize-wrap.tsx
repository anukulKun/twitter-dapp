import Image from "next/image";
import React from "react";

const PrizeWrap = () => {
	return (
		<div className="absolute h-[204.89px] w-[416.31px] top-[71px] right-[74px] scale-50 md:scale-75 lg:scale-100">
			<div className="h-full w-full relative ">
				<Image
					fill
					src="/gravity-wrap.svg"
					alt="gravity-wrap"
					className="z-0"
				/>
				<Image
					width={258.78}
					height={130.01}
					src="/prize.svg"
					alt="prize"
					className="z-10 top-[5%] absolute left-1/2 -translate-x-1/2"
				/>
			</div>
		</div>
	);
};

export default PrizeWrap;
