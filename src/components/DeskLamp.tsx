const DeskLamp = ({ mouseY }: { mouseY: number }) => {
  // NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin

  // const greenRotation = ((mouseY - 0) * (20 - 12)) / (1000 - 0) + 12;
  // const yellowRotate = ((mouseY - 0) * (60 - 40)) / (1000 - 0) + 40;
  // const redRotate = ((mouseY - 0) * (90 - 70)) / (1000 - 0) + 70;

  const greenRotation = ((mouseY - 0) * (50 - 40)) / (1000 - 0) + 40;
  const yellowRotate = ((mouseY - 0) * (40 - 60)) / (1000 - 0) + 50;
  const redRotate = ((mouseY - 0) * (100 - 65)) / (1000 - 0) + 65;
  const roseRotate = ((mouseY - 0) * (12 - 20)) / (1000 - 0) + 12;

  return (
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
  );
};

export default DeskLamp;
