const DeskLamp = ({ mouseY }: { mouseY: number }) => {
  // NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
  const greenRotation = ((mouseY - 0) * (20 - 12)) / (1000 - 0) + 12;
  const yellowRotate = ((mouseY - 0) * (60 - 40)) / (1000 - 0) + 40;
  const redRotate = ((mouseY - 0) * (90 - 70)) / (1000 - 0) + 70;

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="origin-bottom-center1 flex flex-col items-center justify-center"
        style={{ transform: `rotate(${greenRotation}deg)` }}
      >
        <div
          className="origin-bottom-center2 flex flex-col items-center justify-center "
          style={{ transform: `rotate(${yellowRotate}deg)` }}
        >
          <div
            className="origin-bottom-center3 flex flex-col items-center justify-center "
            style={{ transform: `rotate(${redRotate}deg)` }}
          >
            <div className=" h-5 w-10 rounded-t-full bg-white " />
            <div className="flex h-20 w-40 items-center justify-center rounded-b-full border-[2px] border-white ">
              <div className="absolute mr-14 mt-2 h-8 w-8 -rotate-12 rounded-bl-full border-b-[1px] border-white" />
              <div className="absolute mr-14 mt-2 h-8 w-8 -rotate-12 rounded-bl-full border-l-[1px] border-white" />
            </div>
            <div className=" -mt-[2px] h-3 w-4 border-[2px] border-white" />

            <div className=" -mt-[2px] flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-white">
              <div className="h-6 w-6 rounded-full border-[2px] border-white" />
            </div>
          </div>

          <div className="-mb-[1px] h-56 w-[2px] overflow-hidden bg-white " />
          <div className="  flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-white">
            <div className="h-6 w-6 rounded-full border-[2px] border-white" />
          </div>
        </div>

        <div className="h-56 w-[2px] overflow-hidden bg-white" />
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-white">
          <div className="h-6 w-6 rounded-full border-[2px] border-white" />
        </div>
      </div>

      <div className="h-56 w-[2px] overflow-hidden bg-white" />
      <div className="-mb-[2px] h-5 w-7 rounded-t-full border-[2px] border-white" />
      <div className="-mb-[2px] h-5 w-7 border-[2px] border-white" />
      <div className="h-6 w-44 rounded-t-lg border-[2px] border-white" />
    </div>
  );
};

export default DeskLamp;
