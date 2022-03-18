import React from "react";
// component imports
import { Cta } from "../components/cta/Cta";
import { Map } from "../components/map/Map";
import { Economy } from "./economy/Economy";
import { Footer } from "./footer/Footer";
import { Navigation } from "./navigation/Navigation";

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Cta />
      <Map />
      <Economy />
      <Footer />
    </div>
  );
};

export default App;
