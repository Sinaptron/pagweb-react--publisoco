import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Acerca de</h3>
          <ul>
            <li>
              <a href="#">Compañía</a>
            </li>
            <li>
              <a href="#">Sucursales</a>
            </li>
            <li>
              <a href="#">Misión Visión</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Servicios</h3>
          <ul>
            <li>
              <a href="#">Perifoneo</a>
            </li>
            <li>
              <a href="#">Activaciones</a>
            </li>
            <li>
              <a href="#">Vallas Móviles</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contáctanos</h3>
          <ul>
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="#">Teléfono</a>
            </li>
            <li>
              <a href="#">Dirección</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Tik Tok</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Publicidad. Derechos Reservados.
      </div>
    </footer>
  );
};

export default Footer;
