/* eslint-disable react/react-in-jsx-scope */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import { useEffect, useRef } from "react";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function Home() {
  const home = useRef(null);
  const slogan = "Graphic Design & Front End Website Creator. ";
  const windowWidth = window.innerWidth;

  // Setting Mobile Height
  const setHeight = () => {
    const currentHeight = window.innerHeight;
    home.current.style.height = `${currentHeight}px`;
    console.log(`home height: ${currentHeight}`);
  };
  useEffect(setHeight, []);

  // GSAP Effect
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();

      tl.from("#title", {
        y: 20,
        duration: 1.5,
        opacity: 0,
        ease: "Power2.out",
        delay: 0.5,
      })
        .to("#cursor", {
          opacity: 0.6,
          yoyo: true,
          repeat: -1,
          duration: 0.7,
        })
        .to("#slogan", {
          text: slogan,
          duration: 4,
          delay: 0.7,
        })
        .to("#scroll", {
          opacity: 1,
          duration: 1.5,
          ease: "Power2.easeInOut",
        });

      // Scroll down tag
      gsap.to("#scroll", {
        y: 20,
        yoyo: true,
        duration: 1,
        repeat: -1,
      });
    }, home);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div
        ref={home}
        className="absolute md:left-n20vw w-screen flex flex-col justify-center items-center text-white"
      >
        <div>
          <h1 id="title">
            <Logo width={windowWidth < 768 ? 300 : 400} />
          </h1>
          <br />
          <div className="w-40 h-20 wrap">
            <p>
              <span id="slogan" className="tracking-wider opacity-60"></span>
              <span id="cursor" className="opacity-0 font-bold">
                _
              </span>
            </p>
          </div>
        </div>

        <div
          id="scroll"
          className="absolute right-0 bottom-20 flex rotate-90 opacity-0"
        >
          <p className="mr-2">scroll down</p>
          <ArrowRight width={8} />
        </div>
      </div>
      <div className="w-screen h-screen absolute bottom-full bg-primary-yellow"></div>
    </>
  );
}

export default Home;
