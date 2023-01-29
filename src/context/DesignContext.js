/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from "react";

const DesignContext = createContext();

// eslint-disable-next-line react/prop-types
export const DesignProvider = ({ children }) => {
  const [works, setWorks] = useState([]);
  const [showWorks, setShowWorks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const worksSlicePages = (works) => {
    const workList = [];

    const pages = Math.ceil(works.length / 12);

    for (let i = 1; i <= pages; i++) {
      workList.push([]);
      works.forEach((work, index) => {
        if (index / 12 >= i - 1 && index / 12 < i) {
          workList[i - 1].push(work);
        }
      });
    }

    return workList;
  };

  return (
    <DesignContext.Provider
      value={{
        works,
        setWorks,
        worksSlicePages,
        showWorks,
        setShowWorks,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </DesignContext.Provider>
  );
};

export default DesignContext;
