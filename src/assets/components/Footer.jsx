import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted container-footer'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon className="me-3" />
                Cabinet Médical
              </h6>
              <p>
                Une équipe attentionnée et a l'écoute située au coeur de Bordeaux.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>HORAIRES D’OUVERTURE</h6>
              <p>
              <MDBIcon icon="clock />" className="me-2" />
              Le cabinet est ouvert le lundi au vendredi de 09h00 à 19h00.
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Les consultations se font uniquement sur rendez vous.
                </a>
              </p>
              <p>
              <MDBIcon icon="calendar-alt" className="me-2" />
              Vous avez la possibilité de prendre rendez-vous en ligne via Doctolib
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <MDBIcon icon="map-marker-alt" className="me-2" />
              139 Avenue de Bordeaux <br/>33000 Bordeaux
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                cabinetinfirmière@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}