const Navbar = () => {
  return (
    <nav className="top-0 flex h-[120px] w-full items-center justify-between">
      <a href="https://github.com/SaryaKatbi">DEVELOPED BY SARYA KATBY</a>

      <ul className="flex gap-x-12">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/works">Works</a>
        </li>
        <li>
          <a href="/contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
