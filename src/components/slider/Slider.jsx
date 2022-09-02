import React, { useRef, useState, useEffect } from "react";
import "./Slider.scss";

function Slider({ title, pics, className }) {
  const [translateX, setTranslateX] = useState(0);
  const list = useRef(0);
  const length = pics.length;
  let elementsBeforeCenter = 0;
  let elementsAfterCenter = 0;

  for (let i = 0; i < length; i++) {
    if (i < Math.floor(length / 2) - 1) {
      elementsBeforeCenter += 1;
    } else if (i < Math.floor(length / 2) + 1) {
      elementsAfterCenter += 1;
    }
  }

  useEffect(() => {
    const buttonBack = document.querySelector(".slider__button--back");
    const buttonNext = document.querySelector(".slider__button--next");

    buttonBack.addEventListener(
      "click",
      () => {
        setTranslateX(translateX - 310);
      },
      true
    );

    buttonNext.addEventListener(
      "click",
      () => {
        setTranslateX(translateX + 310);
      },
      true
    );
  });

  useEffect(() => {
    if (translateX <= -(elementsBeforeCenter * 310)) {
      const button = document.querySelector(".slider__button--back");
      button.disabled = true;
    } else if (translateX >= elementsAfterCenter * 310) {
      const button = document.querySelector(".slider__button--next");
      button.disabled = true;
    } else {
      const buttonNext = document.querySelector(".slider__button--next");
      if (buttonNext.disabled === true) {
        buttonNext.disabled = false;
      }
      const buttonBack = document.querySelector(".slider__button--back");
      if (buttonBack.disabled === true) {
        buttonBack.disabled = false;
      }
    }
  }, [translateX, elementsAfterCenter, elementsBeforeCenter]);

  return (
    <div className="slider">
      <h1 className="title--blue">{title}</h1>
      <div className="slider__wrapper">
        <button className="slider__button slider__button--back" type="button">
          <svg
            className="slider__arrow slider__arrow--back slider__arrow--desktop slider__arrow--back-desktop"
            viewBox="0 0 32 143"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="slider__arrow-path"
              d="M0 130.35L4.72 142.937L31.3867 71.8255L4.72 0.714355L0 13.301L21.9467 71.8255L0 130.35Z"
              fill="none"
            />
          </svg>
          <svg
            className="slider__arrow slider__arrow--back slider__arrow--mobile slider__arrow--back-mobile"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 9L15 0.339745L15 17.6603L0 9Z" fill="#AFC5D9" />
          </svg>
          <span className="visually-hidden">назад</span>
        </button>
        <ul
          ref={list}
          className={"slider__list " + className}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {pics.map((logo, index, pics) => (
            <li key={index} id={index} className="our-clients__item">
              <img
                className="our-clients__pic"
                src={logo}
                alt="Логотип компании"
              />
            </li>
          ))}
        </ul>
        <button className="slider__button slider__button--next" type="button">
          <svg
            className="slider__arrow slider__arrow--next slider__arrow--desktop slider__arrow--next-desktop"
            viewBox="0 0 32 143"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="slider__arrow-path"
              d="M0 130.35L4.72 142.937L31.3867 71.8255L4.72 0.714355L0 13.301L21.9467 71.8255L0 130.35Z"
              fill="none"
            />
          </svg>
          <svg
            className="slider__arrow slider__arrow--next slider__arrow--mobile slider__arrow--next-mobile"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 9L15 0.339745L15 17.6603L0 9Z" fill="#AFC5D9" />
          </svg>
          <span className="visually-hidden">вперед</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
