/* eslint-disable react/react-in-jsx-scope */
import WebWorkCard from "./WebWorkCard";

import WebContext from "../context/WebContext";
import { useContext, useRef, useEffect } from "react";
import { gsap } from "gsap";

function WebWorkLists() {
  const { showWorks, currentPage } = useContext(WebContext);
  const list = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Show Page
      gsap.from(".gsap-current", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }, list);

    return () => ctx.revert();
  }, [showWorks, currentPage]);

  return (
    <div
      ref={list}
      className="w-screen md:w-full grow flex justify-center items-center text-white pt-40 md:pt-0"
    >
      {showWorks.map((page, index) => (
        <div
          key={index}
          className={index === currentPage - 1 ? "gsap-current" : "hidden"}
        >
          <ul className="grid md:grid-cols-2 md:grid-rows-3 gap-6">
            {page.map((work) => (
              <li key={work.name}>
                <WebWorkCard work={work} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default WebWorkLists;
