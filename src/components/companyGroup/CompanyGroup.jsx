import React from "react";
import { Link } from "react-router-dom";
import "./CompanyGroup.scss";
import IT from "../../assets/images/IT.png";
import IS from "../../assets/images/IS.png";
import ISS from "../../assets/images/ISS.png";

function CompanyGroup() {
  return (
    <div className="company-group">
      <h1 className="company-group__title">
        Группа Компаний <br />
        "Империум"
      </h1>
      <ul className="company-group__list">
        <li className="company-group__item">
          <Link className="company-group__link" to="#">
            <img
              className="company-group__logo"
              src={IT}
              alt="Логотип ИМПЕРИУМ ТРЭЙДИНГ ЭНД ИНЖИНИРИНГ."
            />
          </Link>
          <p className="company-group__company-label">
            - ООО «ИМПЕРИУМ ТРЭЙДИНГ ЭНД ИНЖИНИРИНГ»{" "}
          </p>
        </li>
        <li className="company-group__item">
          <Link className="company-group__link" to="#">
            <img
              className="company-group__logo"
              src={IS}
              alt="Логотип ИМПЕРИУМ СЕКЬЮРИТИ."
            />
          </Link>
          <p className="company-group__company-label">
            - ООО ОХРАННОЕ АГЕНТСТВО «ИМПЕРИУМ СЕКЬЮРИТИ»{" "}
          </p>
        </li>
        <li className="company-group__item">
          <Link className="company-group__link" to="#">
            <img
              className="company-group__logo"
              src={ISS}
              alt="Логотип ИМПЕРИУМ СЕКЬЮРИТИ СЕРВИС."
            />
          </Link>
          <p className="company-group__company-label">
            - ООО ОХРАННОЕ АГЕНТСТВО «ИМПЕРИУМ СЕКЬЮРИТИ СЕРВИС»{" "}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default CompanyGroup;
