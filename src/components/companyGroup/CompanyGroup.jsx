import React from "react";
import "./CompanyGroup.scss";
import IT from "../../assets/images/IT.jpg";
import IS from "../../assets/images/IS.jpg";
import ISS from "../../assets/images/ISS.jpg";

function CompanyGroup() {
  return (
    <div className="company-group">
      <h1 className="company-group__title">Группа Компаний "Империум"</h1>
      <div className="company-group__block">
        <a className="company-group__link" href="#">
          <img
            className="company-group__logo"
            src={IT}
            alt="Логотип ИМПЕРИУМ ТРЭЙДИНГ ЭНД ИНЖИНИРИНГ."
          />
        </a>
        <a className="company-group__link" href="#">
          <img
            className="company-group__logo"
            src={IS}
            alt="Логотип ИМПЕРИУМ СЕКЬЮРИТИ."
          />
        </a>
        <a className="company-group__link" href="#">
          <img
            className="company-group__logo"
            src={ISS}
            alt="Логотип ИМПЕРИУМ СЕКЬЮРИТИ СЕРВИС."
          />
        </a>
        {/* <span className="company-group__company company-group__company--ES">
          ИС
        </span>
        <span className="company-group__company company-group__company--ESS">
          ИСС
        </span>
        <span className="company-group__company company-group__company--ETE">
          ИТИ
        </span> */}
      </div>
    </div>
  );
}

export default CompanyGroup;
