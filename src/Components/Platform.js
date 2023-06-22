import React from "react";
import "./Pm.css";

function Platform() {
  const title = [`The world's biggest healthcare platform`];
  const p = [
    `We work from 9 offices all over the world, bringing Docplanner Group to life in 13 countries.`,
  ];

  const infoArray1 = [
    {
      imgUrl: "https://www.docplanner.com/img/flag.png",
      height: "40px",
      width: "35px",
      title: "Leader in 13 countries",
      parag:
        "Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile",
    },
    {
      imgUrl: "https://www.docplanner.com/img/patients.png",
      height: "32px",
      width: "40px",
      title: "90,000,000 patients",
      parag: "visit our websites each month",
    },
  ];
  const infoArray2 = [
    {
      imgUrl: "https://www.docplanner.com/img/visits.png",
      height: "40px",
      width: "40px",
      title: "15,000,000 appointments",
      parag: "booked last month",
    },
    {
      imgUrl: "https://www.docplanner.com/img/doctors.png",
      height: "40px",
      width: "40px",
      title: "210,000 active doctors",
      parag: "trust our solutions",
    },
  ];

  return (
    <section className="sect-cont">
      <div className="divAll-cont">
        <div className="p-Desc">
          <h3>{title}</h3>
          <p>{p}</p>
        </div>
        <div className="cards-container">
          <div className="two-F-Cards">
            {infoArray1.map((el) => (
              <div className="card">
                <p>
                  <img
                    style={{ height: el.height, width: el.width }}
                    src={el.imgUrl}
                    alt="logo"
                  />
                </p>
                <h3 className="myTitle">{el.title}</h3>
                <p className="parag"> {el.parag}</p>
              </div>
            ))}
          </div>
          <div className="two-S-Cards">
            {infoArray2.map((el) => (
              <div className="card">
                <p>
                  <img
                    style={{ height: el.height, width: el.width }}
                    src={el.imgUrl}
                    alt="logo"
                  />
                </p>
                <h3 className="myTitle">{el.title}</h3>
                <p className="parag">{el.parag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platform;
