import { useState } from "react";

import Skils from "../components/Skils";

const Abilities = () => {
  const [mouseX, setMouseX] = useState(0);
  const mouseMoveX = mouseX;

  const [mouseY, setMouseY] = useState(0);
  const mouseMoveY = mouseY;

  return (
    <section
      className="group top-32"
      onMouseMove={(event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      }}
    >
      <div className="relative -z-30 h-full w-full">
        <div
          className="fixed -left-[10%] -top-[19%] h-96  w-96 self-center rounded-full bg-gradient-white-radial opacity-0 transition-opacity duration-500 group-hover:opacity-100 "
          style={{
            transform: `translate(${mouseMoveX}px, ${mouseMoveY}px)`,
          }}
        />
        <Skils skilsColor="absolute text-[#000000]" />
      </div>
    </section>
  );
};

// text-[#000000]
// text-[#242424]
export default Abilities;
