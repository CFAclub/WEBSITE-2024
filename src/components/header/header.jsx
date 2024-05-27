import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import cfalogo from "../../assets/cfalogo.png";
// import styles from "../../styles/header.module.css";
import styles from "../../styles/header.module.css";
import '../../index.css';

function Header() {
  return (
    <div className="header">
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-black">
          <Container fluid>
            <div>
              <Link to="/">
                <img src={cfalogo} alt="CFA logo" style={{marginLeft: '1vw',height : '10vh' , marginTop : '1vh'}} />
              </Link>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{backgroundColor : '#8292a7'}}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{color : 'white' , backgroundColor : 'black'}}
            >
              <Offcanvas.Header closeButton style={{backgroundColor : 'rgb(63 72 83)'}}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{  color: 'white', fontFamily: '"Poppins", sans-serif' }}>
                   CFA - IIT Indore <hr/>
                </Offcanvas.Title>
                
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className={`justify-content-end flex-grow-1 pe-3 ${styles.headerText}`} style={{marginRight : '10vw' }}>
                  <NavDropdown title={<span className={styles.navbardropdowntitle}>C-F-A</span>} id={`offcanvasNavbarDropdown-expand-${expand} `}  >
                    <Link className={styles.navdropdownitem}  to="/consulting">Consulting</Link>
                    <Link className={styles.navdropdownitem}  to="/finance">Finance</Link>
                    <Link className={styles.navdropdownitem}  to="/analytics">Analytics</Link>
                  </NavDropdown>
                  <Link className={`nav-link text-white`} to="/projects">Projects</Link>
                  <Link  className={`nav-link text-white`} to="/">Events</Link>
                  <Link  className={`nav-link text-white`} to="/resources">Resources</Link>
                  <Link  className={`nav-link text-white `} to="/team">Team</Link>
                  <Link  className={`nav-link text-white `} to="/">Contact Us</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
