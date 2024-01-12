import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import Navigation from '../components/Navigation';

const Temoignages = () => {
  return (
    <div>
      <Navigation />
      <MDBCard>
        <MDBCardBody>
          <MDBCardText>
            <span style={{ color: 'yellow' }}>
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
            </span>
            <small className='text-muted'>Il y a 10 mois</small>
          </MDBCardText>
          <MDBCardText>
            "Merci encore à Patricia et Sylvie pour leurs soins. Très professionnels et de bonne humeur. Je recommande sans hésiter !"
          </MDBCardText>
          <MDBCardTitle style={{ fontSize: '0.9rem' }}>Francine G.</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBCardBody>
          <MDBCardText>
            <span style={{ color: 'yellow' }}>
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
            </span>
            <small className='text-muted'>Il y a 10 mois</small>
          </MDBCardText>
          <MDBCardText>
            "Merci encore à Patricia et Sylvie pour leurs soins. Très professionnels et de bonne humeur. Je recommande sans hésiter !"
          </MDBCardText>
          <MDBCardTitle style={{ fontSize: '0.9rem' }}>Francine G.</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBCardBody>
          <MDBCardText>
            <span style={{ color: 'yellow' }}>
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
              <i class="fas fa-star"></i>{' '}
            </span>
            <small className='text-muted'>Il y a 10 mois</small>
          </MDBCardText>
          <MDBCardText>
            "Merci encore à Patricia et Sylvie pour leurs soins. Très professionnels et de bonne humeur. Je recommande sans hésiter !"
          </MDBCardText>
          <MDBCardTitle style={{ fontSize: '0.9rem' }}>Francine G.</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
       
    </div>
  );
};

export default Temoignages;
