import React, { useEffect } from "react";
import "./Modal.scss";

function Modal() {
  useEffect(() => {
    setTimeout(() => {
      const modal = document.querySelector(".modal");
      if (modal) {
        modal.className = "modal modal--down-animation";
        setTimeout(() => {
          modal.className = "modal modal--down-display";
        }, 1000);
        const body = document.querySelector("#body");
        body.style.overflowY = "auto";
      }
    }, 2500);
  });

  return (
    <div className="modal">
      <span className="modal__tagline">
        Доверьте свою безопасность профессионалам!
      </span>
      <h1 className="modal__title">
        Профессионал <br /> сервис <br />
        секьюрити <br />
        (ООО ЧОО «ПСС»)
      </h1>
    </div>
  );
}

export default Modal;
