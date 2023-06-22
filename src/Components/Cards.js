import React from "react";
import "./Crds.css";

const Cards = () => {
  const div1 = [
    ["Improve the lives of millions. Change yours forever."],

    [
      "More than 2800 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Munich, Istanbul, Rome, Rio, Bologna, Mexico City and Curitiba, our search for great talent never stops.",
    ],
  ];

  const cardsInfo = [
    {
      imgUrl: "https://www.docplanner.com/images/warsaw.png",
      country: "Warsaw",
      btnName: "SEE OPENINGS",
    },
    {
      imgUrl: "https://www.docplanner.com/images/barcelona.png",
      country: "Barcelona",
      btnName: "SEE OPENINGS",
    },
    {
      imgUrl: "https://www.docplanner.com/images/munich.png",
      country: "Munich",
      btnName: "SEE OPENINGS",
    },
    {
      imgUrl: "https://www.docplanner.com/images/istanbul.png",
      country: "Istanbul",
      btnName: "SEE OPENINGS",
    },
    {
      imgUrl: "https://www.docplanner.com/images/rome.png",
      country: "Rome",
      btnName: "SEE OPENINGS",
    },
    {
      imgUrl: "https://www.docplanner.com/images/bologna.png",
      country: "Bologna",
      btnName: "SEE OPENINGS",
    },
    {
      imgUrl: "https://www.docplanner.com/images/curitiba.png",
      country: "Curitiba",
      btnName: "SEE OPENINGS",
    },
    {
      imgUrl: "https://www.docplanner.com/images/rio-janeiro.png",
      country: "Rio De Janeiro",
      btnName: "SEE OPENINGS",
    },
    {
      imgUrl: "https://www.docplanner.com/images/mexico-city.png",
      country: "Mexico City",
      btnName: "SEE OPENINGS",
    },
    {
      imgUrl: "https://www.docplanner.com/images/bogota.png",
      country: "Bogota",
      btnName: "SEE OPENINGS",
    },
  ];

  const footCards = [
    "Sounds interesting? Join us now!",
    "SEE ALL CURRENT OPENINGS",
  ];
  return (
    <section className="all-content-cont">
      <div className="intro-cards">
        <h3>{div1[0]}</h3>
        <p>{div1[1]}</p>
      </div>
      <div className="cards-cont">
        {cardsInfo.map((el) => (
          <div className="card-Uno">
            <img src={el.imgUrl} alt="country" />
            <div className="info-Uno">
              <p>{el.country}</p>
              <button>{el.btnName}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="foot-cards">
        <p>{footCards[0]}</p>
        <button>{footCards[1]}</button>
      </div>
    </section>
  );
};

export default Cards;
