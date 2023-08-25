const DeskLamp = ({
  mouseY,
  aboutTitle,
  p1,
  p2,
}: {
  mouseY: number;
  aboutTitle: string;
  p1: string;
  p2: string;
}) => {
  // NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin

  const greenRotation = ((mouseY - 0) * (50 - 40)) / (1000 - 0) + 40;
  const yellowRotate = ((mouseY - 0) * (40 - 60)) / (1000 - 0) + 50;
  const redRotate = ((mouseY - 0) * (100 - 65)) / (1000 - 0) + 65;
  const roseRotate = ((mouseY - 0) * (12 - 20)) / (1000 - 0) + 12;

  const shadowPosition = ((mouseY - 0) * (10 - 500)) / (1000 - 0) + 250;

  return (
    <section className="group flex items-center justify-center px-28 ">
      <div className="absolute -z-50 mt-[460px] flex h-fit items-end gap-[360px]">
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
                    <div className="flex h-5 w-8 items-center justify-center rounded-t-full bg-[#222222] transition-colors duration-500 group-hover:bg-white " />
                    <div className="absolute -z-50 h-96 w-96 -translate-y-28 bg-gradient-radial-light opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="flex h-[88px] w-44 items-center justify-center rounded-b-full border-[2px] border-white bg-primmaryDark ">
                      <div className="absolute mr-20 mt-2 h-9 w-9 origin-top-right rounded-bl-full border-b-[1px] border-white" />
                      <div className="absolute mr-20 mt-2 h-9 w-9 origin-top-right rounded-bl-full border-l-[1px] border-white" />
                    </div>

                    <div className="-mt-[2px] h-3 w-4 border-[2px] border-white bg-primmaryDark" />
                    <div className="-mt-[2px] flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-white bg-primmaryDark">
                      <div className="h-6 w-6 rounded-full border-[2px] border-white" />
                    </div>
                  </div>
                  <div className="flex gap-2 bg-primmaryDark">
                    <div className=" -mt-[1px] h-56 w-[2px] bg-white" />
                    <div className=" -mt-[1px] h-56 w-[2px] bg-white" />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-white">
                    <div className="h-6 w-6 rounded-full border-[2px] border-white" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-56 w-[2px] bg-white" />
                  <div className="h-56 w-[2px] bg-white" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-white">
                  <div className="h-6 w-6 rounded-full border-[2px] border-white" />
                </div>
              </div>

              <div className=" flex gap-2">
                <div className=" h-56 w-[2px] bg-white" />
                <div className=" h-56 w-[2px] bg-white" />
              </div>
            </div>

            <div className="-mb-[2px] -mt-[2px] h-4 w-6 rounded-t-full border-[2px] border-white" />
            <div className="-mb-[2px] h-4 w-6 border-[2px] border-white" />
            <div className="h-4 w-44 rounded-t-lg border-[2px] border-white" />
          </div>
        </section>

        <article className="-mb-20 flex w-[690px] flex-col gap-4 font-secondaryFont text-2xl font-extralight text-white">
          <h2 className="text-5xl font-light uppercase ">{aboutTitle}</h2>
          <p>{p1}</p>
          <p>{p2}</p>
          <div
            style={{
              transform: `translate(${shadowPosition}px)`,
              transition: "transform 100ms ease",
            }}
          >
            <div className="left-0 -ml-28 h-32 w-[800px] -rotate-1 bg-gradient-radial opacity-0 transition-opacity duration-500 group-hover:opacity-100 " />
          </div>
        </article>
      </div>
    </section>
  );
};

export default DeskLamp;
