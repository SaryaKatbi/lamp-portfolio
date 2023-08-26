import { useState } from "react";

import WallLamp from "../components/WallLamp";

const Contacts = () => {
  const [mouseY, setMouseY] = useState(0);

  const shadowPosition = ((mouseY - 0) * (20 - 300)) / (1000 - 0) + 200;

  return (
    <section
      onMouseMove={(event) => {
        setMouseY(event.clientY);
      }}
      className="group flex h-[840px] w-full items-center justify-between overflow-hidden pb-40 font-secondaryFont"
    >
      <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-70 ">
        <div
          className=" left-0 h-[800px] w-32 bg-gradient-radial"
          style={{
            transform: `translate( 0px, ${shadowPosition}px)`,
            transition: "transform 100ms ease",
          }}
        />
      </div>

      <article className="absolute px-28">
        <div className="flex w-fit flex-col gap-4 font-extralight">
          <h2 className="text-5xl font-light uppercase">Let's Chat!</h2>
          <p className="w-[800px] text-2xl leading-relaxed tracking-wide ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            cumque quis facere! Fugiat fuga repudiandae explicabo nihil alias
            eaque doloremque exercitationem, qui a neque quasi numquam minima
            iure odit quidem.
          </p>

          <div className="mt-10 flex justify-between">
            <div className="flex flex-col gap-y-20">
              <div>
                <h4>Send me an email</h4>
                <a
                  className="w-fit border-b-[1px] border-white border-opacity-0 text-2xl transition-all hover:border-opacity-100"
                  target="_blank"
                  href="https://mail.google.com/mail/u/0/#inbox"
                >
                  m.sarya.katby@gmail.com
                </a>
              </div>

              <div>
                <h4>Chat on WhatsApp</h4>
                <a
                  className="w-fit border-b-[1px] border-white border-opacity-0 text-2xl transition-all hover:border-opacity-100"
                  target="_blank"
                  href="https://web.whatsapp.com/"
                >
                  +00 (123) 123 12 12
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-y-20">
              <div>
                <h4>Follow me on Twitter</h4>
                <a
                  className="w-fit border-b-[1px] border-white border-opacity-0 text-2xl transition-all hover:border-opacity-100"
                  target="_blank"
                  href="https://twitter.com/KatbySarya"
                >
                  twitter.com/KatbySarya
                </a>
              </div>

              <div>
                <h4>Connect on LinkedIn</h4>
                <a
                  className="w-fit border-b-[1px] border-white border-opacity-0 text-2xl transition-all hover:border-opacity-100"
                  target="_blank"
                  href="https://www.linkedin.com/in/sarya-katby-8aa5b2214/"
                >
                  linkedin.com/saryakatby
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <WallLamp
        mouseY={mouseY}
        className="-mr-[100px] -mt-[600px] h-fit w-fit translate-y-10 "
      />
    </section>
  );
};

export default Contacts;
