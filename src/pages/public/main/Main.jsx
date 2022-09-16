import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./Main.scss";
import "../../../components/ourClients/OurClients.scss";
import "../../../components/certificates/Certificates.scss";
import "../../../components/letters/Letters.scss";

import CompanyGroup from "../../../components/companyGroup/CompanyGroup";
import Security from "../../../components/securityBlock/Security";
import Callback from "../../../components/callback/Callback";
import Slider from "../../../components/slider/Slider";

import donTeksBank from "../../../assets/images/companies/don-teksbank.jfif";
import agro from "../../../assets/images/companies/agro.png";
import gazprom from "../../../assets/images/companies/Gazprom-Logo-rus.png";
import loko from "../../../assets/images/companies/loko.png";
import mts from "../../../assets/images/companies/mts.png";
import theatre from "../../../assets/images/companies/theatre.png";
import eco from "../../../assets/images/companies/eco.png";
import lukoil from "../../../assets/images/companies/lukoil.png";
import rostov from "../../../assets/images/companies/rostov.png";
import PNK from "../../../assets/images/companies/pnk-group_logo.png";
import eksmo from "../../../assets/images/companies/eksmo.png";

import cer11 from "../../../assets/images/certificates/cer-1-1.jpg";
import cer12 from "../../../assets/images/certificates/cer-1-2.jpg";
import cer13 from "../../../assets/images/certificates/cer-1-3.jpg";
import cer14 from "../../../assets/images/certificates/cer-1-4.jpg";
import cer2 from "../../../assets/images/certificates/cer-2-1.jpg";
import cer31 from "../../../assets/images/certificates/cer-3-1.jpg";
import cer32 from "../../../assets/images/certificates/cer-3-2.jpg";
import cer41 from "../../../assets/images/certificates/cer-4-1.jpg";
import cer42 from "../../../assets/images/certificates/cer-4-2.jpg";

import let1 from "../../../assets/images/letters/let1.jpg";
import let2 from "../../../assets/images/letters/let2.jpg";
import let3 from "../../../assets/images/letters/let3.jpg";
import let4 from "../../../assets/images/letters/let4.jpg";
import let5 from "../../../assets/images/letters/let5.jpg";

function Main() {
  let location = useLocation();
  const LOGOS = [
    donTeksBank,
    agro,
    gazprom,
    loko,
    mts,
    theatre,
    eco,
    lukoil,
    rostov,
    PNK,
    eksmo,
  ];
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

  const LETTERS = [let1, let2, let3, let4, let5];

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = hash && document.getElementById(hash.slice(1));

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const el = document.getElementsByClassName("header");
      el[0].scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <div className="main">
        <CompanyGroup />
        <Callback id="callback" />
      </div>
      <Slider
        modalExist={false}
        id="ourClients"
        firstTitle={"Клиенты и партнёры"}
        pics={LOGOS}
        className="our-clients"
        mobileTranslate={80}
        mobileCountCenter={3}
      />
      <Slider
        modalExist={true}
        id="certificates"
        firstTitle={"Лицензии"}
        pics={CERTIFICATES}
        className="certificates"
        mobileTranslate={220}
        mobileCountCenter={1}
      />
      <Slider
        modalExist={true}
        id="letters"
        firstTitle={"Благодарственные письма"}
        pics={LETTERS}
        className="letters"
        mobileTranslate={220}
        mobileCountCenter={1}
      />
      <Security id="security" />
    </div>
  );
}

export default Main;
