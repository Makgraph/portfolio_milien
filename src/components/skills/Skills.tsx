import React from "react";
import Frontend from "../skills/Frontend";
import Backend from "../skills/Backend";

const Skills: React.FC = () => {
  return (
    <section
      className="p-screen bg-secondary-containerL dark:bg-secondary-containerD pt-10 sm:pt-20 flex flex-col gap-4 sm:gap-16 skills section"
      id="skills"
    >
      <div>
        <h3 className="font-semibold dark:text-secondary-onContainerD sm:text-[32px] flex items-center justify-center">
          Skills
        </h3>
        <span className="flex text-sm dark:text-secondary-onContainerD sm:text-base items-center justify-center section__subtitle">
          My technical level
        </span>
      </div>
      {/* <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span> */}

      <div className="sm:grid sm:grid-cols-2  gap-12 justify-center container">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
