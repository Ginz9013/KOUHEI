/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { useRef } from "react";

function Pagination({ showWorks, currentPage, setCurrentPage, pageColor }) {
  const clicked = useRef(false);

  const nextPage = () => {
    setCurrentPage((prev) => {
      if (prev === showWorks.length) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      if (prev === 1) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  document.addEventListener("keydown", (e) => {
    if (clicked.current === true) {
      return;
    }

    if (e.key === "Right" || e.key === "ArrowRight") {
      nextPage();
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      prevPage();
    }

    clicked.current = true;

    setTimeout(() => {
      clicked.current = false;
    }, 0);
  });

  return (
    <ul className="font-bold flex justify-center items-center text-white">
      <li>
        <button
          type="button"
          className="px-2 mx-1 hover:text-zinc-400 active:scale-95"
          onClick={prevPage}
        >
          ◀︎
        </button>
      </li>
      {showWorks.map((page, index) => (
        <li key={index + 1}>
          <button
            type="button"
            className={
              index + 1 === currentPage
                ? `px-2 mx-1 text-primary-${pageColor}`
                : "px-2 mx-1 hover:text-zinc-400 active:scale-95"
            }
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        </li>
      ))}

      <li>
        <button
          type="button"
          className="px-2 mx-1 hover:text-zinc-400 active:scale-95"
          onClick={nextPage}
        >
          ▶︎
        </button>
      </li>
    </ul>
  );
}

Pagination.propTypes = {
  showWorks: PropTypes.array.isRequired,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func.isRequired,
  pageColor: PropTypes.string,
};

export default Pagination;
