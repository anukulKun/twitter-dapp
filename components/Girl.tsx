import Spline from "@splinetool/react-spline/next";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div
        className="absolute top-36 z-20"
        style={{
          transform: "scale(0.9)",

          transformOrigin: "center",
        }}
      >
        <div className="relative z-10">
          <Spline scene="https://prod.spline.design/HpwX34jGOELh3Q4f/scene.splinecode" />
        </div>

        <div className="w-[310.14px] absolute aspect-square left-1/2 top-[80%] transform -translate-x-1/2 -translate-y-1/2 scale-50 md:scale-75 lg:scale-100 flex justify-evenly items-center z-0">
          <Image
            src="/grid.svg"
            className="w-full h-full"
            width={135.91}
            height={135.91}
            alt="disk-inner"
          />
        </div>
      </div>
    </main>
  );
}
