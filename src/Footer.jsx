import "./Footer.css";
import logo from "./assets/logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="#hero" class="nav-logo">
              <img className="logo" src={logo} />
            </a>
            <p>
              Building Zimbabwe's digital future — one system at a time. Based
              in Harare, working across the region.
            </p>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <a href="#services">Web Applications</a>
            <a href="#services">Mobile Apps</a>
            <a href="#services">Business Systems</a>
            <a href="#services">E-Commerce</a>
            <a href="#services">IT Consulting</a>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#projects">Projects</a>
            <a href="#process">Our Process</a>
            <a href="#testimonials">Clients</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="footer-col">
            <h4>Connect</h4>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter / X</a>
            <a href="#">WhatsApp</a>
            <a href="#">GitHub</a>
            <a href="#">Behance</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            © 2024 InfoByte Solutions (Pvt) Ltd · Harare, Zimbabwe · All rights
            reserved
          </p>
          <p className="footer-p">Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
