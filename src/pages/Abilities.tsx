import { useState } from "react";

import Skils from "../components/Skils";

const Abilities = () => {
  const [mouseX, setMouseX] = useState({});
  const mouseMoveX = mouseX;

  const [mouseY, setMouseY] = useState({});
  const mouseMoveY = mouseY;

  return (
    <section
      className="group"
      onMouseMove={(event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      }}
    >
      <div className="relative block h-full w-full">
        <div
          className="bg-gradient-white-radial fixed left-0 top-0 h-96 w-96 rounded-full opacity-50 transition-opacity group-hover:opacity-100"
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
