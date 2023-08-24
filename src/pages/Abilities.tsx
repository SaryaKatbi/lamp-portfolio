import { useState } from "react";

import Skils from "../components/Skils";

const Abilities = () => {
  const [mouseX, setMouseX] = useState(0);
  const mouseMoveX = mouseX;

  const [mouseY, setMouseY] = useState(0);
  const mouseMoveY = mouseY;

  return (
    <section
      className="group"
      onMouseMove={(event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      }}
    >
      <div
        className="fixed -left-[10%] -top-[20%] h-96  w-96 self-center rounded-full bg-gradient-white-radial opacity-0 transition-opacity group-hover:opacity-100 "
        style={{
          transform: `translate(${mouseMoveX}px, ${mouseMoveY}px)`,
        }}
      />
      <Skils skilsColor="absolute text-[#000000]" />
    </section>
  );
};

// text-[#000000]
// text-[#242424]
export default Abilities;
