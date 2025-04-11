import React from "react";
import Gallery from "./Gallery"; // Importa la galería u otros componentes que deseas mostrar en el contenido principal

const Main = () => {
  return (
    <main>
    <section id="home" class="banner">
        <div class="banner-content ban-textos">
            <p>Bienvenidos a Nuestro Sitio WEB</p>
            <h1>Publicidad del Soconusco</h1>
            <a href="#about" class="boton-banner">Saber Más</a>
        </div>
    </section>

         <section id="about" class="about">
            <h2>Acerca de Nosotros</h2>
            <p>Somos una empresa 100% chiapaneca, nos apasiona el trabajo en equipo y nos dedicamos a brindar servicios de calidad, con responsabilidad y disciplina.</p>
        </section>

<section id="services">
        <div class="cajas__texto">
            <div class="box">Perifoneo movil, Spots</div>
            <div class="box">Reparto de Folletos</div>
            <div class="box">Vallas Moviles</div>
            <div class="box">Activaciones, Chicas de imagen</div>
            <div class="box">Skydancer</div>
            <div class="box">Cabina de aire</div>
        </div>
    </section>
      <Gallery />
    </main>
  );
};

export default Main;
