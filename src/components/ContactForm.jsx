import React from "react";

const ContactForm = () => {
  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario, como enviar datos a un servidor
    console.log("Formulario enviado");
  };

  return (
    <section id="contact" className="contact">
      <form onSubmit={handleSubmit}>
        <h2>Contáctanos</h2>
        <input placeholder="Nombre" type="text" required /><br />
        <input placeholder="Correo" type="email" required /><br />
        <textarea placeholder="Mensaje" required></textarea>
        {/* Botón de envío */}
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
