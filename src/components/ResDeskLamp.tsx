const ResDeskLamp = () => {
  return (
    <section className="flex h-full justify-center overflow-hidden lg:hidden">
      <article className="mt-16 flex w-fit flex-col gap-4 font-secondaryFont text-lg font-extralight text-white xl:w-[690px] xl:text-2xl">
        <h2 className="text-3xl font-light uppercase xl:text-5xl">About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio
          reiciendis ipsum obcaecati! Suscipit quas ducimus dolorem qui laborum
          mollitia eaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio
          reiciendis ipsum obcaecati! Suscipit quas ducimus dolorem qui laborum
          mollitia eaque. Asperiores, et. Quia omnis illo veritatis nihil harum
          quidem!
        </p>

        <section className="bottom-0 flex translate-x-24 items-center justify-center">
          <div className="flex h-fit w-fit origin-bottom-center2 -rotate-45 flex-col items-center justify-center">
            <div className="flex origin-bottom-center3 rotate-45 flex-col items-center justify-center">
              <div className="h-4 w-8 rounded-t-full bg-white"></div>
              <div className="borderwhi h-[72px] w-36 rounded-b-full border-2" />
              <div className="-m-[2px] h-3 w-4 border-2 border-white" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
                <div className="h-6 w-6 rounded-full border-2 border-white" />
              </div>
            </div>

            <div className="-mt-[2px] flex gap-2">
              <div className="h-40 w-[2px] bg-white" />
              <div className="h-40 w-[2px] bg-white" />
            </div>

            <div className=" -mt-[2px] flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
              <div className="h-6 w-6 rounded-full border-2 border-white" />
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default ResDeskLamp;
