import React from "react";

import LogoEvent from "../assets/img/logo-event-2.png";
import Sosmed from "../assets/img/sosmed.png";
function Footer() {
  return (
    <>
      <div className="footer-section">
        <img src={LogoEvent} alt="" className="logo-size" id="coloredLogo" />
        <div className="footer-container-text  mx-auto d-flex ali">
          <div className="footer-text ">
            <p>
              Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh
              Detikhealth secara gratis untuk masyarakat Indonesia. Ajak
              keluarga dan kerabat anda untuk ikut keseruan Sudirman Run 2023
              lalu menangkan hadiah utama serta doorprize dengan total puluhan
              juta rupiah
            </p>
          </div>
          <div>
            <div className="footer-container-title text-center  ">
              <p>Connect With Us</p>
            </div>
            <img src={Sosmed} alt="" />
          </div>
          <div></div>
        </div>
        <hr className="mx-auto hr-style" />
        <div className="copyright mx-auto">
          <p>Copyright @ 2023 detikcom. All right reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
