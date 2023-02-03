/* eslint-disable react/react-in-jsx-scope */

import WebContext from "../context/WebContext";
import { useContext, useState } from "react";

function WebNav() {
  const { works, worksSlicePages, setShowWorks } = useContext(WebContext);
  const [tag, setTag] = useState("all");

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
          {/* TAG - All */}
          <button
            className={
              tag === "all"
                ? "py-2 px-6 hover:cursor-pointer relative before:absolute before:bg-secondary-black before:bottom-0 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:rounded-t"
                : "py-2 px-6 hover:cursor-pointer relative before:absolute before:bg-black before:bottom-1 before:left-1/2 before:h-1 before:w-full  before:-translate-x-1/2 before:scale-[0] before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
            }
            onClick={() => {
              filterTag("all");
              setTag("all");
            }}
          >
            <span className={tag === "all" ? "relative text-primary-blue" : ""}>
              All
            </span>
          </button>

          {/* TAG - Project */}
          <button
            className={
              tag === "project"
                ? "py-2 px-6 hover:cursor-pointer relative before:absolute before:bg-secondary-black before:bottom-0 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:rounded-t"
                : "py-2 px-6 hover:cursor-pointer relative before:absolute before:bg-black before:bottom-1 before:left-1/2 before:h-1 before:w-full  before:-translate-x-1/2 before:scale-[0] before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
            }
            onClick={() => {
              filterTag("project");
              setTag("project");
            }}
          >
            <span
              className={tag === "project" ? "relative text-primary-blue" : ""}
            >
              Project
            </span>
          </button>

          {/* TAG - Practice */}
          <button
            className={
              tag === "practice"
                ? "py-2 px-6 hover:cursor-pointer relative before:absolute before:bg-secondary-black before:bottom-0 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:rounded-t"
                : "py-2 px-6 hover:cursor-pointer relative before:absolute before:bg-black before:bottom-1 before:left-1/2 before:h-1 before:w-full  before:-translate-x-1/2 before:scale-[0] before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
            }
            onClick={() => {
              filterTag("practice");
              setTag("practice");
            }}
          >
            <span
              className={tag === "practice" ? "relative text-primary-blue" : ""}
            >
              Practice
            </span>
          </button>

          {/* TAG - UI / UX */}
          <button
            className={
              tag === "ui"
                ? "py-2 px-6 hover:cursor-pointer relative before:absolute before:bg-secondary-black before:bottom-0 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:rounded-t"
                : "py-2 px-6 hover:cursor-pointer relative before:absolute before:bg-black before:bottom-1 before:left-1/2 before:h-1 before:w-full  before:-translate-x-1/2 before:scale-[0] before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
            }
            onClick={() => {
              filterTag("ui");
              setTag("ui");
            }}
          >
            <span className={tag === "ui" ? "relative text-primary-blue" : ""}>
              UI / UX
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebNav;
