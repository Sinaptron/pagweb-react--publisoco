import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Location from "./components/Location"; // Importa el nuevo componente
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Gallery />
      <ContactForm />
      <Location /> {/* Agrega el componente Location aquí */}
      <Footer />
    </div>
  );
};

export default App;
