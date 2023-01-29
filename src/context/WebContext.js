/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from "react";

const WebContext = createContext();

// eslint-disable-next-line react/prop-types
export const WebProvider = ({ children }) => {
  const [works, setWorks] = useState([]);
  const [showWorks, setShowWorks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const worksSlicePages = (works) => {
    const workList = [];

    const pages = Math.ceil(works.length / 6);

    for (let i = 1; i <= pages; i++) {
      workList.push([]);
      works.forEach((work, index) => {
        if (index / 6 >= i - 1 && index / 6 < i) {
          workList[i - 1].push(work);
        }
      });
    }

    return workList;
  };

  return (
    <WebContext.Provider
      value={{
        works,
        setWorks,
        showWorks,
        setShowWorks,
        currentPage,
        setCurrentPage,
        worksSlicePages,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export default WebContext;
