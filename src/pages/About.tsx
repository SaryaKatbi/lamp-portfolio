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
      <DeskLamp
        mouseY={mouseY}
        aboutTitle="ABOUT ME"
        aboutblog1="  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur."
        aboutblog2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
        aboutblog3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis."
      />
    </section>
  );
};

export default About;
