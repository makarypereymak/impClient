import React from "react";
import "./Workers.scss";
import Logo from "../../../assets/images/logo.png";

function Workers() {
  const workers = [
    {
      id: 1,
      name: "имя",
      description: "описание",
      src: Logo,
    },
    {
      id: 2,
      name: "имя",
      description: "описание",
      src: Logo,
    },
    {
      id: 3,
      name: "имя",
      description: "описание",
      src: Logo,
    },
    {
      id: 4,
      name: "имя",
      description: "описание",
      src: Logo,
    },
  ];
  return (
    <ul className="workers">
      {workers.map((worker) => (
        <li className="workers__item" key={worker.id}>
          <img
            className="workers__pic"
            src={worker.src}
            width="150"
            height="150"
            alt="Логотип сайта."
          />
          <h1 className="workers__title">{worker.name}</h1>
          <p className="workers__description">{worker.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Workers;
