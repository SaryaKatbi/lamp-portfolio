import { useState } from "react";
import DeskLamp from "../components/DeskLamp";

const About = () => {
  const [mouseY, setMouseY] = useState(0);
  return (
    <section
      onMouseMove={(event) => {
        setMouseY(event.clientY);
      }}
    >
      <DeskLamp mouseY={mouseY} />
    </section>
  );
};

export default About;
