import React from "react";
import { Row, Col } from "react-flexbox-grid";

import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";


import Linkedin from '../../../assets/contact/linkedin.svg';
import Github from '../../../assets/contact/github.svg';
import Smartphone from '../../../assets/contact/smartphone.svg';
import Email from '../../../assets/contact/email.svg';


const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={3} className="contact__info">
          <a href="https://www.linkedin.com/in/leticiambarreto">
            <ContactInfoBox
              icon={Linkedin}
              textLine1="Linkedin"
              textLine2=""
            />
          </a>
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <a href="https://www.github.com/lebarreto">
            <ContactInfoBox
              icon={Github}
              textLine1="Github"
              textLine2=""
            />
          </a>
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={Smartphone}
            textLine1="+55 12 99188-6168"
            textLine2=""
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={Email}
            textLine1="leticiambrt@gmail.com"
            textLine2=""
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;
