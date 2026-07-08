import "./Nav.css";
import logo from "./assets/logo.png";

function Nav() {
  //   const btn = document.getElementById("themeToggle");
  //   const icon = document.getElementById("themeIcon");
  //   btn.addEventListener("click", () => {
  //     const current = document.documentElement.getAttribute("data-theme");
  //     const next = current === "dark" ? "light" : "dark";
  //     document.documentElement.setAttribute("data-theme", next);
  //     icon.textContent = next === "dark" ? "🌙" : "☀️";
  //   });
  return (
    <nav>
      <a href="#hero" class="nav-logo">
        <img className="logo" src={logo} />
      </a>
      <ul class="nav-links">
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
      <div class="nav-right">
        <button
          class="theme-toggle"
          id="themeToggle"
          title="Toggle dark/light mode"
          aria-label="Toggle theme"
        >
          <div class="toggle-thumb" id="toggleThumb">
            <span id="themeIcon">🌙</span>
          </div>
        </button>
        <a href="#contact" class="nav-cta">
          Get a Quote
        </a>
      </div>
    </nav>
  );
}

export default Nav;
