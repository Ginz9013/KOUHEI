/* eslint-disable react/react-in-jsx-scope */
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
import { ReactComponent as CloseIcon } from "../assets/CloseIcon.svg";

import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

function DesignWorkCard({ work: { name, imgCover, imgContent } }) {
  const [showModal, setShowModal] = useState(false);
  const designCard = useRef(null);

  const modalToggle = (e) => {
    if (e.target.id === "modalBackground") {
      setShowModal(false);
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setShowModal(false);
    }
  });

  // Modal Effect
  useEffect(() => {
    if (!showModal) {
      return;
    }

    let ctx = gsap.context(() => {
      // Modal open effect
      gsap.from(".gsap-modalWrap", {
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });
      gsap.from(".gsap-modalBg", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.from(".gsap-modal", {
        delay: 0.3,
        opacity: 0,
        height: 0,
        duration: 0.4,
        ease: "circ.inOut",
      });

      // Title effect
      gsap.from(".gsap-title", {
        x: 20,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power2.inOut",
      });

      // Close icon effect
      gsap.from(".gsap-close", {
        opacity: 0,
        duration: 1.5,
        ease: "power4.in",
      });

      // Scroll down tag
      gsap.from(".gsap-scroll", {
        opacity: 0,
        duration: 0.5,
        delay: 1,
      });
      gsap.to(".gsap-scroll", {
        y: -15,
        yoyo: true,
        duration: 1,
        repeat: -1,
      });
    }, designCard);

    return () => {
      ctx.revert();
    };
  }, [showModal]);

  return (
    <div ref={designCard}>
      {/* Small Card */}
      <button
        type="button"
        className="relative group w-36 h-36 xl:w-56 xl:h-56 rounded-sm overflow-hidden hover:scale-105 duration-300"
        onClick={() => setShowModal(true)}
      >
        {/* <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 rounded-full w-4 h-4 opacity-0 bg-black group-hover:h-96 group-hover:w-96 group-hover:opacity-80 duration-500"></div> */}
        <img src={imgCover} alt="cover" className="w-full h-full" />
      </button>
      <p>{name}</p>

      {showModal && (
        <>
          {/* Modal */}
          <div
            className="gsap-modalWrap fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center"
            id="modalBackground"
            onClick={(e) => modalToggle(e)}
          >
            {/* Modal Content Area */}
            <div className="relative flex flex-col top-0 w-3/4 md:w-2/3 lg:w-1/2 max-h-4/5 bg-white">
              {/* Modal Content Title */}
              <div className="absolute top-0 left-0 translate-y-n40 w-full flex justify-between items-center font-bold text-lg">
                <h2 className="gsap-title">{name}</h2>
                {/* Close Icon */}
                <button
                  type="button"
                  className="gsap-close p-1 hover:rotate-90 hover:scale-110 duration-500"
                  onClick={() => setShowModal(false)}
                >
                  <CloseIcon width={12} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="gsap-modal flex flex-col overflow-auto top-0 w-full h-full p-4 bg-gray-100 z-10 rounded-md">
                {imgContent.map((img, index) => (
                  <img src={img} key={index} className="my-2"></img>
                ))}
              </div>

              {/* Scroll down tags */}
              <div className="gsap-scroll absolute right-0 bottom-8 translate-x-16 flex rotate-90">
                <p className="mr-2">scroll down</p>
                <ArrowRight width={8} />
              </div>
            </div>
          </div>

          {/* Black Background */}
          <div className="gsap-modalBg fixed top-0 left-0  w-screen h-screen bg-primary-black opacity-80 z-40"></div>
        </>
      )}
    </div>
  );
}

DesignWorkCard.propTypes = {
  work: PropTypes.object.isRequired,
};

export default DesignWorkCard;
