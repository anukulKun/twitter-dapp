import Image from "next/image";
import React from "react";

const EstimatedTime = () => {
	return (
		<div className="absolute h-[204.89px] w-[416.31px] bottom-0 left-[100px]">
			<div className="h-full w-full relative ">
				<Image
					fill
					src="/estimated-time.svg"
					alt="estimated-time"
					className="z-10"
				/>
			</div>
		</div>
	);
};

export default EstimatedTime;
