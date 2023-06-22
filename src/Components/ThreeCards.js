import React from "react";

const ThreeCards = () => {
  const data = [
    {
      id: Math.random(),
      icon: "fa-solid fa-hospital-user",
      title: "For patients",
      p: "Find a doctor, book a visit and solve any health-related doubt",
      select: [
        "Choose country",
        "Argentina",
        "Brazil",
        "Chile",
        "Colombia",
        "Czech",
        "Germany",
        "Italy",
        "Mexico",
        "Peru",
        "Poland",
        "Portugal",
        "Spain",
        "Turkey",
      ],
    },
    {
      id: Math.random(),
      icon: "fa-solid fa-user-doctor",
      title: "For doctors",
      p: "Save time managing visits and cut no-shows by half",
      select: [
        "Choose country",
        "Argentina",
        "Brazil",
        "Chile",
        "Colombia",
        "Czech",
        "Germany",
        "Italy",
        "Mexico",
        "Peru",
        "Poland",
        "Portugal",
        "Spain",
        "Turkey",
      ],
    },
    {
      id: Math.random(),
      icon: "fa-solid fa-house-chimney-medical",
      title: "For clinics",
      p: "Deliver an exceptional patient experience in your clinic",
      select: [
        "2 to 20 specialists",
        "Brazil",
        "Czech",
        "Italy",
        "Mexico",
        "Poland",
        "Spain",
        "Turkey",
      ],
      select2: [
        "More than 20 specialists",
        "Brazil",
        "Italy",
        "Mexico",
        "Poland",
        "Spain",
      ],
    },
  ];
  return (
    <section className="cards-Container">
      {data.map((el) => (
        <div className="card-container" key={el.id}>
          <div className="info-container">
            <i className={el.icon}></i>
            <h3 className="h3Title">{el.title}</h3>
            <p>{el.p}</p>
          </div>
          <div className="select-cont">
            <select name="" id="">
              {el.select.map((el) => (
                <option>{el}</option>
              ))}
            </select>
            {el.select2 ? (
              <select>
                {el.select2.map((el) => (
                  <option>{el}</option>
                ))}
              </select>
            ) : null}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThreeCards;
