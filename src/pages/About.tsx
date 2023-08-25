import { useState } from "react";
import DeskLamp from "../components/DeskLamp";

const About = () => {
  const [mouseY, setMouseY] = useState(0);

  return (
    <section
      className="px-28"
      onMouseMove={(event) => {
        setMouseY(event.clientY);
      }}
    >
      <DeskLamp
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
