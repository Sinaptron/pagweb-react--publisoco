import React from "react";

// Importa las imágenes con rutas relativas a 'src'
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";
import image8 from "../assets/images/image8.jpg";
import image9 from "../assets/images/image9.jpg";


const Gallery = () => {
  return (
    <div className="gallery">
      {/* Primera Galería */}
      <section className="gallery-images">
        <h2>Galeria Uno</h2>
        <div className="gallery-images">
        <img src={image1} alt="Im 1" />
        <img src={image2} alt="Ima 2" />
        <img src={image3} alt="Imag 3" />
        <img src={image4} alt="I m a g e 4" />
        <img src={image5} alt="Imag 5" />
        <img src={image6} alt="Img 6" />
        </div>
      </section>



 
      {/* Segunda Galería */}
      <section className="gallery">
        <h2>Galeria Dos</h2>
        <div className="gallery-images">
        <img src={image7} alt="Im 7" />
        <img src={image8} alt="Ima 8" />
        <img src={image9} alt="Imag 9" />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
