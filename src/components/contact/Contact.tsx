import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { IonIcon } from "@ionic/react";
import { send, arrowForward, logoWhatsapp } from "ionicons/icons";

const Contact: React.FC = () => {
  // Typage de la référence du formulaire avec useRef
  const form = useRef<HTMLFormElement>(null);

  // Fonction pour envoyer l'email avec typage de l'événement
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_gle1qq9",
          "template_w2rsuvx",
          form.current,
          "cLzDWM33YnEVGLOfg"
        )
        .then(
          () => {
            // Optionnel : Gestion du succès
            console.log("Email sent successfully");
          },
          (error) => {
            // Optionnel : Gestion de l'erreur
            console.error("Failed to send email", error);
          }
        );

      // Réinitialisation du formulaire après l'envoi
      e.currentTarget.reset();
    }
  };

  return (
    <section
      className="p-screen bg-secondary-containerL dark:bg-secondary-containerD pt-10 sm:pt-20 flex flex-col gap-4 sm:gap-16 contact section"
      id="contact"
    >
      <div>
        <h3 className="dark:text-secondary-onContainerD font-semibold sm:text-[32px] flex items-center justify-center section__title">
          Get in touch
        </h3>
        <span className="dark:text-secondary-onContainerD flex text-sm sm:text-base items-center justify-center section__subtitle section__subtitle">
          Contact Me
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[max-content_max-content]  justify-center gap-x-24 pb-12 contact__container contact">
        <div className="pt-8 sm:pt-0 contact__content">
          <h4 className="text-center dark:text-secondary-onContainerD sm:text-2xl mb-6 contact__title">
            Talk to me
          </h4>

          <div className="grid gap-y-4 grid-cols-1 sm:grid-cols-[300px] contact__info">
            <div className="bg-slate-300 dark:bg-background border p-4 rounded-[0.75rem] text-center items-center contact__card">
              <IonIcon icon={send} className="h-5 w-5 mr-2 text-[#5C5891]" />

              <h5 className="sm:text-[22px] dark:text-onPrimary-dark contact__card-title">
                Email
              </h5>
              <span className="text-[14px] dark:text-onPrimary-dark sm:text-base contact__card-data">
                milienmakenson3@gmail.com
              </span>

              <a
                href="mailto:milienmakenson3@gmail.com"
                className="inline-flex text-[14px] dark:text-onPrimary-dark sm:text-base items-center justify-center gap-x-1 transform transition-transform duration-300 group-hover:translate-x-1 contact__button"
              >
                Write me
                <IonIcon
                  icon={arrowForward}
                  className="h-4 w-4 mr-2 relative top-[2px]  text-[#5C5891]"
                />
              </a>
            </div>

            <div className="bg-slate-300 dark:bg-background border p-4 rounded-[0.75rem] text-center items-center contact__card">
              <IonIcon
                icon={logoWhatsapp}
                className="h-5 w-5 mr-2 text-[#5C5891]"
              />

              <h5 className=" sm:text-[22px] dark:text-onPrimary-dark contact__card-title">
                Whatsapp
              </h5>
              <span className="text-[14px] dark:text-onPrimary-dark sm:text-base contact__card-data">
                +509 3605 - 1491{" "}
              </span>

              <a
                href="https://api.whatsapp.com/send?phone=+50936051491&text=Hello, more information!"
                className="text-[14px] dark:text-onPrimary-dark sm:text-base contact__button"
              >
                Write me{" "}
                <IonIcon
                  icon={arrowForward}
                  className="h-4 w-4 mr-2 relative top-1 text-[#5C5891]"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-0 contact__content">
          <h4 className="text-center dark:text-secondary-onContainerD sm:text-2xl mb-6 contact__title">
            Write me your project
          </h4>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="my-0 mx-auto sm:w-[360px] contact__form"
          >
            <div className="relative mb-8 h-16 contact__form-div">
              <label className="absolute -top-3 left-5 dark:text-onPrimary-dark text-sm py-1 px-2 bg-background  rounded z-10  contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="absolute top-0 left-0 w-full h-full border-[2px] bg-none text-black outline-none rounded-[12px] p-6 z-0 contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="relative mb-8 h-16 contact__form-div">
              <label className="absolute -top-3 left-5 dark:text-onPrimary-dark text-sm py-1 px-2 bg-background  rounded z-10  contact__form-tag">
                Mail
              </label>
              <input
                type="email"
                name="email"
                className="absolute top-0 left-0 w-full h-full border-[2px] bg-none text-black outline-none rounded-[12px] p-6 z-0 contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="relative mb-8 h-16 contact__form-div contact__form-area">
              <div className="h-[11rem] resize-none">
                <label className="absolute -top-3 left-5 dark:text-onPrimary-dark text-sm text-black py-1 px-2 bg-background  rounded z-10  contact__form-tag">
                  Project
                </label>
                <textarea
                  name="project"
                  cols={30}
                  rows={10}
                  className="absolute top-0 left-0 w-full border-[2px] sm:text-base text-sm  text-black bg-none outline-none rounded-[12px] p-6 z-0 h-[11rem] resize-none contact__form-input"
                  placeholder="Write your project"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center bg-secondary-onContainerL text-onPrimary-light mt-28 py-5 px-8 rounded-[1rem] font-medium hover:bg-secondary-onContainerL/80 relative button botton--flex"
            >
              Send Message
              <svg
                className="ml-[4px] button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
