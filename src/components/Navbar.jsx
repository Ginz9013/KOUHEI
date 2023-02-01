/* eslint-disable react/react-in-jsx-scope */
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../assets/LogoIcon.svg";
import { ReactComponent as DesignIcon } from "../assets/DesignIcon.svg";
import { ReactComponent as WebIcon } from "../assets/WebIcon.svg";
import { ReactComponent as AboutIcon } from "../assets/AboutIcon.svg";
import { ReactComponent as ContactIcon } from "../assets/ContactIcon.svg";

function Navbar() {
  const location = useLocation();

  const pathMatchroute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-full px-12 pt-20 pb-56 bg-primary-black">
      <Link to="/">
        <LogoIcon
          width={85}
          className="text-white p-1 hover:scale-105 active:scale-95 duration-200"
        />
      </Link>
      <ul className="flex flex-col justify-between h-40 text-neutral-500 font-bold">
        <li>
          <Link
            to="/DesignWorks"
            className="flex hover:scale-105 active:scale-95 duration-200"
          >
            <DesignIcon
              width={30}
              className={
                pathMatchroute("/DesignWorks") ? "mr-4 text-white" : "mr-4"
              }
            />
            <span
              className={pathMatchroute("/DesignWorks") ? "text-white" : ""}
            >
              Design Works
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/WebWorks"
            className="flex hover:scale-105 active:scale-95 duration-200"
          >
            <WebIcon
              width={34}
              className={
                pathMatchroute("/WebWorks") ? "mr-3 text-white" : "mr-3"
              }
            />
            <span className={pathMatchroute("/WebWorks") ? "text-white" : ""}>
              Web Works
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className="flex hover:scale-105 active:scale-95 duration-200"
          >
            <AboutIcon
              width={24}
              className={
                pathMatchroute("/About") ? "mr-5 ml-1 text-white" : "mr-5 ml-1"
              }
            />
            <span className={pathMatchroute("/About") ? "text-white" : ""}>
              About
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/ContactMe"
            className="flex hover:scale-105 active:scale-95 duration-200"
          >
            <ContactIcon
              width={30}
              className={
                pathMatchroute("/ContactMe") ? "mr-4 text-white" : "mr-4"
              }
            />
            <span className={pathMatchroute("/ContactMe") ? "text-white" : ""}>
              Contact Me
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
