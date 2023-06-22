import React from "react";

const Brands = () => {
  const imgs = [
    "https://cdn.discordapp.com/attachments/1093497830917816403/1120717939209945138/image.png",
    "https://cdn.discordapp.com/attachments/1093497830917816403/1120717939209945138/image.png",
    "https://cdn.discordapp.com/attachments/1093497830917816403/1120717939209945138/image.png",
    "https://cdn.discordapp.com/attachments/1093497830917816403/1120717939209945138/image.png",
    "https://cdn.discordapp.com/attachments/1093497830917816403/1120717939209945138/image.png",
    "https://cdn.discordapp.com/attachments/1093497830917816403/1120717939209945138/image.png",
    "https://www.docplanner.com/logos/logo-tuotempo.svg",
    "https://www.docplanner.com/logos/logo-gipo-primary.svg",
    "https://www.docplanner.com/logos/logo-clinicloud.svg",
    "https://www.docplanner.com/logos/logo-feegow.svg",
  ];
  return (
    <section className="brands-container">
      <div className="parag">
        <p>
          We are a global <span className="block">company</span> with local
          culture
        </p>
      </div>
      <div className="brands-logo">
        {imgs.map((el) => (
          <p>
            {" "}
            <img
              style={{ width: 125, height: 30 }}
              src={el}
              alt="brandLogo"
            ></img>{" "}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Brands;
