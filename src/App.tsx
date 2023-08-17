const App = () => {
  return (
    <div className="px-28">
      <nav className="flex h-[120px] items-center justify-between">
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

      <section className="flex h-[700px] flex-col items-center justify-center self-center">
        <h2 className="mb-7 mt-10 text-8xl font-medium">Web Designer</h2>
        <h3 className="mb-24 text-5xl font-light">SARYA KATBY</h3>
        <div className="h-fit w-fit border px-8 py-2.5">MY WORKS</div>
      </section>

      <section className=" -mt-36 flex items-center justify-center overflow-hidden">
        <div className="h-28 w-[460px] rounded-full bg-gradient-radial "></div>
      </section>
    </div>
  );
};

export default App;
