import React from "react";

const HealthExp = () => {
  const img = "https://www.docplanner.com/img/sygnet.png";
  const h2Style = {
    color: "#00b39b",
    fontWeight: "300",
    lineHeight: "44px",
    margin: "34px 0",
    width: "975px",
    letterSpacing: "-0.3px",
    fontSize: "34px",
    fontFamily: "Work Sans",
  };

  const parag = [
    "We want patients to find the perfect doctor and book an appointment inthe most easy way. The patient journey should be enjoyable, and that'swhy we are always next to them: to help them find the best possiblecare. Anytime, anywhere.",
    `We also help doctors to better manage their practice and build their
  online reputation. With our integrated end-to-end solution, doctors
  are able not only to improve their online presence, but also to devote
  their time to what really matters: their patients.`,
  ];

  return (
    <section className="container1">
      <img src={img} alt="DocLogo" />
      <h2 style={h2Style}>Making the healthcare experience more human</h2>
      <div className="Pargs">
        {parag.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </section>
  );
};

export default HealthExp;
