import { ReactComponent as Logo } from "../assets/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between h-24 w-full px-8 md:px-24 md:h-11/12 navShadow">
      <aside className="fontInter flex items-center md:w-max">
        <Link className="flex items-center h-full gap-2 cursor-pointer">
          <Logo />
          <b>HelpMeOut</b>
        </Link>
      </aside>
      <aside
        className={` ${
          isToggleOpen ? "" : "hidden"
        } fixed top-24 items-center  fontWorkSans w-full gap-8 text-sm md:flex md:static md:w-max left-0 right-0`}
      >
        <p className="cursor-pointer h-12 flex items-center border-2 justify-center w-full md:h-auto md:block md:w-fit md:border-0">
          <b>Feautures</b>
        </p>
        <p className="cursor-pointer h-12 flex items-center  border-2 justify-center w-full md:h-auto md:block md:w-fit md:border-0 ">
          <b> How it works</b>
        </p>
      </aside>
      <aside
        className={`${
          isToggleOpen ? "flex" : "hidden "
        } fontSora fixed top-48 left-0 right-0 w-full flex items-center justify-center border-2 md:flex md:static md:w-max  md:border-0`}
      >
        <p className="cursor-pointer flex text-center items-center justify-center w-full h-12 md:block md:w-fit text-lg md:h-auto ">
          <b> Get Started</b>
        </p>
      </aside>

      <aside className="md:hidden cursor-pointer flex items-center justify-center">
        {isToggleOpen ? (
          <button onClick={() => setIsToggleOpen(false)}>X</button>
        ) : (
          <button onClick={() => setIsToggleOpen(true)}>
            <FaAlignRight />
          </button>
        )}
      </aside>
    </nav>
  );
};

export default NavBar;
