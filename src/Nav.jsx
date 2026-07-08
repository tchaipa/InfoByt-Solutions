import "./Nav.css";
import logo from "./assets/logo.png";
import { useEffect, useRef } from "react";

function Nav() {
  const themeBtnRef = useRef(null);
  const themeIconRef = useRef(null);

  useEffect(() => {
    const btn = themeBtnRef.current;
    const icon = themeIconRef.current;
    if (btn && icon) {
      const onClick = () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        icon.textContent = next === "dark" ? "🌙" : "☀️";
      };
      btn.addEventListener("click", onClick);
      return () => btn.removeEventListener("click", onClick);
    }
    return undefined;
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
    const onScroll = () => {
      const scrollY = window.scrollY + 100;
      sections.forEach((section) => {
        if (
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          navLinks.forEach((link) => {
            link.style.color =
              link.getAttribute("href") === "#" + section.id
                ? "var(--text-primary)"
                : "";
          });
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      <a href="#hero" className="nav-logo">
        <img className="logo" src={logo} alt="Infobyt logo" />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#process">Process</a>
        </li>
        <li>
          <a href="#testimonials">Clients</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-right">
        <button
          className="theme-toggle"
          id="themeToggle"
          ref={themeBtnRef}
          title="Toggle dark/light mode"
          aria-label="Toggle theme"
        >
          <div className="toggle-thumb" id="toggleThumb">
            <span id="themeIcon" ref={themeIconRef}>
              🌙
            </span>
          </div>
        </button>
        <a href="#contact" className="nav-cta">
          Get a Quote
        </a>
      </div>
    </nav>
  );
}

export default Nav;
