import {React,useState ,useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link  } from "react-router-dom";
import cfalogo from "../../assets/cfalogo.png";
// import styles from "../../styles/header.module.css";
import styles from "../../styles/header.module.css";

import '../../index.css';
// import { BottomNavigation } from "@mui/material";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseEnter = () => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const newTimer = setTimeout(() => {
      setDropdownOpen(false);
    }, 250);
    setTimer(newTimer);
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);
   
  const navigateToBottom = () => {
    // const { pathname } = window.location;
   
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
;
  
  return (
    <div className={styles.header}>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-black">
          <Container fluid>
            <div>
              <Link to="/">
                <img src={cfalogo} alt="CFA logo"  className={styles.cfalogo} />
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
                  {/* <NavDropdown title={<span className={styles.navbardropdowntitle}>C-F-A</span>} id={`offcanvasNavbarDropdown-expand-${expand} `}   className={styles.navbardropdown} >
                  <div className={styles.dropdownmenu}>
                  <Link className={styles.navdropdownitem} to="/consulting">Consulting</Link>
                      <Link className={styles.navdropdownitem} to="/finance">Finance</Link>
                      <Link className={styles.navdropdownitem} to="/analytics">Analytics</Link>
                  </div>
                  </NavDropdown> */}
                  <NavDropdown
                    title={<span className={styles.navbardropdowntitle}>C-F-A</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className={styles.navbardropdown}
                    show={dropdownOpen}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavDropdown.Item as={Link} className={styles.navdropdownitem} to="/consulting">Consulting</NavDropdown.Item>
                    <NavDropdown.Item as={Link} className={styles.navdropdownitem} to="/finance">Finance</NavDropdown.Item>
                    <NavDropdown.Item as={Link} className={styles.navdropdownitem} to="/analytics">Analytics</NavDropdown.Item>
                  </NavDropdown>
                  <Link className={`nav-link text-white`} to="/projects">Projects</Link>
                  <Link  className={`nav-link text-white`} to="/">Events</Link>
                  <Link  className={`nav-link text-white`} to="/resources">Resources</Link>
                  <Link  className={`nav-link text-white `} to="/team">Team</Link>
                  {/* <Link  className={`nav-link text-white `} to="/footer" onClick={navigateToBottom}>Contact Us</Link> */}
                  <a href="#footer"  className={`nav-link text-white `} onClick={navigateToBottom} >Contact Us</a>
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
