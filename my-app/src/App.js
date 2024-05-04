import React, { useState, useEffect, useRef } from "react";
import Nav from "./components/Nav";
import Bodyblock from "./components/Bodyblock";
import Illusturationblock from "./components/Illusturationblock.js";
import Posterblock from "./components/Posterblock.js";
import Footer from "./components/Footer.js";

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFadeIn(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-w-[450px] min-h-[1580px]">
      <Nav />
      <div className="md:flex md:place-content-center">
        <img
          className="md:block hidden mt-[10%] w-1/4"
          src="/xxx.svg"
          alt="logo"
        />
        <div
          ref={targetRef}
          className={`md:w-2/5 w-10/12 md:my-[10%] my-[20%] md:ml-44 ml-[10%] ${
            fadeIn
              ? "opacity-100 transition-opacity duration-[5000ms] ease-in-out"
              : "opacity-0"
          }`}
        >
          <div className="text-7xl font-Inter font-bold tracking-tight">
            // Hello
          </div>
          <div className="font-ibm text-2xl font-normal mt-7 ">
            I am a designer, illustrator, and software engineer with a passion
            for creating visually captivating and functional solutions. With a
            keen eye for aesthetics and a technical background. I specialize in
            translating ideas into innovative designs and bringing them to life
            through code.
          </div>
        </div>
      </div>
      <div class="items-center pt-28 w-[90%] border-b border-neutral-200 ml-[5%] mb-[8%]"></div>
      <div className="snap-y snap-mandatory">
        <div class="snap-start snap-normal">
          <Bodyblock
            text="//Depremzede"
            text2="BEST GRADUATION PROJECT"
            text3="Creating an online earthquake relief system which serve the purpose of connecting people affected by earthquakes with the necessary resources and support to aid their recovery. "
            text4="View Project"
            src="./depremzede.png"
            link="https://github.com/mustafamengutay/depremzede"
          />
        </div>
        <div class="snap-start snap-normal">
          <Bodyblock
            text="//Compass"
            text2="TRAVEL APPLICATION"
            text3="Discover global wonders with Compass: concise descriptions of tourist attractions in diverse countries, simplifying your journey planning."
            text4="View Project"
            src="./compass.png"
            email="krkc.emircan@gmail.com"
          />
        </div>
        <div class="snap-start snap-normal">
          <Bodyblock
            text="//Pallas"
            text2="PDF LIBRARY"
            text3="Explore a vast collection of literary treasures and embark on a reading journey without any cost. Dive into a world of knowledge with Pallas, where books are limitless and accessible to all."
            text4="View Project"
            src="./pallas.png"
            link="https://github.com/LordMordekaiser/Pallas"
          />
        </div>
        <div class="snap-start snap-normal">
          <Illusturationblock
            text="//Illustrations"
            text2="PIXIV"
            text3="I started making illustrations as a hobby during the corona period."
            src="./illusturation1.png"
            src1="./illusturation2.png"
            src2="./illusturation3.png"
            src3="./illusturation4.png"
            src4="./illusturation5.png"
            src5="./illusturation6.png"
          />
        </div>
        <div class="snap-start snap-normal">
          <Posterblock
            text="//Posters"
            text2="FOR WORKPLACES"
            text3="The poster designs I created for businesses."
            src="./poster1.png"
            src1="./poster2.png"
            src2="./poster3.png"
          />
        </div>
        <div class="snap-start snap-normal">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
