import React, { useState } from "react";
import "./Main.scss";
import CompanyGroup from "../../../components/companyGroup/CompanyGroup";
import OurClients from "../../../components/ourClients/OurClients";
import Certificates from "../../../components/certificates/Certificates";
import Security from "../../../components/securityBlock/Security";
import Callback from "../../../components/callback/Callback";
import Modal from "../../../components/modal/Modal";

function Main() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="main">
        <CompanyGroup />
        <Callback
          onClick={() => {
            setVisible(!visible);
          }}
        />
      </div>
      <OurClients />
      <Certificates />
      <Security />
      <Modal visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default Main;
