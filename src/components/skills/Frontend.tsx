import React from "react";
import { IonIcon } from "@ionic/react";
import { checkmarkCircle } from "ionicons/icons";

const Frontend: React.FC = () => {
  return (
    <div className="bg-slate-300 dark:bg-background rounded-lg text-center my-4 sm:my-0 p-6 sm:py-4 sm:px-5 border-2 gap-x-12 skills__content">
      <h4 className="font-medium flex justify-center items-center mb-6 skills__title">
        Frontend developer
      </h4>

      <div className="flex justify-center gap-5 sm:gap-10 skills__box">
        <div className="grid items-start gap-y-4 skills__group">
          <div className="flex gap-x-2 skills__data">
            <IonIcon
              icon={checkmarkCircle}
              className="h-5 w-5 mr-2 text-[#5C5891]"
            />

            <div>
              <h5 className="text-sm sm:text-base dark:text-onPrimary-dark skills__name">
                HTML
              </h5>
              <span className="font-thin text-sm dark:text-onPrimary-dark skills__level">
                Advanced
              </span>
            </div>
          </div>

          <div className="flex gap-x-2 skills__data">
            <IonIcon
              icon={checkmarkCircle}
              className="h-5 w-5 mr-2 text-[#5C5891]"
            />

            <div>
              <h5 className="dark:text-onPrimary-dark skills__name">CSS</h5>
              <span className="font-thin text-sm dark:text-onPrimary-dark skills__level">
                Advanced
              </span>
            </div>
          </div>

          <div className="flex gap-x-2 skills__data">
            <IonIcon
              icon={checkmarkCircle}
              className="h-5 w-5 mr-2 text-[#5C5891]"
            />

            <div>
              <h5 className="dark:text-onPrimary-dark skills__name">
                JavaScript
              </h5>
              <span className="font-thin text-sm dark:text-onPrimary-dark skills__level">
                Advanced
              </span>
            </div>
          </div>
        </div>

        <div className="grid items-start gap-y-4 skills__group">
          <div className="flex gap-x-2 skills__data">
            <IonIcon
              icon={checkmarkCircle}
              className="h-5 w-5 mr-2 text-[#5C5891]"
            />

            <div>
              <h5 className="dark:text-onPrimary-dark skills__name">
                TailwindCss
              </h5>
              <span className="font-thin text-sm dark:text-onPrimary-dark skills__level">
                Advanced
              </span>
            </div>
          </div>

          <div className="flex gap-x-2 skills__data">
            <IonIcon
              icon={checkmarkCircle}
              className="h-5 w-5 mr-2 text-[#5C5891]"
            />

            <div>
              <h5 className="dark:text-onPrimary-dark skills__name">GIT</h5>
              <span className="font-thin text-sm dark:text-onPrimary-dark skills__level">
                Intermediate
              </span>
            </div>
          </div>

          <div className="flex gap-x-2 skills__data">
            <IonIcon
              icon={checkmarkCircle}
              className="h-5 w-5 mr-2 text-[#5C5891]"
            />

            <div>
              <h5 className="dark:text-onPrimary-dark skills__name">React</h5>
              <span className="font-thin text-sm dark:text-onPrimary-dark skills__level">
                Advanced
              </span>
            </div>
          </div>

          <div className="flex gap-x-2 skills__data">
            <IonIcon
              icon={checkmarkCircle}
              className="h-5 w-5 mr-2 text-[#5C5891]"
            />

            <div>
              <h5 className="dark:text-onPrimary-dark skills__name">
                React-native
              </h5>
              <span className="font-thin text-sm dark:text-onPrimary-dark skills__level">
                Basic
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
