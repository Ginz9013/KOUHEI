/* eslint-disable react/react-in-jsx-scope */

import WebContext from "../context/WebContext";
import { useContext } from "react";

function WebNav() {
  const { works, worksSlicePages, setShowWorks } = useContext(WebContext);

  const filterTag = (tag) => {
    if (tag === "all") {
      const workPageList = worksSlicePages(works);
      setShowWorks(workPageList);
    } else {
      const tagWorks = works.filter((work) => work.tags.includes(tag));
      const workPageList = worksSlicePages(tagWorks);
      setShowWorks(workPageList);
    }
  };

  return (
    <div>
      <div className="h-20 flex justify-start items-end px-12 bg-primary-blue text-primary-black">
        <div>
          <button
            className="m-4 hover:cursor-pointer"
            onClick={() => filterTag("all")}
          >
            All
          </button>
          <button
            className="m-4 hover:cursor-pointer"
            onClick={() => filterTag("frontend")}
          >
            Fron End
          </button>
          <button
            className="m-4 hover:cursor-pointer"
            onClick={() => filterTag("ui")}
          >
            UI / UX
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebNav;
