import React from "react";
import "./Footer.css";
import LogoCol from "../images/co-colombia.png";
import LogoGovCo from "../images/logo-gov.svg";
import { Card } from "@mui/material";
import Logo from "../images/logo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Card>
          <div>
            <h2>
              E.S.E. Hospital Departamental Universitario Santa Sofía de Caldas
            </h2>
            <p className="footerDir">
              Dirección: Calle 5 No. 40-02 Barrio Asturias - Manizales, Caldas
            </p>
            <p className="footerAddress">
              Horario de atención: 7:00 a.m. - 12:00 m y de 2:00 p.m. - 5:00 p.m
              de Lunes a Viernes.
            </p>
            <p className="footerTel">Teléfono Conmutador: 6068879200</p>
            <p className="footerLineaGratuita">
              Línea de atención gratuita: 018000413610 - 24 horas
              (57-606)8932642 - Asignación de Citas: (57-606)8932643 - Tarjeta
              Vivir Mejor: (57-606)8932645 - Urgencias: (57-606)8932644
            </p>
            <p className="footerAntiCorrupcion">
              Línea anticorrupción: 018000413610
            </p>
            <p className="foooterFax">Fax: 6068932641</p>
            <p className="footerEmail">
              Correo institucional: santasofia@santasofia.com.co
            </p>
            <p className="footerEmailNotificacion">
              Correo de notificaciones judiciales:
              notificacionesjudiciales@santasofia.com.co
            </p>
            <div>
              <img src={Logo} alt="" className="" />
            </div>
          </div>
        </Card>
      </div>
      <div className="footerContainer">
        <div>
          <img src={LogoCol} alt="LogoCol" className="footerLogoCol" />
          <div className="separador"></div>
          <img src={LogoGovCo} alt="LogoGovCo" className="footerLogoCol" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
