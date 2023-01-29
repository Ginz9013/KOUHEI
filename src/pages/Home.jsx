/* eslint-disable react/react-in-jsx-scope */
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";

function Home() {
  const scroll = useRef();

  useEffect(() => {
    gsap.to(scroll.current, {
      keyframes: [{ y: 20 }, { y: 0 }],
      duration: 1.5,
      repeat: -1,
    });
  }, []);

  return (
    <>
      <div className="absolute left-n20vw w-screen h-screen flex flex-col justify-center items-center text-white">
        <div>
          <h1>
            <Logo width={400} />
          </h1>
          <br />
          <p className="text-left animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%]">
            Graphic Design &
            <br />
            Front End Website
            <br />
            Creator
          </p>
        </div>

        <div className="absolute right-0 bottom-20 flex rotate-90" ref={scroll}>
          <p className="mr-2">scroll down</p>
          <ArrowRight width={8} />
        </div>
      </div>
      <div className="w-screen h-screen absolute bottom-full bg-primary-yellow"></div>
    </>
  );
}

export default Home;
