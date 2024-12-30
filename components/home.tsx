import AnimatedLoader from "@/components/Desktop/animated-loader";
import BlueBox from "@/components/Desktop/BlueBox";
import CyberLoader from "@/components/Desktop/cyber-loader";
import EstimatedTime from "@/components/Desktop/estimated-time";
import Frame from "@/components/Desktop/frame";
import House from "@/components/Desktop/house";
import PoweredBy from "@/components/Desktop/powered-by";
import PrizeWrap from "@/components/Desktop/prize-wrap";
import RadarChart  from "@/components/Desktop/radar-chart";
import Model from "@/components/Desktop/Model";



export default function Home() {
  return (
    <Frame>
      <div className="" >
        <CyberLoader />
      </div>
      <div>
        <BlueBox />
      </div>
      <div className="sm:block hidden">
        <PrizeWrap />
      </div>
      <div>
        <House />
      </div>
      <div>
        <PoweredBy />
      </div>
      <div className="sm:hidden block">
        <RadarChart />
      </div>
      <div>
        <AnimatedLoader />
      </div>
      <div>
        <EstimatedTime />
      </div>
      <div>
        <Model />
      </div>
    </Frame>
  );
}
