/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { useRef } from "react";

function Pagination({ showWorks, setCurrentPage }) {
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
    <div className="text-white">
      <ul className="w-80vw h-16 flex justify-center">
        <li>
          <button type="button" className="mx-2" onClick={prevPage}>
            ◀︎
          </button>
        </li>
        {showWorks.map((page, index) => (
          <li key={index + 1}>
            <button
              type="button"
              className="mx-2"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}

        <li>
          <button type="button" className="mx-2" onClick={nextPage}>
            ▶︎
          </button>
        </li>
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  showWorks: PropTypes.array.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
