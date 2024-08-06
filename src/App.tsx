import React from "react";
import Header from "./components/header/Header";
import "./index.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import ScrollToTop from "./components/scrollToTop";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./components/scrollup/scrollup";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <ScrollToTopButton />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
      {/* <ScrollUp /> */}
    </>
  );
};

export default App;
