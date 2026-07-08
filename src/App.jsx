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
