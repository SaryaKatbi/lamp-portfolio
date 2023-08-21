import { useState } from "react";
import DeskLamp from "../components/DeskLamp";

const About = () => {
  // const roseRotate = ((mouseY - 0) * (12 - 20)) / (1000 - 0) + 12;

  const shadowPosition = ((mouseX - 0) * (12 - 20)) / (1000 - 0) + 12;

  const [mouseY, setMouseY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  return (
    <section className="flex items-center justify-center ">
      <div
        className="absolute bottom-32 -z-10 flex items-end justify-evenly gap-[360px] px-28"
        onMouseMove={(event) => {
          setMouseY(event.clientY);
        }}
      >
        <DeskLamp mouseY={mouseY} />

        <article className="font-secondaryFont -mb-16 flex w-[620px] flex-col gap-4 font-light text-white ">
          <h2 className="text-6xl uppercase">About Me</h2>
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
          <div
            onMouseMove={(e) => {
              setMouseX(e.clientX);
            }}
            style={{ transform: `translate(${shadowPosition})` }}
          >
            <div className="left-0 -ml-28 h-32 w-[800px] -rotate-1 bg-gradient-radial " />
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
