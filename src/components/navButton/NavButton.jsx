import React from "react";
import "./NavButton.scss";

function NavButton(props) {
  return (
    <button
      onClick={() => {
        const body = document.querySelector("#body");
        if (props.nav.current.className === "nav nav--closed") {
          props.nav.current.className = "nav nav--opened";
          body.style.overflowY = "hidden";
        } else {
          props.nav.current.className = "nav nav--closed";
          body.style.overflowY = "auto";
        }
      }}
      className="nav__toggle"
      type="button"
    >
      <span className="visually-hidden">Открыть меню</span>
      <span className="nav__toggle-global nav__toggle-top"></span>
      <span className="nav__toggle-global nav__toggle-middle1"></span>
      <span className="nav__toggle-global nav__toggle-middle2"></span>
      <span className="nav__toggle-global nav__toggle-bottom"></span>
    </button>
  );
}

export default NavButton;
