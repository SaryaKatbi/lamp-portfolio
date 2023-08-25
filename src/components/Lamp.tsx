const Lamp = () => {
  return (
    <section className="absolute top-0 mx-auto w-fit">
      <div className="flex flex-col items-center">
        <div className="h-56 w-[2px] bg-white" />
        <div className="z-10 -mt-[1px] h-3 w-4 rounded-t-full border border-white bg-primmaryDark" />
        <div className="z-10 -mt-[1px] h-3 w-4 border border-white bg-primmaryDark" />
        <div className="z-10 -mt-[1px] flex h-[72px] w-36 items-center justify-start rounded-t-full border border-white bg-primmaryDark">
          <div className="absolute mb-2 ml-6 h-8 w-8 rotate-12 rounded-tl-full border-t-[1px]" />
          <div className="absolute mb-2 ml-6 h-8 w-8 rotate-12 rounded-tl-full border-l-[1px]" />
        </div>
        <div className="h-3 w-6 rounded-b-full bg-white" />
      </div>
    </section>
  );
};

export default Lamp;
