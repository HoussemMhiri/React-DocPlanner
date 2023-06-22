import React from "react";

const Footers = () => {
  const link = ["www.docplanner.com © 2023"];
  const countrys = [
    "Poland",
    "Turkey",
    "Spain",
    "Italy",
    "Germany",
    "Czech",
    "Portugal",
    "Mexico",
    "Colombia",
    "Brazil",
    "Argentina",
    "Peru",
    "Chile",
  ];
  return (
    <footer className="footer">
      <p className="long-P">
        We are leaders in 13 countries:{" "}
        {countrys.map((el) => (
          <a href="#home">{el}</a>
        ))}{" "}
      </p>
      <p>{link}</p>
    </footer>
  );
};

export default Footers;
