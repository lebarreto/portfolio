import React from "react";
import { Chrono } from "react-chrono";
// SCSS
import "./teamInfo.scss";

const data = [
  {
    title: "2017-2020",
    cardTitle: "Fatec São José dos Campos",
    cardSubtitle: "São José dos Campos, SP - Brazil",
    cardDetailedText: "",
  },
  {
    title: "2019",
    cardTitle: "California State University, Northridge",
    cardSubtitle: "Northridge, CA - United States of America",
    cardDetailedText: "Short-term Executive Program Digital Companies & the E-Business Revolution",
  },
  {
    title: "2019-2020",
    cardTitle: "Rocketseat",
    cardSubtitle: "Online",
    cardDetailedText: "Bootcamp GoStack - NodeJS, ReactJS, React Native",
  }
]


const about = () => (
  <div className="team__info flex-center">
    <div>
      <h4 className="font20 weight800">Education</h4>
      <div style={{ width: "100%", height: "350px" }}>
        <Chrono
          items={data}
          slideShow
          theme={{primary: "#FDB9B9", secondary: "#000", cardBgColor: "#FFFF", cardForeColor: "#000" }}
          mode="VERTICAL_ALTERNATING"
        />
      </div>
    </div>
  </div>
);

export default about;
