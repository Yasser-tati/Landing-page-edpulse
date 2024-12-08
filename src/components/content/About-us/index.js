import { Layout } from "antd";
import "./style2.css";

function Content2Component() {
  return (
    <Layout id="about" className="ContentAbout" bodyBg="#fff">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p className="highlight">
          Edpulse est une société de capital-investissement qui investit, construit et fait évoluer
          entreprises éducatives.
          </p>
          <p>
          Edpulse est plus qu'une société de capital-investissement ; nous sommes les architectes de
            histoires de réussite éducative. Avec pour mission d'investir, de construire et
            entreprises éducatives à grande échelle, nous nous trouvons à l’intersection de
            innovation, impact et expertise financière.
          </p>
          <p>
          En tant que conseillers financiers certifiés et investisseurs en actions, nous apportons un
          une richesse d'expérience à la table, naviguant dans un paysage dynamique
          de l'éducation avec un engagement envers la réussite.
          </p>
        </div>
        <div className="about-video">
          <iframe
            src="https://player.vimeo.com/video/1037047790?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Edpulse Introduction Video"
            className="about-video-frame"
          ></iframe>

        </div>
      </div>
    </Layout>
  );
}

export default Content2Component;
