const ResDeskLamp = () => {
  return (
    <section className="group flex items-center justify-center ">
      <div className="absolute -z-50 mt-[460px] flex min-h-screen items-end">
        <section>
          <div className="flex flex-col items-center ">
            <div className="flex origin-bottom -rotate-[60deg] flex-col items-center ">
              <div className="flex origin-bottom-center1 rotate-[60deg] flex-col items-center ">
                <div className="flex origin-bottom-center2 rotate-[60deg] flex-col items-center ">
                  <div className="flex origin-bottom-center3 rotate-[118deg] flex-col items-center ">
                    <div className="h-5 w-8 rounded-t-full bg-[#222222] transition-colors duration-500 group-hover:bg-white " />
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
                  <div className="h-64 w-[2px] bg-white" />
                  <div className="h-64 w-[2px] bg-white" />
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

        <article className="absolute flex w-[500px] flex-col gap-4 font-secondaryFont text-xl font-extralight text-white">
          <h2 className="text-3xl font-light uppercase">About me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio
            reiciendis ipsum obcaecati! Suscipit quas ducimus dolorem qui
            laborum mollitia eaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio
            reiciendis ipsum obcaecati! Suscipit quas ducimus dolorem qui
            laborum mollitia eaque. Asperiores, et. Quia omnis illo veritatis
            nihil harum quidem!
          </p>
          <div>
            <div className="left-0 -ml-28 h-12 w-[500px] -rotate-1 bg-gradient-radial transition-opacity duration-500 group-hover:opacity-100 lg:h-32 lg:w-[800px] " />
          </div>
        </article>
      </div>
    </section>
  );
};

export default ResDeskLamp;
