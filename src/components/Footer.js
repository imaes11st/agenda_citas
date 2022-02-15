import React from "react";
import "./Footer.css";
import LogoCol from "../images/co-colombia.png";
import LogoGovCo from "../images/logo-gov.svg";
import Logo from "../images/logo2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerSpaceBlank"></div>
      <div className="footerContainer">
        <div className="footerWrapInfo">
          <div className="footerColDiv">
            <div className="footerColTitle">
              <h2>
                E.S.E. Hospital Departamental Universitario Santa Sofía de
                Caldas
              </h2>
            </div>
            <span className="footerDir">
              Dirección: Calle 5 No. 40-02 Barrio Asturias - Manizales, Caldas
            </span>
            <span className="footerOperation">
              Horario de atención: 7:00 a.m. - 12:00 m y de 2:00 p.m. - 5:00 p.m
              de Lunes a Viernes.
            </span>
            <span className="footerTel">Teléfono Conmutador: 6068879200</span>
            <span className="footerLineaGratuita">
              Línea de atención gratuita: 018000413610 - 24 horas
              (57-606)8932642 - Asignación de Citas: (57-606)8932643 - Tarjeta
              Vivir Mejor: (57-606)8932645 - Urgencias: (57-606)8932644
            </span>
            <span className="footerAntiCorrupcion">
              Línea anticorrupción: 018000413610
            </span>
            <span className="footerFax">Fax: 6068932641</span>
            <span className="footerEmail">
              Correo institucional: santasofia@santasofia.com.co
            </span>
            <span className="footerEmailNotificacion">
              Correo de notificaciones judiciales:
              notificacionesjudiciales@santasofia.com.co
            </span>
          </div>
          <div className="footerLogoHSS">
            <div className="footerWrapperLogoHSS"></div>
            <img src={Logo} alt="" className="footerLogo" />
          </div>
        </div>
        <div className="footerWrap">
          <Link
            to="https://www.facebook.com/hospitalsantasofia"
            className="footerSocialBtn"
          >
            <FacebookIcon />
          </Link>
          <Link to="" className="footerSocialBtn">
            <TwitterIcon />
          </Link>
        </div>
        <div className="footerWrap">
          <Link to="" className="footerSocialBtn">
            <YouTubeIcon />
          </Link>
          <Link to="" className="footerSocialBtn">
            <InstagramIcon />
          </Link>
        </div>
        <div className="footerWrap">
          <div className="footerColDiv">
            <div className="footerColTitle">
              <h2>Hospital Santa Sofía Arauca</h2>
            </div>
            <span className="footerDir">
              Direccion: Cra 4 Calle 6 Corregimiento de Arauca
            </span>
            <span className="footerOperation">
              Horario de atención: 7:00 a.m. - 12:00 m y de 2:00 p.m. - 5:00 p.m
            </span>
          </div>
          <div>
            <div className="footerBlankFix">
              <span className="footerEmail">
                Email: arauca@santasofia.com.co
              </span>
              <span className="footerTel">Teléfonos: 3137225853</span>
            </div>
          </div>
        </div>
        <div className="footerWrap">
          <div className="footerColDiv">
            <div className="footerColTitle">
              <h2>Hospital Santa Sofía Palestina</h2>
            </div>
            <span className="footerDir">
              Direccion: Calle 8 No.19-43 Barrio La Pista
            </span>
            <span className="footerOperation">
              Horario de atención: 7:00 a.m. - 12:00 m y de 2:00 p.m. - 5:00 p.m
            </span>
          </div>
          <div>
            <div className="footerBlankFix">
              <span className="footerEmail">
                Email: palestina@santasofia.com.co
              </span>
              <span className="footerTel">
                Teléfonos: 3217008445 - 3228085179 - 3228085182 - 3217230123
              </span>
            </div>
          </div>
        </div>
        <div className="footerWrap">
          <span className="footerLastDate">
            Última modificación febrero 15 2022, 2:00 pm
          </span>
        </div>
      </div>
      <div className="footerGreenSpace"></div>
      <div className="footerContainerwGov">
        <div className="footerContainerDefault">
          <div className="footer-wLogosGov">
            <img src={LogoCol} alt="LogoCol" className="footerLogoCol" />
            <div className="separador"></div>
            <img src={LogoGovCo} alt="LogoGovCo" className="footerLogoGovCo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
