import AnimatedLoader from "@/components/animated-loader";
import CyberLoader from "@/components/cyber-loader";
import Frame from "@/components/frame";
import House from "@/components/house";
import PoweredBy from "@/components/powered-by";
import PrizeWrap from "@/components/prize-wrap";
import RadarChart from "@/components/radar-chart";
import Image from "next/image";

export default function Home() {
	return (
		<Frame>
			<CyberLoader />
			<PrizeWrap />
			<House />
			<PoweredBy />
			<RadarChart />
			<AnimatedLoader />
		</Frame>
	);
}
