import React from "react";
import "./ServicesList.scss";
import { UL_SERVICES } from "../../data/dataServices";

export const openUl = (id) => {
  const button = document.getElementById(id + 100);
  const item = document.getElementById(id);
  if (
    item.className ===
    "services-item__lower-list services-item__lower-list--list-hidden"
  ) {
    item.classList.remove("services-item__lower-list--list-hidden");
    item.classList.add("services-item__lower-list--list-show");
    button.classList.add("services-item__button--click");
  } else {
    item.classList.remove("services-item__lower-list--list-show");
    item.classList.add("services-item__lower-list--list-hidden");
    button.classList.remove("services-item__button--click");
  }
};

function ServicesList() {
  return (
    <div className="services">
      <h1 className="services-title">Полный перечень наших услуг:</h1>
      <ul className="services-list">
        {UL_SERVICES.map((service) => (
          <li id={service.idName} key={service.id} className="services-item">
            <button
              id={service.id + 100}
              className="services-item__button"
              onClick={() => {
                openUl(service.id);
              }}
            >
              <span className="visually-hidden">открыть</span>
            </button>
            <h2 className="services-item__title">{service.title}</h2>
            <ul
              id={service.id}
              className="services-item__lower-list services-item__lower-list--list-hidden"
            >
              {service.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesList;
