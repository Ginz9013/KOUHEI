/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../assets/LogoIcon.svg";
import { ReactComponent as DesignIcon } from "../assets/DesignIcon.svg";
import { ReactComponent as WebIcon } from "../assets/WebIcon.svg";
import { ReactComponent as AboutIcon } from "../assets/AboutIcon.svg";
import { ReactComponent as ContactIcon } from "../assets/ContactIcon.svg";

function Navbar() {
  return (
    <div className="flex flex-col justify-between w-full h-full px-12 pt-20 pb-56 bg-primary-black">
      <Link to="/">
        <LogoIcon width={80} />
      </Link>
      <ul className="flex flex-col justify-between h-40 text-white">
        <li>
          <Link to="/DesignWorks" className="flex ">
            <DesignIcon width={30} className="mr-4" />
            Design Works
          </Link>
        </li>
        <li>
          <Link to="/WebWorks" className="flex">
            <WebIcon width={34} className="mr-3" />
            Web Works
          </Link>
        </li>
        <li>
          <Link to="/About" className="flex">
            <AboutIcon width={24} className="mr-5 ml-1" />
            About
          </Link>
        </li>
        <li>
          <Link to="/ContactMe" className="flex">
            <ContactIcon width={30} className="mr-4" />
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
