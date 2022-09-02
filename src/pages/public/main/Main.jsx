import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Main.scss";
import CompanyGroup from "../../../components/companyGroup/CompanyGroup";
import Certificates from "../../../components/certificates/Certificates";
import Security from "../../../components/securityBlock/Security";
import Callback from "../../../components/callback/Callback";
import Modal from "../../../components/modal/Modal";
import Slider from "../../../components/slider/Slider";
import "../../../components/ourClients/OurClients.scss";

import donTeksBank from "../../../assets/images/companies/don-teksbank.jfif";
import agro from "../../../assets/images/companies/agro.png";
import gazprom from "../../../assets/images/companies/Gazprom-Logo-rus.png";
import loko from "../../../assets/images/companies/loko.png";
import mts from "../../../assets/images/companies/mts.png";
import theatre from "../../../assets/images/companies/theatre.png";
import eco from "../../../assets/images/companies/eco.png";

import cer11 from "../../../assets/images/certificates/cer-1-1.jpg";
import cer12 from "../../../assets/images/certificates/cer-1-2.jpg";
import cer13 from "../../../assets/images/certificates/cer-1-3.jpg";
import cer14 from "../../../assets/images/certificates/cer-1-4.jpg";
import cer2 from "../../../assets/images/certificates/cer-2-1.jpg";
import cer31 from "../../../assets/images/certificates/cer-3-1.jpg";
import cer32 from "../../../assets/images/certificates/cer-3-2.jpg";
import cer41 from "../../../assets/images/certificates/cer-4-1.jpg";
import cer42 from "../../../assets/images/certificates/cer-4-2.jpg";

function Main() {
  const [visible, setVisible] = useState(false);
  let location = useLocation();
  const LOGOS = [donTeksBank, agro, gazprom, loko, mts, theatre, eco];
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

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = hash && document.getElementById(hash.slice(1));

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <div className="main">
        <CompanyGroup />
        <Callback
          id="callback"
          onClick={() => {
            setVisible(!visible);
          }}
        />
      </div>
      <Slider title={"Клиенты и партнеры"} pics={LOGOS} className="clients" />
      {/* <Slider title={"Лицензии"} pics={CERTIFICATES} className="cerf" /> */}
      <Certificates id="certificates" />
      <Security id="security" />
      <Modal visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default Main;
