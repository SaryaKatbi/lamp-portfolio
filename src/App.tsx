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
    </div>
  );
};

export default App;
