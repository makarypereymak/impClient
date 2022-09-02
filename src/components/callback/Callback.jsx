import React from "react";
import "./Callback.scss";

function Callback(props) {
  return (
    <button onClick={props.onClick} id={props.id} className="callback-btn">
      <span className="callback-btn__text">Заказать звонок</span>
    </button>
  );
}

export default Callback;
