/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "360px",
      sm: "600px",
      md: "905px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",

        primary: {
          default: "#2F218F",
          light: "#5C5891",
          containerL: "#E4DFFF",
          onContainerL: "#18124A",
          dark: "#C5C0FF",
          containerD: "#444078",
          onContainerD: "#E4DFFF",
        },
        onPrimary: {
          light: "#FFFFFF",
          dark: "#2E2960",
        },
        secondary: {
          default: "#918EAA",
          light: "#66F7F2",
          containerL: "#E4DFF9",
          onContainerL: "#1B192C",
          dark: "#00A896",
          containerD: "#474559",
          onContainerD: "#E4DFF9",
        },
        tertiary: {
          default: "#B7819B",
          light: "#7B5266",
          dark: "#EBB8D0",
        },

        background: "#F5F5F5",
        surfaceL: "#FCF8FF",
        onSurfaceL: "#1C1B20",
        surfaceD: "#131318",
        onSurfaceD: "#E5E1E9",
        neutral: "#929094",
        errorL: "#BA1A1A",
        errorD: "#FFB4AB",
        text: {
          primary: "#000000",
          secondary: "#616161",
        },
      },
      gridTemplateColumns: {
        customHomeSocial: "116px repeat(2, 1fr)",
      },
      gridTemplateColumns: {
        customHomeSocialS: "100px repeat(2, 1fr)",
      },
      // Définir une ombre interne personnalisée
      boxShadow: {
        // custom: "inset 0 0 0 9px rgba(47, 33, 143, 0.3)",
        custom: "inset 0 0 0 9px rgba(90, 162, 162, 0.3)",
      },

      // Définir une animation personnalisée pour image home

      // Définir une animation personnalisée pour boutton scroll
      keyframes: {
        profile__animate: {
          "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
        },
        scroll: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(3.75rem)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        // Définir une animation personnalisée pour image home
        scroll: "scroll 2s ease infinite",
        // Définir une animation personnalisée pour boutton scroll
        profile: "profile__animate 8s ease-in-out infinite 1s",
      },
      // Ajouter des tailles personnalisées
      spacing: {
        300: "300px",
      },
    },
  },
  plugins: [],
};
