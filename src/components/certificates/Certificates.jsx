import React from "react";
import "./Certificates.scss";
import cer11 from "../../assets/images/certificates/cer-1-1.jpg";
import cer12 from "../../assets/images/certificates/cer-1-2.jpg";
import cer13 from "../../assets/images/certificates/cer-1-3.jpg";
import cer14 from "../../assets/images/certificates/cer-1-4.jpg";
import cer2 from "../../assets/images/certificates/cer-2-1.jpg";
import cer31 from "../../assets/images/certificates/cer-3-1.jpg";
import cer32 from "../../assets/images/certificates/cer-3-2.jpg";
import cer41 from "../../assets/images/certificates/cer-4-1.jpg";
import cer42 from "../../assets/images/certificates/cer-4-2.jpg";

function Certificates() {
  const CERTIFICATES = [
    cer11,
    cer12,
    cer13,
    cer14,
    cer31,
    cer32,
    cer41,
    cer42,
    cer2,
  ];
  return (
    <div className="certificates">
      <h1 className="certificates__title title--blue">Лицензии</h1>
      <p className="certificates__text">
        Компания ООО ЧОП ИМПЕРИУМ ДЕЙСТВУЕТ НА <br />
        ОСНОВАНИИ ВЫДАННОЙ ЛИЦЕНЗИИ
      </p>
      <ul className="certificates__list">
        {CERTIFICATES.map((cer) => (
          <li className="certificates__item">
            <img className="certificates__pic" src={cer} alt="Лицензия." />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificates;
