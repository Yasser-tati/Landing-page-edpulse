import React, { useState } from "react";
import { Layout, Row, Col, Image } from "antd";
import "./style3.css";

function Content3Component() {
  const [activeTab, setActiveTab] = useState("conversation");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout id="sercices" className="Contenservices">
      <div className="containertab">
      <div className="tabs">
        <div
          className={`tab tab-green ${activeTab === "conversation" ? "active" : ""}`}
          onClick={() => handleTabClick("conversation")}
        >
          Axés sur la conversation
        </div>
        <div
          className={`tab tab-red ${activeTab === "level" ? "active" : ""}`}
          onClick={() => handleTabClick("level")}
        >
          Adaptés à votre niveau
        </div>
        <div
          className={`tab tab-blue ${activeTab === "pros" ? "active" : ""}`}
          onClick={() => handleTabClick("pros")}
        >
          Enseignés par des pros
        </div>
      </div>

      <div className="content">
        {activeTab === "conversation" && (
          <div className="service-card">
          <Row justify="spaced-between">
            
            <Col span={12}>
            
              <h1>Parlez Anglais en Toute Confiance avec Nos Cours Interactifs !</h1>
                <p>
                Découvrez une nouvelle façon d'apprendre l'anglais, axée sur les échanges réels et les conversations authentiques. Que vous débutiez ou souhaitiez perfectionner votre niveau, nos cours interactifs vous aideront à vous exprimer avec aisance et à développer des compétences linguistiques solides. Rejoignez notre communauté et commencez à parler anglais dès aujourd'hui !
                </p>
            </Col>
            <Col span={12} className="image1">
            <Image src="https://i.ibb.co/41mDsPX/Parlez-Anglais-en-Toute-Confiance-avec-Nos-Cours-Interactifs.jpg" height={400} width={415} />
            </Col>
           
          </Row>
          </div>
        )}

        {activeTab === "level" && (
          <div className="service-card">
          <Row justify="spaced-between">
            
            <Col span={12}>
            
              <h1>Des Cours d’Anglais Adaptés à Votre Niveau</h1>
                <p>
                Que vous soyez débutant, intermédiaire ou avancé, nos cours sont conçus pour s'adapter à vos besoins. Apprenez à votre rythme grâce à des leçons interactives, des conversations en direct et un accompagnement personnalisé. Progresser en anglais n’a jamais été aussi simple et efficace !
                </p>
            </Col>
            <Col span={12} className="image1">
            <Image src="https://i.ibb.co/YcPxVk4/Des-Cours-d-Anglais-Adapt-s-Votre-Niveau.jpg" height={400} width={415}  />
            </Col>
           
          </Row>
          </div>
        )}

        {activeTab === "pros" && (
          <div className="service-card">
          <Row justify="spaced-between">
            
            <Col span={12}>
            
              <h1>Apprenez l'Anglais avec des Experts, de Manière Interactive et Efficace</h1>
                <p>
                Nos experts en langue anglaise vous guideront à chaque étape de votre apprentissage. Profitez de méthodes efficaces et d’un enseignement personnalisé, tout en développant vos compétences linguistiques grâce à des sessions interactives et des conversations réelles.
                </p>
            </Col>
            <Col span={12} className="image1">
            <Image src="https://i.ibb.co/LPN0RbZ/th.jpg" height={400} width={415}  />
            </Col>
           
          </Row>
          </div>
        )}
      </div>
      </div>
    </Layout>
  );
}

export default Content3Component;
