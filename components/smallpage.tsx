import AnimatedLoader from "@/components/animated-loader";
import BlueBox from "@/components/BlueBox";
import CyberLoader from "@/components/cyber-loader";
import EstimatedTime from "@/components/estimated-time";
import Frame from "@/components/frame";
import House from "@/components/house";
import PoweredBy from "@/components/powered-by";
import PrizeWrap from "@/components/prize-wrap";
import RadarChart from "@/components/radar-chart";
import Model from "@/components/Model";


export default function SmallHome() {
  return (
    <Frame>
      <div className="sm:block" >
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
