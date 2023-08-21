import { useState } from "react";
import DeskLamp from "../components/DeskLamp";

const About = () => {
  const [mouseY, setMouseY] = useState(0);
  return (
    <section className="flex items-center justify-center ">
      <div
        className="absolute -top-8 -z-10 flex w-full items-end justify-center gap-80 px-28"
        onMouseMove={(event) => {
          setMouseY(event.clientY);
        }}
      >
        <DeskLamp mouseY={mouseY} />
        <article className="font-secondaryFont flex h-fit w-[620px] flex-col gap-4 text-start font-light text-white ">
          <h2 className="text-start text-6xl uppercase ">About Me</h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
          <div className="-mb-16 h-32 w-[800px] rounded-full bg-gradient-radial" />
        </article>
      </div>
    </section>
  );
};

export default About;
