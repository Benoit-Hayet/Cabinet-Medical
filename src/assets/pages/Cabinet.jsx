import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Cabinet() {
  return (
    <div>
      <Navigation/>
    <MDBRipple rippleTag='a'>
      <img
        src='https://mdbootstrap.com/img/new/standard/city/044.webp'
        className='img-fluid rounded'
        alt='example'
      />
    </MDBRipple>
    <Footer/>
    </div>
  );
}