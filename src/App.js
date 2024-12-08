import React from "react";
import "./App.css";
import { Layout } from "antd"; // Import Layout from Ant Design

import AppHeader from "./components/header";
import Appcontent from "./components/content/Accueil";
import Appcontent2 from "./components/content/About-us";
import Appcontent1 from "./components/content/why-us";
import Appcontent3 from "./components/content/services";
import Appcontent4 from "./components/content/contact-us";
import Appfooter from "./components/footer";

function App() {
  return (
    <Layout style={{backgroundColor: 'white'}} >
      <AppHeader />
      <Appcontent />
      <Appcontent2 />
      <Appcontent1 />
      <Appcontent3 />
      <Appcontent4 />
      <Appfooter />
    </Layout>
  );
}

export default App;
