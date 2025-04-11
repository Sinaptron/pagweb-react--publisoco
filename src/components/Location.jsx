// src/components/Location.jsx

import React from 'react';

const Location = () => {
  return (
    <section className="localizacion">
      <div className="map">
        <iframe
          className="map__iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1363.2707479343069!2d-92.27088478244728!3d14.886200486513856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e0f27504337e7%3A0x4bd2d9ddcdfb3a17!2sPublicidad%20del%20Soconusco!5e0!3m2!1ses-419!2smx!4v1675664275372!5m2!1ses-419!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación de Publicidad del Soconusco"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
