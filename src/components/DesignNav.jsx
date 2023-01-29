/* eslint-disable react/react-in-jsx-scope */

import DesignContext from "../context/DesignContext";
import { useContext } from "react";

function DesignNav() {
  const { works, worksSlicePages, setShowWorks } = useContext(DesignContext);

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
    <div className="h-20 flex justify-start items-end px-12 bg-primary-yellow text-primary-black">
      <div>
        <button
          className="m-4 hover:cursor-pointer"
          onClick={() => filterTag("all")}
        >
          All
        </button>
        <button
          className="m-4 hover:cursor-pointer"
          onClick={() => filterTag("brand")}
        >
          Brand
        </button>
        <button
          className="m-4 hover:cursor-pointer"
          onClick={() => filterTag("package")}
        >
          Package
        </button>
        <button
          className="m-4 hover:cursor-pointer"
          onClick={() => filterTag("others")}
        >
          Others
        </button>
      </div>
    </div>
  );
}

export default DesignNav;
