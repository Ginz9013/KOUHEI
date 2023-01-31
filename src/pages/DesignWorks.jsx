/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from "react";
import { collection, query, where, getDocs } from "@firebase/firestore";
import { db } from "../firebase.config";

import DesignContext from "../context/DesignContext";

import DesignNav from "../components/DesignNav";
import DesignWorkLists from "../components/DesignWorkLists";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

function DesignWorks() {
  const [loading, setLoading] = useState(true);

  const {
    setWorks,
    showWorks,
    setShowWorks,
    setCurrentPage,
    worksSlicePages,
    modalActive,
  } = useContext(DesignContext);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const worksRef = collection(db, "projects");

        const q = query(worksRef, where("type", "==", "design"));

        const data = await getDocs(q);

        let worksArr = [];

        data.docs.forEach((item) => {
          worksArr.push(item.data());
        });

        setWorks(worksArr);

        const workPageList = worksSlicePages(worksArr);

        setShowWorks(workPageList);
      } catch (error) {
        console.log("錯誤", error);
      }
    };

    fetchWorks();
    setTimeout(() => setLoading(false), 700);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-full w-full flex flex-col justify-between bg-secondary-black pb-8">
          <DesignNav />
          <DesignWorkLists />
          <Pagination
            showWorks={showWorks}
            setCurrentPage={setCurrentPage}
            modalActive={modalActive}
          />
        </div>
      )}
    </>
  );
}

export default DesignWorks;
