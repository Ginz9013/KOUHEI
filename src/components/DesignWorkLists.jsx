/* eslint-disable react/react-in-jsx-scope */
import { useContext, useRef, useEffect } from "react";
import DesignContext from "../context/DesignContext";
import { gsap } from "gsap";

import DesignWorkCard from "./DesignWorkCard";
import {} from "react";

function DesignWorkLists() {
  const { showWorks, currentPage } = useContext(DesignContext);
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

    return () => {
      ctx.revert();
    };
  }, [showWorks, currentPage]);

  return (
    <div
      ref={list}
      className="w-screen md:w-full flex justify-center text-white  pt-28 md:pt-0 my-16 md:my-8"
    >
      {showWorks.map((page, index) => (
        <div
          className={index === currentPage - 1 ? "gsap-current" : "hidden"}
          key={index}
        >
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-4 lg:grid-rows-3 gap-1 xl:gap-4">
            {page.map((work) => (
              <li key={work.name}>
                <DesignWorkCard work={work} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DesignWorkLists;
