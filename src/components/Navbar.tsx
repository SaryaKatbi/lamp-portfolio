import { NavLink } from "react-router-dom";

const Navbar = () => {
  const act =
    "border-b-[2px] border-white border-opacity-100 pb-2 px-2 transition-all";
  const notAct =
    "border-b-[2px] border-white border-opacity-0 pb-2 transition-all hover:border-opacity-100";

  return (
    <nav className="top-0 flex h-[120px] w-full items-center justify-between">
      <a href="https://github.com/SaryaKatbi" target="_blank">
        DEVELOPED BY SARYA KATBY
      </a>

      <ul className=" flex gap-x-12">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return !isActive ? `${notAct}` : `${act}`;
            }}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return !isActive ? `${notAct}` : `${act}`;
            }}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/works"
            className={({ isActive }) => {
              return !isActive ? `${notAct}` : `${act}`;
            }}
          >
            Works
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => {
              return !isActive ? `${notAct}` : `${act}`;
            }}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
