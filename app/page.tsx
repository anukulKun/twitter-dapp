import CyberLoader from "@/components/cyber-loader";
import Frame from "@/components/frame";
import House from "@/components/house";
import PoweredBy from "@/components/powered-by";
import PrizeWrap from "@/components/prize-wrap";
import Image from "next/image";

export default function Home() {
	return (
		<Frame>
			<CyberLoader />
			<PrizeWrap />
			<House />
			<PoweredBy />
		</Frame>
	);
}
