import React from "react";
import "./CompanyGroup.css";

function CompanyGroup() {
  return (
    <div className="company-group">
      <h1 className="company-group__title">Группа Компаний "Империум"</h1>
      <svg className="company-group__svg">
        <line
          x1="0"
          y1="50"
          x2="200"
          y2="50"
          stroke-width="2"
          stroke="rgb(0,0,0)"
        />
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          stroke-width="2"
          stroke="rgb(0,0,0)"
        />
        <line
          x1="1"
          y1="50"
          x2="1"
          y2="200"
          stroke-width="2"
          stroke="rgb(0,0,0)"
        />
        <line
          x1="199"
          y1="50"
          x2="199"
          y2="200"
          stroke-width="2"
          stroke="rgb(0,0,0)"
        />
      </svg>
      <span className="company-group__company company-group__company--ES">
        ИС
      </span>
      <span className="company-group__company company-group__company--ESS">
        ИСС
      </span>
      <span className="company-group__company company-group__company--ETE">
        ИТИ
      </span>
    </div>
  );
}

export default CompanyGroup;
