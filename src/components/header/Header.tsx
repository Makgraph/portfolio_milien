import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AddressBook,
  House,
  Notebook,
  User,
  X,
  List,
  Sun,
  Moon,
} from "phosphor-react"; // Assurez-vous d'importer les icônes correctement

interface NavItem {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  {
    to: "#home",
    icon: (
      <House
        size={14}
        className="text-[#2F218F] dark:text-primary-onContainerD"
        weight="regular"
      />
    ),
    label: "Home",
  },
  {
    to: "#about",
    icon: (
      <User
        size={14}
        className="text-[#2F218F] dark:text-primary-onContainerD"
        weight="regular"
      />
    ),
    label: "About",
  },
  {
    to: "#skills",
    icon: (
      <Notebook
        size={14}
        className="text-[#2F218F] dark:text-primary-onContainerD"
        weight="regular"
      />
    ),
    label: "Skills",
  },
  {
    to: "#contact",
    icon: (
      <AddressBook
        size={14}
        className="text-[#2F218F] dark:text-primary-onContainerD"
        weight="regular"
      />
    ),
    label: "Contact",
  },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu
  const [darkMode, setDarkMode] = useState<boolean>(false); // État pour gérer le mode sombre

  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (document.documentElement) {
      document.documentElement.classList.toggle("dark", !darkMode);
    }
  };

  return (
    <header className="header p-screen bg-slate-300 dark:bg-primary-containerD w-full fixed bottom-0 md:bottom-auto md:top-0 left-0 z-20">
      <nav className="relative p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex w-full justify-between">
          <Link to="/contact">
            <h5 className="sm:text-[22px] text-primary-onContainerL dark:text-primary-onContainerD flex">
              Milien
            </h5>
          </Link>

          {/* Bouton de menu pour les petits écrans */}
          <div className="md:hidden flex items-center">
            <List
              size={24}
              weight="bold"
              color="#2F218F"
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>

        {/* Menu */}
        <ul
          className={`fixed inset-0 bg-background p-6 flex flex-col items-center gap-4 text-sm font-serif text-black md:flex md:flex-row md:relative md:bg-transparent md:p-0 md:gap-8 ${
            menuOpen
              ? "flex top-[45%] shadow-inner rounded-t-full rounded-b-none"
              : "hidden"
          }`}
        >
          {navItems.map(({ to, icon, label }) => (
            <li key={to} className="flex">
              <NavLink
                to={to}
                onClick={(e) => handleScrollToSection(e, to)}
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col justify-center items-center dark:text-primary-onContainerD text-onSurfaceL hover:text-primary-light dark:hover:text-gray-400 focus:text-primary-default focus:hover:text-gray-500"
                    : "flex flex-col justify-center items-center text-onSurfaceL hover:text-primary-light dark:hover:text-gray-400 focus:hover:text-gray-600"
                }
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Bouton de fermeture pour les petits écrans */}
        <X
          size={24}
          weight="bold"
          color="#2F218F"
          className={`absolute top-4 right-4 cursor-pointer md:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Bouton pour basculer entre le mode clair et sombre */}
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center border ml-8 p-2 bg-gray-300 rounded-full shadow-md dark:bg-gray-700"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Sun size={24} color="#66F7F2" />
          ) : (
            <Moon size={24} color="#5C5891" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;

// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AddressBook, House, Notebook, User, X, List } from "phosphor-react"; // Assurez-vous d'importer les icônes correctement

// interface NavItem {
//   to: string;
//   icon: React.ReactNode;
//   label: string;
// }

// const navItems: NavItem[] = [
//   {
//     to: "#home",
//     icon: <House size={14} weight="regular" color="#2F218F" />,
//     label: "Home",
//   },
//   {
//     to: "#about",
//     icon: <User size={14} weight="regular" color="#2F218F" />,
//     label: "About",
//   },
//   {
//     to: "#skills",
//     icon: <Notebook size={14} weight="regular" color="#2F218F" />,
//     label: "Skills",
//   },
//   {
//     to: "#contact",
//     icon: <AddressBook size={14} weight="regular" color="#2F218F" />,
//     label: "Contact",
//   },
// ];

// const Header: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu

//   const handleScrollToSection = (
//     event: React.MouseEvent<HTMLAnchorElement>,
//     sectionId: string
//   ) => {
//     event.preventDefault();
//     const section = document.querySelector(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     setMenuOpen(false);
//   };

//   return (
//     <header className="header p-screen bg-gray-200 w-full fixed bottom-0 md:bottom-auto md:top-0 left-0 z-10 ">
//       <nav className="relative p-4 flex flex-col md:flex-row justify-between items-center">
//         <div className="flex w-full justify-between">
//           <Link to="/contact">
//             <h5 className="sm:text-[22px] text-primary-onContainerL flex">
//               Milien
//             </h5>
//           </Link>

//           {/* Bouton de menu pour les petits écrans */}
//           <div className="md:hidden flex items-center">
//             <List
//               size={24}
//               weight="bold"
//               color="#2F218F"
//               className="cursor-pointer"
//               onClick={() => setMenuOpen(true)}
//             />
//           </div>
//         </div>

//         {/* Menu */}
//         <ul
//           className={`fixed inset-0 bg-background p-6 flex flex-col items-center gap-4 text-sm font-serif text-black md:flex md:flex-row md:relative md:bg-transparent md:p-0 md:gap-8 ${
//             menuOpen
//               ? "flex top-[45%] shadow-inner rounded-t-full rounded-b-none"
//               : "hidden"
//           }`}
//         >
//           {navItems.map(({ to, icon, label }) => (
//             <li key={to} className="flex">
//               <NavLink
//                 to={to}
//                 onClick={(e) => handleScrollToSection(e, to)}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "flex flex-col justify-center items-center text-onSurfaceL hover:text-primary-light focus:text-primary-default"
//                     : "flex flex-col justify-center items-center text-onSurfaceL hover:text-primary-light "
//                 }
//               >
//                 {icon}
//                 {label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Bouton de fermeture pour les petits écrans */}
//         <X
//           size={24}
//           weight="bold"
//           color="#2F218F"
//           className={`absolute top-4 right-4 cursor-pointer md:hidden ${
//             menuOpen ? "block" : "hidden"
//           }`}
//           onClick={() => setMenuOpen(false)}
//         />
//       </nav>
//     </header>
//   );
// };

// export default Header;
