/* eslint-disable react/react-in-jsx-scope */
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
import { ReactComponent as CloseIcon } from "../assets/CloseIcon.svg";
import PropTypes from "prop-types";
import { useState } from "react";

function DesignWorkCard({ work: { name, imgCover, imgContent } }) {
  const [showModal, setShowModal] = useState(false);

  const modalToggle = (e) => {
    if (e.target.id === "modalBackground") {
      setShowModal(false);
    }
  };

  return (
    <div>
      {/* Small Card */}
      <button
        type="button"
        className="w-56 h-56 bg-gray-300"
        onClick={() => setShowModal(true)}
      >
        <img src={imgCover} alt="cover" className="w-full h-full" />
      </button>
      <p>{name}</p>

      {showModal && (
        <>
          {/* Modal */}
          <div
            className="fixed top-0 left-0 w-screen h-screen z-30 flex justify-center items-center"
            id="modalBackground"
            onClick={(e) => modalToggle(e)}
          >
            {/* Modal Content Area */}
            <div className="relative flex flex-col top-0 w-1/2 max-h-4/5 bg-white">
              {/* Modal Content Title */}
              <div className="absolute top-0 left-0 translate-y-n40 w-full flex justify-between items-center font-bold text-lg">
                <h2>{name}</h2>
                <button
                  type="button"
                  className="p-1 hover:rotate-90 hover:scale-110 duration-500"
                  onClick={() => setShowModal(false)}
                >
                  <CloseIcon width={12} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex flex-col overflow-auto top-0 w-full h-full p-4 bg-white z-10">
                {imgContent.map((img, index) => (
                  <img src={img} key={index} className="my-2"></img>
                ))}
              </div>

              {/* Scroll down tags */}
              <div className="absolute right-0 bottom-0 translate-x-16 translate-y-n40 flex rotate-90">
                <p className="mr-2">scroll down</p>
                <ArrowRight width={8} />
              </div>
            </div>
          </div>

          {/* Black Background */}
          <div className="fixed top-0 left-0  w-screen h-screen bg-primary-black opacity-80 z-20"></div>
        </>
      )}
    </div>
  );
}

DesignWorkCard.propTypes = {
  work: PropTypes.object.isRequired,
};

export default DesignWorkCard;
