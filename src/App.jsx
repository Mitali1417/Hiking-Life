import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import HikingClasses from "./components/HikingClasses";
import RockClimbing from "./components/RockClimbing";
import RecoverFromHike from "./components/RecoverFromHike";
import Activities from "./components/Activities";
import PlaceToVisit from "./components/PlaceToVisit";
import IceClimbing from "./components/IceClimbing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HikingClasses />
      <RockClimbing />
      <RecoverFromHike />
      <Activities />
      <PlaceToVisit />
      <IceClimbing />
      <Footer />
    </div>
  );
};

export default App;
