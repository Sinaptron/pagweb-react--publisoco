import React, { useRef, useEffect } from "react";

// Importar la imagen localmente
import logo from "../assets/images/logo empresa.png"; // Asegúrate de que la ruta sea correcta

const Navbar = () => {
  // Crear referencias para los elementos del menú
  const openMenuButtonRef = useRef(null);
  const closeMenuButtonRef = useRef(null);
  const mainMenuRef = useRef(null);

  // Usar useEffect para manejar los event listeners de apertura y cierre del menú
  useEffect(() => {
    const openMenu = () => {
      if (mainMenuRef.current) {
        mainMenuRef.current.classList.add("active");
      }
    };

    const closeMenu = () => {
      if (mainMenuRef.current) {
        mainMenuRef.current.classList.remove("active");
      }
    };

    const openMenuButton = openMenuButtonRef.current;
    const closeMenuButton = closeMenuButtonRef.current;

    if (openMenuButton) {
      openMenuButton.addEventListener("click", openMenu);
    }

    if (closeMenuButton) {
      closeMenuButton.addEventListener("click", closeMenu);
    }

    // Limpiar event listeners cuando el componente se desmonta
    return () => {
      if (openMenuButton) {
        openMenuButton.removeEventListener("click", openMenu);
      }
      if (closeMenuButton) {
        closeMenuButton.removeEventListener("click", closeMenu);
      }
    };
  }, []);

  return (
    <header className="main-header">
      <div className="content-wrapper">
        <a href="/">
          {/* Si la imagen se importa con import logo */}
          <img src={logo} alt="Logo de agencia" />
        </a>

        {/* Menú hamburguesa */}
        <span id="open-menu-button" ref={openMenuButtonRef} className="jam jam-menu"></span>
        <nav id="main-menu" ref={mainMenuRef} className="main-menu">
          <span id="close-menu-button" ref={closeMenuButtonRef} className="jam jam-close"></span>
          <ul>
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Acerca de</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#gallery">Galería</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
