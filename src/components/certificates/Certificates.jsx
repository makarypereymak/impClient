import React from "react";
import "./Certificates.scss";
import Certificate from "../../assets/images/certificate.png";

function Certificates() {
  return (
    <div className="certificates">
      <h1 className="certificates__title title--blue">Лицензии</h1>
      <p className="certificates__text">
        Компания ООО ЧОП ИМПЕРИУМ ДЕЙСТВУЕТ НА <br />
        ОСНОВАНИИ ВЫДАННОЙ ЛИЦЕНЗИИ
      </p>
      <ul className="certificates__list">
        <li className="certificates__item">
          <img
            className="certificates__pic"
            src={Certificate}
            alt="Лицензия."
          />
        </li>
        <li className="certificates__item">
          <img
            className="certificates__pic"
            src={Certificate}
            alt="Лицензия."
          />
        </li>
        <li className="certificates__item">
          <img
            className="certificates__pic"
            src={Certificate}
            alt="Лицензия."
          />
        </li>
        <li className="certificates__item">
          <img
            className="certificates__pic"
            src={Certificate}
            alt="Лицензия."
          />
        </li>
      </ul>
    </div>
  );
}

export default Certificates;
