import React from "react";
import logo from "./Fichier-1-1.webp";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa6";
import "./style5.css";

function Appfooter() {
  return (
    <footer className="herofooter">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="https://edpulsegroup.com/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Edpulse Logo" className="footer-logo-img" />
          </a>
          <p>
          Edpulse est une société de capital-investissement qui investit, crée et développe des entreprises éducatives.
          </p>
        </div>
        <div className="footer-sectors">
          <h4>Nos secteurs</h4>
          <ul>
            <li>Éducation précoce</li>
            <li>K-12</li>
            <li>Enseignement supérieur</li>
            <li>Formations en entreprise</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Liens rapides</h4>
          <ul>
            <li><a href="/who-we-are">Qui nous sommes</a></li>
            <li><a href="/contact-us">Contactez-nous</a></li>
            <li><a href="/careers">Carrières</a></li>
            <li><a href="/terms-of-use">Conditions d'utilisation</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <h4>Entrer en contact</h4>
          <p>Email: <a href="mailto:contact@edpulsegroup.com">contact@edpulsegroup.com</a></p>
          <p>Heures : Lun-Ven 9 h —17 h</p>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/company/edpulsegroup/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={24} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved.Yasser Tazi</p>
      </div>
    </footer>
  );
}

export default Appfooter;
