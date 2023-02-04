/* eslint-disable react/react-in-jsx-scope */

import DesignContext from "../context/DesignContext";
import { useContext, useState } from "react";

function DesignNav() {
  const { works, worksSlicePages, setShowWorks, setCurrentPage } =
    useContext(DesignContext);
  const [tag, setTag] = useState("all");

  const filterTag = (tag) => {
    if (tag === "all") {
      const workPageList = worksSlicePages(works);
      setShowWorks(workPageList);
      setCurrentPage(1);
    } else {
      const tagWorks = works.filter((work) => work.tags.includes(tag));
      const workPageList = worksSlicePages(tagWorks);
      setShowWorks(workPageList);
      setCurrentPage(1);
    }
  };

  return (
    <div className="fixed top-[74px] md:static w-screen md:w-full h-14 md:h-20 flex justify-start items-center md:items-end px-12 bg-primary-yellow text-primary-black z-20">
      <div>
        <button
          className={
            tag === "all"
              ? "py-1 md:py-2 px-4 md:px-6 hover:cursor-pointer relative before:absolute before:bg-secondary-black before:bottom-0 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:rounded md:before:rounded-b-none"
              : "py-1 md:py-2 px-4 md:px-6 hover:cursor-pointer relative before:absolute before:bg-black before:bottom-1 before:left-1/2 before:h-1 before:w-full  before:-translate-x-1/2 before:scale-[0] before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
          }
          onClick={() => {
            filterTag("all");
            setTag("all");
          }}
        >
          <span className={tag === "all" ? "relative text-primary-yellow" : ""}>
            All
          </span>
        </button>
        <button
          className={
            tag === "brand"
              ? "py-1 md:py-2 px-4 md:px-6 hover:cursor-pointer relative before:absolute before:bg-secondary-black before:bottom-0 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:rounded md:before:rounded-b-none"
              : "py-1 md:py-2 px-4 md:px-6 hover:cursor-pointer relative before:absolute before:bg-black before:bottom-1 before:left-1/2 before:h-1 before:w-full  before:-translate-x-1/2 before:scale-[0] before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
          }
          onClick={() => {
            filterTag("brand");
            setTag("brand");
          }}
        >
          <span
            className={tag === "brand" ? "relative text-primary-yellow" : ""}
          >
            Brand
          </span>
        </button>
        <button
          className={
            tag === "package"
              ? "py-1 md:py-2 px-4 md:px-6 hover:cursor-pointer relative before:absolute before:bg-secondary-black before:bottom-0 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:rounded md:before:rounded-b-none"
              : "py-1 md:py-2 px-4 md:px-6 hover:cursor-pointer relative before:absolute before:bg-black before:bottom-1 before:left-1/2 before:h-1 before:w-full  before:-translate-x-1/2 before:scale-[0] before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
          }
          onClick={() => {
            filterTag("package");
            setTag("package");
          }}
        >
          <span
            className={tag === "package" ? "relative text-primary-yellow" : ""}
          >
            Package
          </span>
        </button>
        <button
          className={
            tag === "others"
              ? "py-1 md:py-2 px-4 md:px-6 hover:cursor-pointer relative before:absolute before:bg-secondary-black before:bottom-0 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:rounded md:before:rounded-b-none"
              : "py-1 md:py-2 px-4 md:px-6 hover:cursor-pointer relative before:absolute before:bg-black before:bottom-1 before:left-1/2 before:h-1 before:w-full  before:-translate-x-1/2 before:scale-[0] before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
          }
          onClick={() => {
            filterTag("others");
            setTag("others");
          }}
        >
          <span
            className={tag === "others" ? "relative text-primary-yellow" : ""}
          >
            Others
          </span>
        </button>
      </div>
    </div>
  );
}

export default DesignNav;
