import React from "react";
import "./App.css";

// composant
import Header from "./composant/Header.js";
import Jobs from "./composant/Jobs.js";
import Footer from "./composant/Footer.js";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Jobs></Jobs>
      <Footer></Footer>
    </div>
  );
}
export default App;
