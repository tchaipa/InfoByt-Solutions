import React, { useEffect } from "react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Process from "./Process";
import Projects from "./Projects";
import Services from "./Services";
import Technologies from "./Technologies";
import Testimonials from "./Testimonials";

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app ">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Process />
      <Technologies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
