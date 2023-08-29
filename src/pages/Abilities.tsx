import { useState } from "react";

import Skils from "../components/Skils";
import ResSkils from "../components/ResSkils";

const Abilities = () => {
  const [mouseX, setMouseX] = useState(0);
  const mouseMoveX = mouseX;

  const [mouseY, setMouseY] = useState(0);
  const mouseMoveY = mouseY;

  return (
    <section
      onPointerMove={(event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      }}
      className="group px-5 md:px-10 lg:px-16 xl:px-36 "
    >
      <div className="relative -z-30 h-full w-full max-lg:hidden">
        <div
          className="blob fixed aspect-square h-[0] rounded-full bg-gradient-white-radial opacity-100 blur-2xl
          transition-opacity duration-500 group-hover:opacity-100 lg:h-[500px]"
          style={{
            left: `${mouseMoveX}px`,
            top: `${mouseMoveY}px`,
          }}
        />
        <Skils skilsColor="absolute text-[#000000]" />
      </div>

      <div className="lg:hidden">
        <ResSkils />
      </div>
    </section>
  );
};

export default Abilities;
