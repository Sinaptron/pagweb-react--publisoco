import React from "react";
import Navbar from "./Navbar"; // O "./components/Navbar" si está en una carpeta "components"
import Main from "./Main"; // O "./components/Main"
import Gallery from "./Gallery"; // O "./components/Gallery"
import ContactForm from "./ContactForm"; // Cambia "Contacto" a "ContactForm" para consistencia
import Footer from "./Footer"; // O "./components/Footer"
import "../styles/App.css"; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;