import { useState } from "react";

import Skils from "../components/Skils";

const Abilities = () => {
  const [mouseX, setMouseX] = useState(0);
  const mouseMoveX = mouseX;

  const [mouseY, setMouseY] = useState(0);
  const mouseMoveY = mouseY;

  return (
    <section
      className="group top-32 px-28 "
      onMouseMove={(event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      }}
    >
      <div className="relative -z-30 h-full w-full">
        <div
          className="fixed -left-[13%] -top-[25%] h-[500px] w-[500px] self-center rounded-full
          bg-gradient-white-radial opacity-0 blur-2xl
          transition-opacity duration-500 group-hover:opacity-100 "
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
