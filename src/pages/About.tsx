import { useState } from "react";
import DeskLamp from "../components/DeskLamp";
import ResDeskLamp from "../components/ResDeskLamp";

const About = () => {
  const [mouseY, setMouseY] = useState(0);

  return (
    <section
      className="px-5 md:px-10 lg:px-16 xl:px-36"
      onMouseMove={(event) => {
        setMouseY(event.clientY);
      }}
    >
      <ResDeskLamp />

      <DeskLamp
        className="max-lg:hidden"
        mouseY={mouseY}
        aboutTitle="ABOUT ME"
        p1="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quo odio reiciendis ipsum obcaecati! Suscipit quas ducimus
      dolorem qui laborum mollitia eaque.
        "
        p2="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quo odio reiciendis ipsum obcaecati! Suscipit quas ducimus
      dolorem qui laborum mollitia eaque. Asperiores,
      et. Quia omnis illo veritatis nihil harum quidem!
      "
      />
    </section>
  );
};

export default About;
