import React from "react";
import { FaLinkedin, FaGithub} from 'react-icons/fa';

import "./contactInfoBox.scss";

const contactInfoBox = (props) => {
  console.log(props, '===')
  return (
  <div className="contact__info-box">
    <div>
      <img src={props.icon} alt="" />
    </div>
    <div>
      <p>{props.textLine1}</p>
      <p>{props.textLine2}</p>
    </div>
  </div>
)};

export default contactInfoBox;
