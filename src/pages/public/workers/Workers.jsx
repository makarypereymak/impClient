import React from "react";
import "./Workers.css";

function Workers() {
  const workers = [
    {
      id: 1,
      name: "имя",
      description: "описание",
      src: "./images/logo.png",
    },
    {
      id: 2,
      name: "имя",
      description: "описание",
      src: "./images/logo.png",
    },
    {
      id: 3,
      name: "имя",
      description: "описание",
      src: "./images/logo.png",
    },
    {
      id: 4,
      name: "имя",
      description: "описание",
      src: "./images/logo.png",
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
