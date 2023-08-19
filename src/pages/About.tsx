import { useState } from "react";
import DeskLamp from "../components/DeskLamp";

const About = () => {
  const [mouseY, setMouseY] = useState(0);
  return (
    <section
      className="flex w-full items-end justify-around"
      onMouseMove={(event) => {
        setMouseY(event.clientY);
      }}
    >
      <DeskLamp mouseY={mouseY} />

      <article className="font-primmariFont flex h-[380px] max-w-2xl flex-col justify-between text-white">
        <h2 className="text-6xl">About Me</h2>
        <div className="flex flex-col gap-6">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
        </div>
      </article>
    </section>
  );
};

export default About;
