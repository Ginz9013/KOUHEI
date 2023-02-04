/* eslint-disable react/react-in-jsx-scope */
import { ReactComponent as LogoIcon } from "../assets/LogoIcon.svg";
import { ReactComponent as DesignIcon } from "../assets/DesignIcon.svg";
import { ReactComponent as WebIcon } from "../assets/WebIcon.svg";
import { ReactComponent as AboutIcon } from "../assets/AboutIcon.svg";
import { ReactComponent as ContactIcon } from "../assets/ContactIcon.svg";
// Mobile
import { ReactComponent as BarIcon } from "../assets/BarIcon.svg";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";

import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

function Navbar() {
  const location = useLocation();
  const [showSlideNav, setShowSlideNav] = useState(false);

  const pathMatchroute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  // Mobile Slide Navbar Effect
  const slideNav = useRef(null);
  useEffect(() => {
    if (!showSlideNav) {
      return;
    }

    let ctx = gsap.context(() => {
      // Show Navbar
      gsap.from(".gsap-slideNavbar", {
        x: 200,
        duration: 0.3,
      });
      gsap.from(".gsap-slideNavBg", {
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
      });
    }, slideNav);

    return () => ctx.revert();
  }, [showSlideNav]);

  return (
    <>
      {/* Min 768px - PC & Pad */}
      <div className="hidden md:flex flex-col justify-between w-full h-full px-8 xl:px-12 pt-20 pb-56 bg-primary-black">
        <Link to="/">
          <LogoIcon
            width={85}
            className="text-white p-1 hover:scale-105 active:scale-95 duration-200"
          />
        </Link>
        <ul className="flex flex-col justify-between h-40 text-neutral-500 font-bold">
          <li className="mb-6 lg:mb-0">
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
          <li className="mb-6 lg:mb-0">
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
          <li className="mb-6 lg:mb-0">
            <Link
              to="/About"
              className="flex hover:scale-105 active:scale-95 duration-200"
            >
              <AboutIcon
                width={24}
                className={
                  pathMatchroute("/About")
                    ? "mr-5 ml-1 text-white"
                    : "mr-5 ml-1"
                }
              />
              <span className={pathMatchroute("/About") ? "text-white" : ""}>
                About
              </span>
            </Link>
          </li>
          <li className="mb-6 lg:mb-0">
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
              <span
                className={pathMatchroute("/ContactMe") ? "text-white" : ""}
              >
                Contact Me
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* // Mobile */}
      <div className="md:hidden flex justify-between items-center w-full bg-primary-black px-6 py-4">
        <Link to="/">
          <LogoIcon
            width={65}
            className="text-white p-1 hover:scale-105 active:scale-95 duration-200"
          />
        </Link>
        <button
          onClick={() => setShowSlideNav(true)}
          className="px-4 py-2 active:scale-90 duration-200"
        >
          <BarIcon width={20} className="text-white" />
        </button>
      </div>
      {/* Slide Nav */}
      {showSlideNav && (
        <div
          ref={slideNav}
          className="md:hidden absolute top-0 right-0 w-screen h-screen z-30"
        >
          {/* NavBar */}
          <div className="gsap-slideNavbar absolute right-0 h-screen p-8 bg-secondary-black flex flex-col justify-between z-10">
            <div className="flex justify-end">
              <button
                className="px-1 active:scale-90 duration-200"
                onClick={() => setShowSlideNav(false)}
              >
                <ArrowRight width={15} className="text-neutral-500" />
              </button>
            </div>
            <ul className="text-neutral-500 font-bold">
              <li className="mb-12 lg:mb-0">
                <Link
                  to="/DesignWorks"
                  className="flex active:scale-95 duration-200"
                  onClick={() => setShowSlideNav(false)}
                >
                  <DesignIcon
                    width={30}
                    className={
                      pathMatchroute("/DesignWorks")
                        ? "mr-4 text-white"
                        : "mr-4"
                    }
                  />
                  <span
                    className={
                      pathMatchroute("/DesignWorks") ? "text-white" : ""
                    }
                  >
                    Design Works
                  </span>
                </Link>
              </li>
              <li className="mb-12 lg:mb-0">
                <Link
                  to="/WebWorks"
                  className="flex hover:scale-105 active:scale-95 duration-200"
                  onClick={() => setShowSlideNav(false)}
                >
                  <WebIcon
                    width={34}
                    className={
                      pathMatchroute("/WebWorks") ? "mr-3 text-white" : "mr-3"
                    }
                  />
                  <span
                    className={pathMatchroute("/WebWorks") ? "text-white" : ""}
                  >
                    Web Works
                  </span>
                </Link>
              </li>
              <li className="mb-12 lg:mb-0">
                <Link
                  to="/About"
                  className="flex hover:scale-105 active:scale-95 duration-200"
                  onClick={() => setShowSlideNav(false)}
                >
                  <AboutIcon
                    width={24}
                    className={
                      pathMatchroute("/About")
                        ? "mr-5 ml-1 text-white"
                        : "mr-5 ml-1"
                    }
                  />
                  <span
                    className={pathMatchroute("/About") ? "text-white" : ""}
                  >
                    About
                  </span>
                </Link>
              </li>
              <li className="mb-12 lg:mb-0">
                <Link
                  to="/ContactMe"
                  className="flex hover:scale-105 active:scale-95 duration-200"
                  onClick={() => setShowSlideNav(false)}
                >
                  <ContactIcon
                    width={30}
                    className={
                      pathMatchroute("/ContactMe") ? "mr-4 text-white" : "mr-4"
                    }
                  />
                  <span
                    className={pathMatchroute("/ContactMe") ? "text-white" : ""}
                  >
                    Contact Me
                  </span>
                </Link>
              </li>
            </ul>
            <div></div>
          </div>

          {/* Dark Background */}
          <div
            className="gsap-slideNavBg w-screen h-screen bg-primary-black opacity-80"
            onClick={() => setShowSlideNav(false)}
          ></div>
        </div>
      )}
    </>
  );
}

export default Navbar;
