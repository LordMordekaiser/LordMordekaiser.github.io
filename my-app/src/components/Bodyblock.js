import React, { useState, useEffect, useRef } from "react";

const Bodyblock = (props) => {
  const [fadeIn, setFadeIn] = useState(false);
  const bodyblockRef = useRef(null);

  const handleClick = () => {
    if (props.email) {
      window.location.href = `mailto:${props.email}`;
    } else if (props.link) {
      window.location.href = props.link;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFadeIn(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(bodyblockRef.current);

    return () => {
      if (bodyblockRef.current) {
        observer.unobserve(bodyblockRef.current);
      }
    };
  }, []);

  return (
    <div ref={bodyblockRef}>
      <div
        className={`md:flex grid place-content-center mt-8 ${
          fadeIn
            ? "opacity-100"
            : "opacity-0 transition-opacity duration-1000 ease-in-out"
        }`}
        id="fade-in-element"
        style={{ transitionDuration: "2000ms" }}
      >
        <div className="ml-[5%] md:ml-0">
          <div className="md:text-5xl text-5xl font-Inter font-bold tracking-tight">
            {props.text}
          </div>
          <div className="font-ibm md:text-base md:text-2xl text-xl font-extralight md:mt-6 mt-6 md:ml-11 ml-[10%]">
            {props.text2}
          </div>
        </div>
        <div className="md:w-2/5 md:ml-36 ml-[15%] mr-[10%] md:mr-0 font-ibm">
          <div className="md:text-2xl text-2xl mt-4 font-normal">
            {props.text3}
          </div>
          <div className="flex">
            <div
              className="font-bold md:mt-4 mt-8 md:text-base text-2xl cursor-pointer hover:text-gray-500 transition duration-500"
              onClick={handleClick}
            >
              {props.text4}
            </div>
            <img
              className="md:mt-5 mt-9 ml-2"
              src="/arrow.svg"
              alt="Arrow Icon"
            />
          </div>
        </div>
      </div>
      <div className="justify-center">
        <img
          className="md:ml-[20%] ml-[10%] md:size-[57%] size-[80%] mt-16 md:mb-0 mb-[25%]"
          src={props.src}
          alt="Resim"
        />
        <div className="items-center mt-8 mb-[8%] w-[90%] border-b border-neutral-200 ml-[5%]"></div>
      </div>
    </div>
  );
};

export default Bodyblock;
