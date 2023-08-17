const App = () => {
  return (
    <div className="px-28">
      <div className="flex justify-center">
        <nav className="top-0 flex h-[120px] w-full items-center justify-between">
          <a href="https://github.com/SaryaKatbi">DEVELOPED BY SARYA KATBY</a>

          <ul className="flex gap-x-12">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/works">Works</a>
            </li>
            <li>
              <a href="/price">Price</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
          </ul>
        </nav>

        <section className="absolute top-0 mx-auto w-fit">
          <div className="flex flex-col items-center">
            <div className="h-64 w-[2px] bg-white"></div>
            <div className="-mt-[1px] h-3 w-4 rounded-t-full border border-white"></div>
            <div className="-mt-[1px] h-3 w-4 border border-white"></div>
            <div className="-mt-[1px] flex h-20 w-40 items-center justify-start rounded-t-full border border-white">
              <div className="absolute mb-2 ml-6 h-8 w-8 rounded-tl-full border-t-[1px]"></div>
              <div className="absolute mb-2 ml-6 h-8 w-8 rounded-tl-full border-l-[1px]"></div>
            </div>
            <div className="h-4 w-8 rounded-b-full bg-white"></div>
          </div>
        </section>
      </div>

      <section className="mt-32 flex h-[700px] flex-col items-center justify-center self-center">
        <h2 className="mb-7 mt-10 text-8xl font-medium">Web Designer</h2>
        <h3 className="mb-24 text-5xl font-light">SARYA KATBY</h3>
        <div className="h-fit w-fit cursor-pointer border px-8 py-2.5">
          MY WORKS
        </div>
      </section>

      <section className=" -mt-36 flex items-center justify-center overflow-hidden">
        <div className="h-28 w-[800px] rounded-full bg-gradient-radial "></div>
      </section>
    </div>
  );
};

export default App;
