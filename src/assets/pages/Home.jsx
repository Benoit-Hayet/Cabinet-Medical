import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import AccueilCab from "../logo/AccueilCab.jpg";

const Home = () => (
  <div>
    <Navigation />
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem>
        <img src={AccueilCab} className='d-block w-100' alt='AccueilCab' />
      </MDBCarouselItem>
    </MDBCarousel>
    <Footer />
  </div>
);

export default Home;
