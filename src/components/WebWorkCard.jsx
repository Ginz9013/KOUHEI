/* eslint-disable react/react-in-jsx-scope */
import { ReactComponent as GithubIcon } from "../assets/GithubIcon.svg";
import { ReactComponent as WebsiteIcon } from "../assets/WebsiteIcon.svg";
import { ReactComponent as CloseIcon } from "../assets/CloseIcon2.svg";

import PropTypes from "prop-types";
import { useState } from "react";

function WebWorkCard({
  work: { name, imgCover, imgContent, skills, infoUrl, describe },
}) {
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
        className="w-120 h-40 border border-slate-500 rounded-md overflow-hidden flex"
        onClick={() => setShowModal(true)}
      >
        <img src={imgCover} className="w-40 h-40 shrink-0" alt="cover" />
        <div className="px-6 pt-10 text-left">
          <h2 className="text-xl mb-2">{name}</h2>
          <p className="text-sm text-gray-400">{describe}</p>
        </div>
      </button>

      {showModal && (
        <>
          {/* Modal */}
          <div
            className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-30"
            onClick={(e) => modalToggle(e)}
            id="modalBackground"
          >
            {/* Modal Content */}
            <div className="relative top-0 w-2/3 max-h-4/5 rounded-sm bg-white z-10 p-8 grid grid-cols-2 gap-6">
              {/* close Icon */}
              <button
                className="absolute top-4 right-4 bg-primary-black hover:cursor-pointer hover:rotate-90 duration-500"
                onClick={() => setShowModal(false)}
              >
                <CloseIcon width={24} />
              </button>

              {/* Img Area */}
              <div className="flex justify-center items-center">
                <img src={imgContent} alt={name} />
              </div>

              {/* Info Area */}
              <div className="text-black flex flex-col justify-between">
                {/* Info */}
                <div className="mb-12">
                  <h2 className="text-4xl text-primary-blue">{name}</h2>
                  <p className="mb-8">{describe}</p>
                  <h3 className="text-2xl text-primary-blue">Techniques</h3>
                  <ul>
                    {skills.map((skill, index) => (
                      <li key={index} className="flex items-center mb-1">
                        <div className="w-2 h-2 bg-primary-blue mr-2"></div>
                        <p className="text-lg">{skill}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <ul className="flex justify-end">
                  {infoUrl.website && (
                    <li>
                      <a
                        href={infoUrl.Website}
                        target="_blank"
                        className="w-24 h-24 bg-primary-yellow flex flex-col justify-center items-center text-white hover:cursor-pointer"
                        rel="noreferrer"
                      >
                        <WebsiteIcon width={32} className="mb-1" />
                        Website
                      </a>
                    </li>
                  )}
                  {infoUrl.github && (
                    <li>
                      <a
                        href={infoUrl.Github_Repo}
                        target="_blank"
                        className="w-24 h-24 bg-primary-blue flex flex-col justify-center items-center text-white hover:cursor-pointer"
                        rel="noreferrer"
                      >
                        <GithubIcon width={32} className="mb-1" />
                        Github
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Black Background */}
          <div className="fixed top-0 left-0  w-screen h-screen bg-primary-black opacity-70 z-20"></div>
        </>
      )}
    </div>
  );
}

WebWorkCard.propTypes = {
  work: PropTypes.object.isRequired,
};

export default WebWorkCard;
