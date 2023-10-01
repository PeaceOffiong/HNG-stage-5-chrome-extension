import { ReactComponent as Logo } from "../assets/Icon(1).svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-evenly primaryColor md:h-80 text-white">
      <aside className="fontInter flex items-center  w-52 md:w-max">
        <Link className="flex items-center h-full gap-2 cursor-pointer">
          <Logo />
          <b>HelpMeOut</b>
        </Link>
      </aside>

      <ul className="flex flex-col gap-4 fontWorkSans w-52 ">
        <h2 className="fontSora">
          <b> Menu</b>
        </h2>
        <li>Home</li>
        <li>Converter</li>
        <li>How it works</li>
      </ul>

      <ul className="flex flex-col gap-4 fontWorkSans w-52 ">
        <h2 className="fontSora">
          <b>About us</b>
        </h2>
        <li>About</li>
        <li>Contact us</li>
        <li>Privacy policy</li>
      </ul>

      <ul className="flex flex-col gap-4 fontWorkSans w-52 ">
        <h2 className="fontSora">
          <b>Screen Record</b>
        </h2>
        <li>Browser window</li>
        <li>Desktop</li>
        <li>Application</li>
      </ul>
    </footer>
  );
};

export default Footer;
