import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBIcon,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import LogoSmall from "../logo/LogoSmall.png";

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' style={{ height: '80px', paddingTop: '20px' }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' style={{ color: '#74C274', marginRight: 'auto' }}>
          <img src={LogoSmall} className="d-block" alt="Small Logo" style={{ width: '200px', height: 'auto' }} />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas style={{ color: '#74C274' }} />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav} className="justify-content-center">
          <MDBNavbarNav style={{ justifyContent: "center", alignItems: "center" }}>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/Home' style={{ color: '#74C274' }}>
                Accueil
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/temoignages' style={{ color: '#74C274' }}>
                Témoignages
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{ color: '#74C274' }}>
                Qui sommes-nous ?
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink disabled style={{ color: '#74C274' }}>
                Galerie
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
