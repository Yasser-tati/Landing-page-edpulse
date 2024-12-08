import { Layout } from "antd";
import logo from "./Fichier-1-1.webp";
import "./style.css";

const { Header } = Layout;

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function AppHeader() {
  return (
    <Header className="hero">
      {/* Logo */}
      <a href="https://edpulsegroup.com/" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Company Logo" className="logo" />
      </a>

      {/* Centered Navigation Menu */}
      <nav className="nav-menu">
      <button onClick={() => scrollToSection("accueil")} className="nav-link">Accueil</button>
      <button onClick={() => scrollToSection("about")} className="nav-link">À propos</button>
      <button onClick={() => scrollToSection("why-us")} className="nav-link">Pourquoi Edpulse?</button>
      <button onClick={() => scrollToSection("sercices")} className="nav-link">Services</button>
      </nav>


      {/* Contact Us Button */}
      <button onClick={() => scrollToSection("contact")} className="Contactus">S'inscrire</button>
    </Header>
  );
}

export default AppHeader;
