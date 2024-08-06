import React from "react";
import { IonIcon } from "@ionic/react";
import { trophy, briefcase, call } from "ionicons/icons";

const Info: React.FC = () => {
  return (
    // <div className="sm:flex gap-2 mb-8 about__info ">
    <div className="sm:grid-cols-3 sm:grid p-2 sm:p-0 gap-4 sm:mb-8 about__info ">
      <div className="bg-slate-300 dark:bg-background  rounded-lg text-center my-4 sm:my-0 py-4 px-5 border-2 about__box">
        <IonIcon icon={trophy} className="h-5 w-5 mr-2 text-[#5C5891]" />

        <h5 className="text-onSurfaceL dark:text-onPrimary-dark  about__title">
          Experience
        </h5>
        <span className="text-onSurfaceL dark:text-onPrimary-dark font-thin text-xs about__subtitle">
          3 Years Working
        </span>
      </div>

      <div className="bg-slate-300 dark:bg-background rounded-lg text-center my-4 sm:my-0 py-4 px-5 border-2 about__box">
        <IonIcon icon={briefcase} className="h-5 w-5 mr-2 text-[#5C5891]" />

        <h5 className="text-onSurfaceL dark:text-onPrimary-dark about__title">
          Completed
        </h5>
        <span className="text-onSurfaceL dark:text-onPrimary-dark font-thin text-xs about__subtitle">
          3+ Projects
        </span>
      </div>

      <div className="bg-slate-300 dark:bg-background rounded-lg text-center my-4 sm:my-0 py-4 px-5 border-2 about__box">
        <IonIcon icon={call} className="h-5 w-5 mr-2 text-[#5C5891]" />

        <h5 className="about__title">Support</h5>
        <span className="text-onSurfaceL dark:text-onPrimary-dark font-thin text-xs about__subtitle">
          Online 24/7
        </span>
      </div>
    </div>
  );
};

export default Info;
