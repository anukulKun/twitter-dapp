import AnimatedLoader from "@/components/animated-loader";
import CyberLoader from "@/components/cyber-loader";
import EstimatedTime from "@/components/estimated-time";
import Frame from "@/components/frame";
import House from "@/components/house";
import PoweredBy from "@/components/powered-by";
import PrizeWrap from "@/components/prize-wrap";
import RadarChart from "@/components/radar-chart";

export default function Home() {
	return (
		<Frame>
			<CyberLoader />
			<PrizeWrap />
			<House />
			<PoweredBy />
			<RadarChart />
			<AnimatedLoader />
            <EstimatedTime />
		</Frame>
	);
}
