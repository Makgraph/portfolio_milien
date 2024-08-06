import React from "react";
import photoMak from "../../assets/photoMak.jpg";
import CV from "../../assets/CVMakenson.pdf";
import Info from "../about/Info";

const About: React.FC = () => {
  return (
    <section
      className="bg-secondary-containerL p-screen pt-10 sm:pt-20 flex flex-col gap-4 sm:gap-16 about section dark:bg-secondary-containerD "
      id="about"
    >
      {/* <h2 className="section__title">About Me</h2> */}
      <div>
        <h3 className="font-semibold sm:text-[32px] text-secondary-onContainerL dark:text-secondary-onContainerD flex items-center justify-center">
          About Me
        </h3>
        <span className="flex text-sm sm:text-base text-secondary-onContainerL dark:text-secondary-onContainerD items-center justify-center section__subtitle">
          My introduction
        </span>
      </div>

      {/* <div className="about__container container grid"> */}
      <div className="sm:flex gap-[2.5rem]">
        {/* <img src={AboutImg} alt="" className="about__img" /> */}
        <div className="flex justify-center sm:w-1/2 ">
          <img
            src={photoMak}
            alt="MakensonPhoto"
            className="w-auto h-auto sm:w-[350px]"
          />
        </div>

        <div className="sm:w-1/2">
          <div className="text-center about__data">
            <Info />

            <p className="py-0 sm:px-20 mb-4 sm:mb-8 text-secondary-onContainerL dark:text-secondary-onContainerD about__description">
              Full-stack developer, I create web pages with JavaScript and UI /
              UX user interface, I have about 3 years of experience and I'm
              always working for friends, some clients and for myself. Many
              freinds and clients are happy with the projects carried out.
            </p>

            <a
              download=""
              href={CV}
              className="inline-flex items-center bg-secondary-onContainerL text-onPrimary-light py-5 px-8 rounded-[1rem] font-medium hover:bg-secondary-onContainerL/80"
            >
              Download CV
              <svg
                className="ml-[4px] button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
