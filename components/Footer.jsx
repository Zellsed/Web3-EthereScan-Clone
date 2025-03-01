import React from "react";
import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialInstagram,
} from "react-icons/ti";

import Style from "../styles/footer.module.css";
import footerLogo from "../public/footerLogo.png";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer__box}>
        <Image src={footerLogo} alt="logo" width={100} height={100} />
      </div>

      <div className={Style.footer__box}>
        <div className={Style.footer__input}>
          <input type="email" placeholder="Email" />
          <RiSendPlaneFill />
        </div>
      </div>

      <div className={Style.footer__box}>
        <div className={Style.social}>
          <TiSocialFacebook />
          <TiSocialInstagram />
          <TiSocialLinkedin />
          <TiSocialTwitter />
          <TiSocialYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
