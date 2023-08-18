import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="top-0 flex h-[120px] w-full items-center justify-between">
      <a href="https://github.com/SaryaKatbi">DEVELOPED BY SARYA KATBY</a>

      <ul className=" flex gap-x-12">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return !isActive
                ? ""
                : "border-b-[2px] border-opacity-0 p-[3px] transition-all hover:border-collapse ";
            }}
          >
            Home
          </NavLink>
        </li>

        <li>
          <p className="group relative cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return !isActive ? "" : "group ";
              }}
            >
              <span>About</span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all group-hover:w-full  " />
            </NavLink>
          </p>
        </li>

        <li>
          <p className="group relative cursor-pointer">
            <NavLink
              to="/works"
              className={({ isActive }) => {
                return !isActive ? "" : "bg-white ";
              }}
            >
              <span>Works</span>
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all group-hover:w-full  " />
          </p>
        </li>

        <li>
          <p className="group relative cursor-pointer">
            <NavLink
              to="/contacts"
              className={({ isActive }) => {
                return !isActive ? "" : "bg-white ";
              }}
            >
              <span>Contacts</span>
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all group-hover:w-full   " />
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
