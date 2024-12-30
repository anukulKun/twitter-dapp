
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



import AnimatedLoaderM from "@/components/Desktop/animated-loader";
import BlueBoxM from "@/components/Desktop/BlueBox";
import CyberLoaderM from "@/components/Desktop/cyber-loader";
import EstimatedTimeM from "@/components/Desktop/estimated-time";
import FrameM from "@/components/Desktop/frame";
import HouseM from "@/components/Desktop/house";
import PoweredByM from "@/components/Desktop/powered-by";
import PrizeWrapM from "@/components/Desktop/prize-wrap";
import RadarCharM from "@/components/Desktop/radar-chart";
import ModelM from "@/components/Desktop/Model";



export default function Home() {
  return (
    <Frame>
      <div className="" >
        <CyberLoader />
      </div>
      <div>
        <BlueBox />
      </div>
      <div className="sm:blo hidden">
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
