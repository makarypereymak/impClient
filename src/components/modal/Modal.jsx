import React, { useState } from "react";
import "./Modal.scss";

function Modal(props) {
  const [number, setNumber] = useState("");

  return (
    <div
      className={props.visible ? "modal--show" : "modal--hidden"}
      onClick={() => props.setVisible(false)}
    >
      <div className="modal__form-wrapper" onClick={(e) => e.stopPropagation()}>
        <p className="modal__title">Введите ваш номер телефона</p>
        <form
          className="modal__form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            onInput={(e) => {
              setNumber(e.target.value);
            }}
            className="modal__input"
            type="number"
          />
          <button
            type="button"
            onClick={() => {
              // sendMail(number);
            }}
          ></button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
