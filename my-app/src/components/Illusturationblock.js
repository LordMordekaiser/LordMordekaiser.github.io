import React, { useState, useEffect, useRef } from "react";

const Illusturationblock = (props) => {
  const [fadeIn, setFadeIn] = useState(false);
  const illusturationblockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFadeIn(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(illusturationblockRef.current);

    return () => {
      if (illusturationblockRef.current) {
        observer.unobserve(illusturationblockRef.current);
      }
    };
  }, []);

  return (
    <div ref={illusturationblockRef}>
      <div className="md:flex grid place-content-center mt-8">
        <div className="ml-[5%] md:ml-0 md:place-content-center md:w-1/4">
          <div
            className={`md:text-5xl text-5xl font-Inter font-bold tracking-tight ${
              fadeIn
                ? "opacity-100 transition-opacity duration-[2000ms] ease-in-out"
                : "opacity-0 transition-opacity duration-[2000ms] ease-in-out"
            }`}
          >
            {props.text}
          </div>
          <div
            className={`font-ibm md:text-2xl text-xl font-extralight md:mt-6 mt-6 md:ml-11 ml-[10%] ${
              fadeIn
                ? "opacity-100 transition-opacity duration-[2000ms] ease-in-out"
                : "opacity-0 transition-opacity duration-[2000ms] ease-in-out"
            }`}
          >
            {props.text2}
          </div>
        </div>
        <div
          className={`md:w-2/5 md:ml-36 ml-[15%] mr-[10%] md:mr-0 font-ibm ${
            fadeIn
              ? "opacity-100 transition-opacity duration-[2000ms] ease-in-out"
              : "opacity-0 transition-opacity duration-[2000ms] ease-in-out"
          }`}
        >
          <div
            className={`mt-4 text-2xl font-normal ${
              fadeIn
                ? "opacity-100 transition-opacity duration-[2000ms] ease-in-out"
                : "opacity-0 transition-opacity duration-[2000ms] ease-in-out"
            }`}
          >
            {props.text3}
          </div>
          <div
            className={`flex ${
              fadeIn
                ? "opacity-100 transition-opacity duration-[2000ms] ease-in-out"
                : "opacity-0 transition-opacity duration-[2000ms] ease-in-out"
            }`}
          >
            <a
              href="https://www.pixiv.net/en/users/67332929"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="font-bold md:mt-4 mt-8 md:text-base text-2xl cursor-pointer hover:text-gray-500 transition duration-500">
                View All
              </div>
            </a>
            <img
              className="md:mt-5 mt-9 ml-2 opacity-100"
              src="/arrow.svg"
              alt="Arrow Icon"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex mt-16 justify-center">
          <img
            className="size-1/4 mr-[2%] opacity-100"
            src={props.src}
            alt="Resim"
          />
          <img
            className="size-1/4 mr-[2%] opacity-100"
            src={props.src1}
            alt="Resim"
          />
          <img
            className="size-1/4 mr-[2%] opacity-100"
            src={props.src2}
            alt="Resim"
          />
        </div>
        <div className="flex mt-[2%] justify-center">
          <img
            className="size-1/4 mr-[2%] opacity-100"
            src={props.src3}
            alt="Resim"
          />
          <img
            className="size-1/4 mr-[2%] opacity-100"
            src={props.src4}
            alt="Resim"
          />
          <img
            className="size-1/4 mr-[2%] opacity-100"
            src={props.src5}
            alt="Resim"
          />
        </div>
        <div className="items-center mt-8 w-[90%] border-b border-neutral-200 ml-[5%] mb-[8%] "></div>
      </div>
    </div>
  );
};

export default Illusturationblock;
