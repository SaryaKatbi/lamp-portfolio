import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const act =
    "border-b-[2px] border-white border-opacity-100 pb-2 px-2 transition-all";
  const notAct =
    "border-b-[2px] border-white border-opacity-0 pb-2 transition-all hover:border-opacity-100";

  return (
    <nav className="top-0 flex h-[120px] w-full items-center justify-between px-28 font-secondaryFont">
      <a
        href="https://github.com/SaryaKatbi"
        target="_blank"
        className="group flex items-center border-b-[1px] border-white border-opacity-0 text-sm transition-all hover:border-opacity-100 "
      >
        DEVELOPED BY SARYA KATBY
        <span className="-ml-3 text-lg text-white opacity-0 transition-all group-hover:ml-0.5 group-hover:rotate-45 group-hover:opacity-100">
          <GoArrowUpRight />
        </span>
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
            to="/abilities"
            className={({ isActive }) => {
              return !isActive ? `${notAct}` : `${act}`;
            }}
          >
            Abilities
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
