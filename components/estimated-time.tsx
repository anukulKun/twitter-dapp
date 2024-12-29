import Image from "next/image";
import React from "react";

const EstimatedTime = () => {
	return (
		<div className="absolute h-[204.89px] w-[416.31px] bottom-0 left-[6%] scale-50 md:scale-75 lg:scale-100">
			<div className="h-full w-full relative ">
				<Image
					fill
					src="/estimated-time.svg"
					alt="estimated-time"
					className="z-10"
				/>
        <Image
          src="/estimated-time-decorators.svg"
          alt="estimated-time-decorators"
          width={416.31}
          height={204.89}
          className="absolute top-24 left-36 h-18 w-auto z-0"
        />
			</div>
		</div>
	);
};

export default EstimatedTime;
