import React from "react";
import "./Equipments.css";

function Equipments() {
  const equipments = [
    {
      id: 1,
      name: "Название",
      description: "Описание",
      src: "./images/logo.png",
    },
    {
      id: 2,
      name: "Название",
      description: "Описание",
      src: "./images/logo.png",
    },
    {
      id: 3,
      name: "Название",
      description: "Описание",
      src: "./images/logo.png",
    },
    {
      id: 4,
      name: "Название",
      description: "Описание",
      src: "./images/logo.png",
    },
  ];
  return (
    <ul className="equipments">
      {equipments.map((equipment) => (
        <li className="equipments__item" key={equipment.id}>
          <img
            className="equipments__pic"
            src={equipment.src}
            width="100"
            height="100"
            alt="Логотип сайта."
          />
          <h1 className="equipments__title">{equipment.name}</h1>
          <p className="equipments__description">{equipment.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Equipments;
