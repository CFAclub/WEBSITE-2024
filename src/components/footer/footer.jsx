import React from 'react';
import 'tailwindcss/tailwind.css';
import styles from '../../styles/footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import { faInstagram ,faLinkedIn } from '@fortawesome/free-brands-svg-icons';

// import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faMapMarkerAlt, faPhone, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <div className={styles.container}>
      
          <div className={styles.responsive}>
            <h4 className="text-2xl mb-2 font-semibold ">Our office</h4>
            <ul>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Indian Institute of Technology Indore <br/>Madhya Pradesh India - 453552
              <br/>
             <FontAwesomeIcon icon={faPhone} /> Phone: 0731 243 8700
             <br/>
              <FontAwesomeIcon icon={faEnvelope} /> Email: info@iiti.ac.in
              <br/>
              <a href='https://www.instagram.com/cfaclub_iiti/' target='_blank'><span><FontAwesomeIcon icon={faInstagram} style={{height : '25px' , width : '25px' , margin : '4px' , color :'white'}}/></span></a>
              <a href='https://www.linkedin.com/company/cfa-club-iit-indore/' target='_blank'><span><FontAwesomeIcon icon={faLinkedin} style={{height : '25px' , width : '25px' , margin : '4px' ,color :'white'}} /></span></a>
             
                
            </ul>
          </div>

          <div className={`mb-3 ${styles.responsive }`}>
            <h4 className='text-2xl mb-2 font-semibold '>Quick Links</h4>
            <ul>
            <a href="#hero-section" style={{color : 'white' ,textDecoration :'none'}}><FontAwesomeIcon icon={faArrowRight} onClick={() => scrollToSection('hero-section')}/>About Us</a>
            <br/>
           <Link to="/team" style={{color : 'white' ,textDecoration :'none'}}> <FontAwesomeIcon icon={faArrowRight} />
            Team</Link>
            <br/>
            
            {/* <FontAwesomeIcon icon={faArrowRight} />Our Projects */}
            <Link to="/projects" style={{color : 'white' ,textDecoration :'none'}}> <FontAwesomeIcon icon={faArrowRight} />
            Our Projects</Link>
            <br/>
            {/* <FontAwesomeIcon icon={faArrowRight} />Gallery */}
            <a href='/' style={{color : 'white' ,textDecoration :'none'}}><FontAwesomeIcon icon={faArrowRight} />Gallery</a>
            <br/>
            
            </ul>
          </div>

          <div >
            <div className="embed-responsive embed-responsive-16by9 ">
              <iframe
                className={`embed-responsive-item  border border-white-300 rounded ${styles.responsive}`}
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8662.689859842465!2d75.91591795250835!3d22.526657242985877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1siit%20indore!5e1!3m2!1sen!2sin!4v1716480371279!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
               
              ></iframe>
              <br />
              {/* <center>MAP</center> */}
            </div>
          </div>
      
      </div>
      
      <div className={styles.container1}>
        <center>Copyright &#169; 2019-2024 | Consulting ,Finance And Analytics Club , IIT Indore</center>
      </div>
    </>
  );
}

export default Footer;
