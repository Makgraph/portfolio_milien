import React from "react";
import { IonIcon } from "@ionic/react";
import { logoGithub, logoLinkedin } from "ionicons/icons";

const Social: React.FC = () => {
  return (
    <div className="grid grid-cols-[max-content] gap-y-4">
      <a
        href=" www.linkedin.com/in/makenson-milien-29193624b"
        className="home__social-icon"
        target="_blank"
      >
        <IonIcon
          icon={logoLinkedin}
          className="h-5 w-5 mr-2 text-primary-default dark:text-primary-onContainerD"
        />
      </a>

      <a href="https://github.com/Makgraph" rel="noreferrer" target="_blank">
        <IonIcon
          icon={logoGithub}
          className="h-5 w-5 mr-2 text-primary-default dark:text-primary-onContainerD"
        />
      </a>
    </div>
  );
};

export default Social;
