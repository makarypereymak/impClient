import React, { useEffect } from "react";
import "./Services.scss";
import ServicesList from "../../../components/servicesList/ServicesList";
import LawBlock from "../../../components/lawBlock/LawBlock";
import { useLocation } from "react-router-dom";
import { openUl } from "../../../components/servicesList/ServicesList";
import { UL_SERVICES } from "../../../data/dataServices";

function Services() {
  let location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = hash && document.getElementById(hash.slice(1));

      let id;

      UL_SERVICES.forEach((item) => {
        if (item.idName === hash.slice(1)) {
          id = item.id;
        }
      });

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }

      openUl(id);
    }
  }, [location]);

  return (
    <div className="services">
      <h1 className="services__title title--blue">Услуги</h1>
      <LawBlock />
      <ServicesList />
    </div>
  );
}

export default Services;
