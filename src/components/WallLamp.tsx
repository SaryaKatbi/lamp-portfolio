const WallLamp = ({
  mouseY,
  className,
}: {
  mouseY: number;
  className: string;
}) => {
  // NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + MewMin

  const roseRotate = ((mouseY - 0) * (200 - 100)) / (1000 - 0) + 50;
  const greenRotate = ((mouseY - 0) * (170 - 40)) / (1000 - 0) + 300;

  return (
    <section className={className}>
      <div className="justify-cente flex h-fit w-fit flex-col items-center ">
        <div
          className="flex w-fit origin-bottom-center2 flex-col items-center"
          style={{
            transform: `rotate(-${roseRotate}deg)`,
            transition: "transform 100ms ease",
          }}
        >
          <div
            className="flex w-fit origin-bottom-center3 flex-col items-center"
            style={{
              transform: `rotate(${greenRotate}deg)`,
              transition: "transform 100ms ease",
            }}
          >
            <div className="flex h-5 w-10 items-center justify-center rounded-t-full bg-white">
              <div className="bg-gradient-radial-light absolute -z-50 h-[500px] w-[500px]" />
            </div>
            <div className="bg flex h-[100px] w-[200px] items-center justify-center rounded-b-full border-[2px] border-white bg-primmaryDark ">
              <div className="absolute mb-16 ml-20 h-9 w-9 origin-bottom-left rotate-[90deg] rounded-tr-full border-t-[1px]" />
              <div className="absolute mb-16 ml-20 h-9 w-9 origin-bottom-left rotate-[90deg] rounded-tr-full border-r-[1px]" />
            </div>
            <div className="-mt-[2px] h-3 w-6 border-[2px] border-white bg-primmaryDark" />
            <div className="  -mb-[2px] -mt-[4px] flex h-14 w-14 items-center justify-center rounded-full border-[2px] border-white bg-primmaryDark">
              <div className="h-7 w-7 rounded-full border-[2px] border-white " />
            </div>
          </div>

          <div className=" flex gap-4 bg-primmaryDark ">
            <div className="-mb-[2px] h-80 w-[2px] bg-white " />
            <div className="-mb-[2px] h-80 w-[2px] bg-white " />
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-[2px] border-white">
            <div className="h-7 w-7 rounded-full border-[2px] border-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WallLamp;
