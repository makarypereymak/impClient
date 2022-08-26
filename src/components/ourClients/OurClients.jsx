import React from "react";
import "./OurClients.scss";
import donTeksBank from "../../assets/images/companies/don-teksbank.jfif";
import agro from "../../assets/images/companies/agro.jpg";
import gazprom from "../../assets/images/companies/Gazprom-Logo-rus.svg.png";
import loko from "../../assets/images/companies/loko.png";
import mts from "../../assets/images/companies/mts.png";
import tns from "../../assets/images/companies/TNS_Energo_logo.png";
import theatre from "../../assets/images/companies/theatre.jpg";
import lukoil from "../../assets/images/companies/lukoil.png";
import exsmo from "../../assets/images/companies/exsmo.jpg";

function OurClients() {
  const LOGOS = [
    donTeksBank,
    agro,
    gazprom,
    loko,
    mts,
    tns,
    theatre,
    lukoil,
    exsmo,
  ];

  const clickBack = () => {
    const buttonsActive = document.getElementsByClassName(
      "our-clients__item--active"
    );

    const newFirstElementId = Number(buttonsActive[0].id) - 1;
    const newFirstElement = document.getElementById(
      newFirstElementId.toString()
    );

    const lastElementId = buttonsActive[buttonsActive.length - 1].id;
    const lastElement = document.getElementById(lastElementId);

    newFirstElement.classList.add("our-clients__item--active");
    newFirstElement.classList.remove("our-clients__item--hidden");
    lastElement.classList.add("our-clients__item--hidden");
    lastElement.classList.remove("our-clients__item--active");

    const backOneMoreElementId = newFirstElementId - 1;
    const backOnMoreElementExist = document.getElementById(
      backOneMoreElementId.toString()
    );

    if (lastElement) {
      const button = document.querySelector(".our-clients__button--next");
      if (button.disabled === true) {
        button.disabled = false;
      }
    }

    if (!backOnMoreElementExist) {
      const button = document.querySelector(".our-clients__button--back");
      button.disabled = true;
    }
  };

  const clickNext = () => {
    const buttonsActive = document.getElementsByClassName(
      "our-clients__item--active"
    );

    const firstElementId = buttonsActive[0].id;
    const firstElement = document.getElementById(firstElementId);

    const newLastElementId =
      Number(buttonsActive[buttonsActive.length - 1].id) + 1;
    const newElement = document.getElementById(newLastElementId.toString());

    firstElement.classList.add("our-clients__item--hidden");
    firstElement.classList.remove("our-clients__item--active");
    newElement.classList.add("our-clients__item--active");
    newElement.classList.remove("our-clients__item--hidden");

    const nextOneMoreElementId = newLastElementId + 1;
    const nextOnMoreElementExist = document.getElementById(
      nextOneMoreElementId.toString()
    );

    if (firstElement) {
      const button = document.querySelector(".our-clients__button--back");
      if (button.disabled === true) {
        button.disabled = false;
      }
    }

    if (!nextOnMoreElementExist) {
      const button = document.querySelector(".our-clients__button--next");
      button.disabled = true;
    }
  };

  return (
    <div className="our-clients">
      <h1 className="our-clients__title title--blue">Клиенты и партнеры:</h1>
      <div className="our-clients__slider">
        <button
          onClick={() => {
            clickBack();
          }}
          className="our-clients__button our-clients__button--back"
          type="button"
        >
          <span className="visually-hidden">назад</span>
        </button>
        <ul className="our-clients__list">
          {LOGOS.map((logo, index, LOGOS) => (
            <li
              key={index}
              id={index}
              className={
                index === Math.floor(LOGOS.length / 2) ||
                index === Math.floor(LOGOS.length / 2) + 1 ||
                index === Math.floor(LOGOS.length / 2) - 1
                  ? "our-clients__item our-clients__item--active"
                  : "our-clients__item our-clients__item--hidden"
              }
            >
              <img
                className="our-clients__pic"
                src={logo}
                alt="Логотип компании"
              />
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            clickNext();
          }}
          className="our-clients__button our-clients__button--next"
          type="button"
        >
          <span className="visually-hidden">вперед</span>
        </button>
      </div>
    </div>
  );
}

export default OurClients;
