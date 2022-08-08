import React from "react";
import "./LawBlock.css";
import { OL_SERVICES } from "../../data/dataServices";

function LawBlock() {
  return (
    <div className="law-block">
      <p className="law-text">
        В перечень услуг, регламентируемых ст. 3 ФЗ «О частной детективной и
        охранной деятельности в РФ», входят:
      </p>
      <ol className="law-list">
        {OL_SERVICES.map((item, index) => (
          <li key={index} className="law-item">
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default LawBlock;
