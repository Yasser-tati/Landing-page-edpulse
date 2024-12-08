import { Layout } from 'antd';
import "./style1.css";



function Content1Component() {
  return (
    <Layout id='why-us' className='whyus'>
      <div className="about1">
        <h2>Pourquoi Edpulse?</h2>
        <div className="about-cards1">
          <div className="card1">
            <h3>Cours captivants et immersifs</h3>
            <p>Maîtrisez l'anglais avec des leçons engageantes conçues pour s'adapter à vos besoins et à votre rythme d'apprentissage.</p>
          </div>
          <div className="card1">
            <h3>Experts linguistiques qualifiés</h3>
            <p>Apprenez auprès de formateurs natifs et certifiés, spécialisés dans l'enseignement de l'anglais.</p>
          </div>
          <div className="card1">
            <h3>Technologie intelligente et personnalisée</h3>
            <p>Bénéficiez d'outils alimentés par l'IA pour suivre vos progrès et optimiser vos compétences linguistiques en temps réel.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Content1Component;
