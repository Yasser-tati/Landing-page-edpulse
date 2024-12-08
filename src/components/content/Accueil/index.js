import { Layout } from 'antd';
import logo from "./img.png";
import "./styles.css";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function ContentComponent() {
  return (
    <Layout id='accueil' className='Content' >
      <div className="content-container">
        <img src={logo} alt="Company Logo" className="img" />
        <section className="about">
          <div className="about-cards">
            <div className="card">
              <h3>Maîtrisez l'anglais pour un avenir meilleur</h3>
              <p>Transformez votre façon de communiquer grâce à nos cours d'anglais innovants. Que ce soit pour vos études, votre carrière ou vos voyages, nous vous donnons les outils nécessaires pour réussir et vous épanouir dans un monde globalisé.</p>
            </div>
            <div className="button-container">
            <button onClick={() => scrollToSection("contact")} class="button">Commencer maintenant</button>
            <button onClick={() => scrollToSection("sercices")} class="button">En savoir plus</button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ContentComponent;