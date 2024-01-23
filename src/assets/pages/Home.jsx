import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import AccueilCab from "../Pictures/Home/AccueilCab.jpg";


const Home = () => (
  <div>
    <Navigation />
    <img src={AccueilCab} className="d-block w-100" alt="AccueilCab" />
    <Footer />
  </div>
);

export default Home;
