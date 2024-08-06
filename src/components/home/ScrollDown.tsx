import React from "react";
import { ArrowDown } from "phosphor-react";

const ScrollDown: React.FC = () => {
  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    const section = document.querySelector("#about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#about"
      onClick={handleScrollToSection}
      className="sm:ml-[7.5rem] mt-10 flex items-center home__scroll"
    >
      <div className="home__scroll-button butotn--flex">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="animate-scroll"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "black",
              strokeWidth: "20px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "black",
              strokeWidth: "20px",
            }}
          ></path>
        </svg>
      </div>
      <span className="ml-[2px] mr-1 home__scroll-name">Scroll Down</span>
      {/* <i className="uil uil-arrow-down home__scoll-arrow"></i> */}
      <ArrowDown size={14} weight="regular" color="#2F218F" className="" />
    </a>
  );
};
export default ScrollDown;
