import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/letícia.moreirabarreto.jpg";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME." />
      <p className="font12">
      My name is Letícia Barreto, I was born in Manaus - AM but I lived most of my life in São José dos Campos - SP.<br></br>
      I have a degree in Systems Analysis and Development from FATEC and I am a developer with experience in web, desktop and mobile development.<br></br>
      I'm passionate about agile methodologies and the power they have within a project. And I love to explore new technologies and use them to solve real life problems. 
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Letícia Barreto" job="Software Developer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
