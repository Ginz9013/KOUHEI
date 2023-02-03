/* eslint-disable react/react-in-jsx-scope */
import { ReactComponent as GithubIcon } from "../assets/GithubIcon.svg";
import { ReactComponent as WebsiteIcon } from "../assets/WebsiteIcon.svg";
import { ReactComponent as CloseIcon } from "../assets/CloseIcon2.svg";

import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

function WebWorkCard({
  work: { name, imgCover, imgContent, skills, infoUrl, describe },
}) {
  const [showModal, setShowModal] = useState(false);
  const webCard = useRef(null);

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

  useEffect(() => {
    if (!showModal) {
      return;
    }

    let ctx = gsap.context(() => {
      // Modal open effect
      gsap.from(".gsap-modalBg", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.from(".gsap-modal", {
        delay: 0.1,
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
        ease: "back.inOut(1.7)",
      });

      let lt = gsap.timeline();

      // Title Effect
      lt.from(".gsap-title", {
        delay: 0.3,
        opacity: 0,
        duration: 0.3,
      });

      // Listing Effect
      skills.forEach((skill, index) => {
        lt.from(
          `#gsap-dot${index}`,
          {
            opacity: 0,
            ease: "back.inOut(1.7)",
            duration: 0.2,
          },
          "-=0.2"
        ).from(`#gsap-list${index}`, {
          opacity: 0,
          x: -20,
          ease: "power2.out",
          duration: 0.2,
        });
      });
    }, webCard);

    return () => ctx.revert();
  }, [showModal]);

  return (
    <div ref={webCard}>
      {/* Small Card */}
      <button
        type="button"
        className="w-80 h-21 xl:w-96 xl:h-30 2xl:w-120 2xl:h-40 border border-slate-500 rounded-md overflow-hidden flex hover:scale-105 duration-300"
        onClick={() => setShowModal(true)}
      >
        <img src={imgCover} className="w-40 h-40 shrink-0" alt="cover" />
        <div className="px-6 pt-4 xl:pt-10 text-left">
          <h2 className="text-xl mb-2">{name}</h2>
          <p className="text-sm text-gray-400">{describe}</p>
        </div>
      </button>

      {showModal && (
        <>
          {/* Modal */}
          <div
            className=" fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-30"
            onClick={(e) => modalToggle(e)}
            id="modalBackground"
          >
            {/* Modal Content */}
            <div className="gsap-modal relative top-0 max-w-3xl max-h-4/5 rounded-md bg-white z-10 p-8 grid grid-cols-2 gap-6">
              {/* close Icon */}
              <button
                className="gsap-close absolute top-4 right-4 p-1 hover:cursor-pointer hover:rotate-90 duration-500"
                onClick={() => setShowModal(false)}
              >
                <CloseIcon width={24} />
              </button>

              {/* Img Area */}
              <div className="flex justify-center items-center overflow-hidden">
                <img src={imgContent} alt={name} />
              </div>

              {/* Info Area */}
              <div className="text-black flex flex-col justify-between">
                {/* Info */}
                <div className="mb-12">
                  <h2 className="gsap-title text-4xl text-primary-blue">
                    {name}
                  </h2>
                  <p className="mb-8">{describe}</p>
                  <h3 className="text-2xl text-primary-blue">Techniques</h3>
                  <ul>
                    {skills.map((skill, index) => (
                      <li key={index} className="flex items-center mb-1">
                        <div
                          id={`gsap-dot${index}`}
                          className="w-2 h-2 bg-primary-blue mr-2"
                        ></div>
                        <p id={`gsap-list${index}`} className="text-lg">
                          {skill}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <ul className="flex justify-end">
                  {infoUrl.website && (
                    <li className="group [transform:translateZ(0)] w-24 px-4 py-3 mx-1 rounded-md overflow-hidden bg-primary-yellow relative before:absolute before:bg-black before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[8] hover:before:opacity-20 before:transition before:ease-in-out before:duration-500 active:scale-95 duration-200">
                      <a
                        href={infoUrl.website}
                        target="_blank"
                        rel="noreferrer"
                        className="relative z-0 text-white text-center group-hover:text-gray-200 transition ease-in-out duration-500"
                      >
                        <WebsiteIcon width={32} className="mb-1 mx-auto" />
                        <span className="block mx-auto">Website</span>
                      </a>
                    </li>
                  )}
                  {infoUrl.github && (
                    <li className="group [transform:translateZ(0)] w-24 px-4 py-3 mx-1 rounded-md overflow-hidden bg-primary-blue relative before:absolute before:bg-black before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[8] hover:before:opacity-20 before:transition before:ease-in-out before:duration-500 active:scale-95 duration-200">
                      <a
                        href={infoUrl.github}
                        target="_blank"
                        className="relative z-0 text-white text-center group-hover:text-gray-200 transition ease-in-out duration-500"
                        rel="noreferrer"
                      >
                        <GithubIcon width={32} className="mb-1 mx-auto" />

                        <span className="block mx-auto">Github</span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Black Background */}
          <div className="gsap-modalBg fixed top-0 left-0  w-screen h-screen bg-primary-black opacity-70 z-20"></div>
        </>
      )}
    </div>
  );
}

WebWorkCard.propTypes = {
  work: PropTypes.object.isRequired,
};

export default WebWorkCard;
