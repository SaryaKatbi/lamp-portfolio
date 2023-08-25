const DeskLamp = ({
  mouseY,
  aboutTitle,
  aboutblog1,
  aboutblog2,
  aboutblog3,
}: {
  mouseY: number;
  aboutTitle: string;
  aboutblog1: string;
  aboutblog2: string;
  aboutblog3: string;
}) => {
  // NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin

  const greenRotation = ((mouseY - 0) * (50 - 40)) / (1000 - 0) + 40;
  const yellowRotate = ((mouseY - 0) * (40 - 60)) / (1000 - 0) + 50;
  const redRotate = ((mouseY - 0) * (100 - 65)) / (1000 - 0) + 65;
  const roseRotate = ((mouseY - 0) * (12 - 20)) / (1000 - 0) + 12;

  const shadowPosition = ((mouseY - 0) * (10 - 500)) / (1000 - 0) + 250;

  return (
    <section className="flex items-center justify-center ">
      <div className="absolute bottom-32 -z-10 flex items-end justify-evenly gap-[360px] px-28">
        <section>
          <div className="flex flex-col items-center">
            <div
              className="flex origin-bottom flex-col items-center"
              style={{
                transform: `rotate(-${roseRotate}deg)`,
                transition: "transform 100ms ease",
              }}
            >
              <div
                className="flex origin-bottom-center1 flex-col items-center"
                style={{
                  transform: `rotate(${greenRotation}deg)`,
                  transition: "transform 100ms ease",
                }}
              >
                <div
                  className="flex origin-bottom-center2 flex-col items-center"
                  style={{
                    transform: `rotate(${yellowRotate}deg)`,
                    transition: "transform 100ms ease",
                  }}
                >
                  <div
                    className="flex origin-bottom-center3 flex-col items-center"
                    style={{
                      transform: `rotate(${redRotate}deg)`,
                      transition: "transform 100ms ease",
                    }}
                  >
                    <div className="h-5 w-10 rounded-t-full bg-white " />
                    <div className="flex h-[88px] w-44 items-center justify-center rounded-b-full border-[2px] border-white ">
                      <div className="absolute mr-20 mt-2 h-9 w-9 origin-top-right rounded-bl-full border-b-[1px] border-white" />
                      <div className="absolute mr-20 mt-2 h-9 w-9 origin-top-right rounded-bl-full border-l-[1px] border-white" />
                    </div>
                    <div className="-mt-[2px] h-3 w-4 border-[2px] border-white" />
                    <div className="-mt-[2px] flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-white">
                      <div className="h-6 w-6 rounded-full border-[2px] border-white" />
                    </div>
                  </div>
                  <div className=" -mt-[1px] h-60 w-[2px] bg-white" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-white">
                    <div className="h-6 w-6 rounded-full border-[2px] border-white" />
                  </div>
                </div>
                <div className="h-60 w-[2px] bg-white" />
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-white">
                  <div className="h-6 w-6 rounded-full border-[2px] border-white" />
                </div>
              </div>
              <div className="h-60 w-[2px] bg-white" />
            </div>

            <div className="-mb-[2px] h-5 w-7 rounded-t-full border-[2px] border-white" />
            <div className="-mb-[2px] h-5 w-7 border-[2px] border-white" />
            <div className="h-6 w-52 rounded-t-lg border-[2px] border-white" />
          </div>
        </section>

        <article className="-mb-20 flex w-[620px] flex-col gap-5 font-secondaryFont font-light text-white ">
          <h2 className="text-5xl uppercase">{aboutTitle}</h2>
          <p>{aboutblog1}</p>
          <p>{aboutblog2}</p>
          <p>{aboutblog3}</p>
          <div
            style={{
              transform: `translate(${shadowPosition}px)`,
              transition: "transform 100ms ease",
            }}
          >
            <div className="left-0 -ml-28 h-32 w-[800px] -rotate-1 bg-gradient-radial " />
          </div>
        </article>
      </div>
    </section>
  );
};

export default DeskLamp;
