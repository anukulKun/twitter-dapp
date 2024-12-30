import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlueBox() {
  return (
    <div
      className="w-[380px] h-[380px] absolute aspect-square left-[25px] lg:left-auto sm:right-[150px] sm:bottom-[-40px] bottom-[-130px] sm:scale-75 md:scale-100 lg:scale-125 flex justify-evenly items-center"
      style={{ zIndex: 9999 }} 
    >
      <Link href="https://magiceden.io/launchpad/squad_game">
        <Image
          src="/bluee.svg"
          layout="intrinsic"
          width={180}
          height={180}
          alt="disk-inner"
        />
      </Link>
    </div>
  );
}

export default BlueBox;
