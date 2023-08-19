const DeskLamp = ({ mouseY }: { mouseY: number }) => {
  // NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
  const greenRotation = ((mouseY - 0) * (20 - 12)) / (1000 - 0) + 12;
  const yellowRotate = ((mouseY - 0) * (60 - 40)) / (1000 - 0) + 40;
  const redRotate = ((mouseY - 0) * (90 - 70)) / (1000 - 0) + 70;

  return (
    <div className="flex h-fit w-fit flex-col items-center justify-center ">
      <div className="flex h-fit w-fit origin-bottom flex-col items-center justify-center ">
        <div
          className={` flex h-fit w-fit origin-bottom flex-col items-center justify-center`}
          style={{ transform: `rotate(${greenRotation}deg)` }}
        >
          <div
            className="flex h-fit w-fit origin-bottom flex-col items-center justify-center"
            style={{ transform: `rotate(${yellowRotate}deg)` }}
          >
            <div
              className="flex origin-bottom rotate-90 flex-col items-center justify-center"
              style={{ transform: `rotate(${redRotate}deg)` }}
            >
              <div className="-mt-[1px] flex h-16 w-32 rotate-180 items-center justify-start rounded-t-full border border-white">
                <div className="absolute mb-2 ml-6 h-8 w-8 rotate-12 rounded-tl-full border-t-[1px]"></div>
                <div className="absolute mb-2 ml-6 h-8 w-8 rotate-12 rounded-tl-full border-l-[1px]"></div>
              </div>
              <div className=" -mt-[1px] h-2 w-3 border border-white"></div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border">
                <div className="h-5 w-5 rounded-full border"></div>
              </div>
            </div>

            <div className="h-44 w-[2px] bg-white"></div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border">
              <div className="h-5 w-5 rounded-full border border-white"></div>
            </div>
          </div>

          <div className="h-44 w-[2px] bg-white"></div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border">
            <div className="h-5 w-5 rounded-full border"></div>
          </div>
        </div>

        <div className="h-44 w-[2px] bg-white"></div>
        <div className="h-4 w-6 rounded-t-full border border-white"></div>
        <div className="h-4 w-6 border"></div>
        <div className="h-5 w-32 rounded-t-lg border border-white"></div>
      </div>
    </div>
  );
};

export default DeskLamp;
