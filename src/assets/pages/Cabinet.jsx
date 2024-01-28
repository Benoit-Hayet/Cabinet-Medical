import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CabinetPic from "../Pictures/Cabinet/CabinetPic.jpg";


export default function Cabinet () {
  return (
    <div>
      <Navigation/>
    <MDBRipple rippleTag='a'>
      <img src={CabinetPic} className='img-fluid rounded'alt='example'/>
    </MDBRipple>
    <Footer/>
    </div>
  );
}
