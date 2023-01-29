/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import DesignContext from "../context/DesignContext";

import DesignWorkCard from "./DesignWorkCard";

function DesignWorkLists() {
  const { showWorks, currentPage } = useContext(DesignContext);

  return (
    <div className="relative flex justify-center pt-16 pb-8 text-white">
      {showWorks.map((page, index) => (
        <div
          className={index === currentPage - 1 ? "block" : "hidden"}
          key={index}
        >
          <ul className="grid grid-cols-4 grid-rows-3 gap-4">
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
