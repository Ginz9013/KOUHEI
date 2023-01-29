/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";

function Pagination({ showWorks, setCurrentPage }) {
  return (
    <div className="text-white">
      <ul className="w-80vw h-16 flex justify-center">
        <li>
          <button
            type="button"
            className="mx-2"
            onClick={() =>
              setCurrentPage((prev) => {
                if (prev === 1) {
                  return prev;
                } else {
                  return prev - 1;
                }
              })
            }
          >
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
          <button
            type="button"
            className="mx-2"
            onClick={() => {
              setCurrentPage((prev) => {
                if (prev === showWorks.length) {
                  return prev;
                } else {
                  return prev + 1;
                }
              });
            }}
          >
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
