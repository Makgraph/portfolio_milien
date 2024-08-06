import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-400 bg-secondary-containerL dark:bg-secondary-containerD footer">
      <div className="pt-8 px-0 pb-24 footer__container container">
        <h1 className="text-center mb-8 footer__title">
          <ul className="flex justify-center gap-x-6 mb-5 footer__list">
            <li>
              <a
                href="#about"
                className="text-xl sm:text-3xl text-secondary-onContainerL dark:text-secondary-onContainerD hover:text-zinc-600 footer__link"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                className="text-xl sm:text-3xl text-secondary-onContainerL dark:text-secondary-onContainerD hover:text-zinc-600 footer__link"
              >
                Project
              </a>
            </li>
          </ul>

          <span className="text-sm sm:text-lg text-secondary-onContainerL dark:text-secondary-onContainerD footer__copy">
            &#169; Makgraphcoder. All rigths reserved
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
