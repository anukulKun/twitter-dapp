import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlueBox() {
  return (
    <div className="w-[275.14px] absolute aspect-square right-[170px] bottom-[90px] scale-50 md:scale-75 lg:scale-100 flex justify-evenly items-center">
      <Link href="https://magiceden.io/launchpad/squad_game">
        
          <Image
            src="/bluee.svg"
            className="w-full h-full"
            width={135.91}
            height={135.91}
            alt="disk-inner"
          />
      
      </Link>
    </div>
  );
}

export default BlueBox;
