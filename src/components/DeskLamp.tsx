const DeskLamp = ({ mouseY }: { mouseY: number }) => {
  // NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
  const greenRotation = ((mouseY - 0) * (20 - 12)) / (1000 - 0) + 12;
  const yellowRotate = ((mouseY - 0) * (60 - 40)) / (1000 - 0) + 40;
  const redRotate = ((mouseY - 0) * (90 - 70)) / (1000 - 0) + 70;

  return (
    <div>
      <div className="flex h-fit w-fit origin-bottom flex-col items-center justify-center bg-blue-600">
        <div
          className="origin-bottom-center1 flex h-fit w-fit flex-col items-center justify-center"
          style={{ transform: `rotate(${greenRotation}deg)` }}
        >
          <div
            className="origin-bottom-center1 flex h-fit w-fit flex-col items-center justify-center "
            style={{ transform: `rotate(${yellowRotate}deg)` }}
          >
            <div
              className=" origin-bottom-center1 mb-[2px] flex rotate-90 flex-col items-center justify-center "
              style={{ transform: `rotate(${redRotate}deg)` }}
            >
              <div className="-mb-[1px] h-4 w-8 rounded-t-full bg-white " />
              <div className="flex h-16 w-32 rotate-180 items-center justify-end rounded-t-full border-[2px] border-white">
                <div className="absolute -mt-2 mr-6 h-8 w-8 -rotate-12 rounded-tr-full border-t-[1px]" />
                <div className="absolute -mt-2 mr-6 h-8 w-8 -rotate-12 rounded-tr-full border-r-[1px]" />
              </div>
              <div className=" -mt-[2px] h-2 w-3 border-[2px] border-white" />
              <div className=" -mt-[2px] flex h-9 w-9 items-center justify-center rounded-full border-[2px] border-white">
                <div className="h-5 w-5 rounded-full border-[2px] border-white" />
              </div>
            </div>
            <div className="-mb-[1px] h-44 w-[2px] overflow-hidden bg-white " />
            <div className=" mb-[1px] flex h-9 w-9 items-center justify-center rounded-full border-[2px] border-white">
              <div className="h-5 w-5 rounded-full border-[2px] border-white" />
            </div>
          </div>
          <div className="h-44 w-[2px] overflow-hidden bg-white" />
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-[2px] border-white">
            <div className="h-5 w-5 rounded-full border-[2px] border-white" />
          </div>
        </div>
        <div className="h-44 w-[2px] overflow-hidden bg-white" />
        <div className="-mb-[2px] h-4 w-6 rounded-t-full border-[2px] border-white" />
        <div className="-mb-[2px] h-4 w-6 border-[2px] border-white" />
        <div className="h-5 w-32 rounded-t-lg border-[2px] border-white" />
      </div>
    </div>
  );
};

export default DeskLamp;
