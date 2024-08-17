import "./App.css";
import React from "react";
import About from "./components/About";
import Resources from "./components/Resources";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Skills from "./components/Skills";
import DevSetup from "./components/DevSetup";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Work />
      <Skills />
      <DevSetup />
      <Resources />
    </main>
  );
}

export default App;
