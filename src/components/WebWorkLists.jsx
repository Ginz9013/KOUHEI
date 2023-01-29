/* eslint-disable react/react-in-jsx-scope */
import WebWorkCard from "./WebWorkCard";

import WebContext from "../context/WebContext";
import { useContext } from "react";

function WebWorkLists() {
  const { showWorks, currentPage } = useContext(WebContext);

  return (
    <div className="grow flex justify-center items-center text-white">
      {showWorks.map((page, index) => (
        <div
          key={index}
          className={index === currentPage - 1 ? "block" : "hidden"}
        >
          <ul className="grid grid-cols-2 grid-rows-3 gap-6">
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
