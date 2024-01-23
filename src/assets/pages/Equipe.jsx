import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import Patricia from "../Pictures/Equipe/Patricia.jpg";
import Sylvie from "../Pictures/Equipe/Sylvie.jpg";

export default function Equipe() {
  return (
    <div>
      <Navigation />

      {/* Flex container for cards with margin-top */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>

        {/* First Card */}
        <MDBCard style={{ maxWidth: '18rem' }}>
          <MDBCardImage
            src={Patricia}
            position="top"
            alt="Card 1"
          />
          <MDBCardBody>
            <MDBCardTitle>Patricia</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>

        {/* Second Card with larger image */}
        <MDBCard style={{ maxWidth: '18rem'}}>
          <MDBCardImage
            src={Sylvie}
            position="top"
            alt="Card 2"
            height='auto'
          />
          <MDBCardBody>
            <MDBCardTitle>Sylvie</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>

      </div>

      <Footer />
    </div>
  );
}
