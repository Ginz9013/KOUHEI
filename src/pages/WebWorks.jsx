/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from "react";
import { collection, query, where, getDocs } from "@firebase/firestore";
import { db } from "../firebase.config";

import WebContext from "../context/WebContext";

import WebNav from "../components/WebNav";
import WebWorkLists from "../components/WebWorkLists";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

function WebWorks() {
  const [loading, setLoading] = useState(true);

  const { setWorks, showWorks, setShowWorks, setCurrentPage, worksSlicePages } =
    useContext(WebContext);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        // fetch data from firebase
        const worksRef = collection(db, "projects");

        const q = query(worksRef, where("type", "==", "web"));

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
        <div className="h-full w-full flex flex-col justify-between bg-secondary-black">
          <WebNav />
          <WebWorkLists />
          <Pagination showWorks={showWorks} setCurrentPage={setCurrentPage} />
        </div>
      )}
    </>
  );
}

export default WebWorks;
