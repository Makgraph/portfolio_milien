import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import photoMak from "../../assets/photoMak.jpg";
// import "../../index.css";

const Home: React.FC = () => {
  return (
    <section
      className="p-screen pt-8 sm:pt-20 bg-secondary-containerL dark:bg-secondary-containerD"
      id="home"
    >
      {/* <div className="gap-y-28 container grid"> */}
      <div className="flex flex-col  sm:pt-[5.5rem]">
        {/* <div className="grid grid-cols-customHomeSocialS sm:grid-cols-customHomeSocial pt-[5.5rem] gap-x-5 sm:gap-x-8 items-center"> */}
        <div className="flex items-center justify-between">
          <div className="flex sm:pl-4 justify-center items-center sm:h-1/5">
            <Social />
          </div>

          <div className="hidden justify-center items-center sm:flex sm:w-2/5">
            <Data />
          </div>

          <div className="flex justify-center items-center sm:w-2/5">
            <img
              className=" border-8 border-primary-light/50 bg-no-repeat bg-center bg-cover w-[200px] sm:w-[300px] order-1 justify-self-center shadow-custom animate-profile"
              src={photoMak}
              alt="MakensonPhoto"
            />
          </div>
        </div>
        <div className="flex sm:hidden">
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
