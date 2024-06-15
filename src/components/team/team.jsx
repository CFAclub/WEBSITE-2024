import React from 'react';
import styles from "../../styles/team.module.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';

const Team = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.galleryContainer}>
            <h1 className={styles.heading}>TEAM</h1>
            <div className={styles.imagesWrapper}>
                <div className={styles.imageContainer}>
                    <img src="prasoon.jpg" alt="Image 1" className={styles.ellipticalImage} />
                    <p className={styles.imageTitle}>CONSULTING HEAD</p>
                    <p className={styles.imageTitle2}>Prasoon Pandey</p>
                    <a href='https://www.linkedin.com/in/the-prasoon-pandey/' className={styles.icon}><LinkedInIcon /></a>
                    <a href='https://www.instagram.com/casual_insurgent/' className={styles.icon}><InstagramIcon /></a>
                </div>
                <div className={styles.imageContainer}>
                    <img src="shivam.jpg" alt="Image 2" className={styles.ellipticalImage} />
                    <p className={styles.imageTitle}>FINANCE HEAD</p>
                    <p className={styles.imageTitle2}>Shivam Sharma</p>
                    <a href='https://www.linkedin.com/in/shivam-sharma-3465b9290/' className={styles.icon}><LinkedInIcon /></a>
                    <a href='https://www.instagram.com/shivamsharma_2004?igsh=eHBkZ3Jta215d2Vp&utm_source=qr' className={styles.icon}><InstagramIcon /></a>
                </div>
                <div className={styles.imageContainer}>
                    <img src="garima.jpg" alt="Image 3" className={styles.ellipticalImage} />
                    <p className={styles.imageTitle}>ANALYTICS HEAD</p>
                    <p className={styles.imageTitle2}>Garima Upadhyay</p>
                    <a href='https://www.linkedin.com/in/garima-upadhyay-783450262' className={styles.icon}><LinkedInIcon /></a>
                    <a href='https://www.instagram.com/gtg_047?igsh=MnB2Y3h1MXltNGQw' className={styles.icon}><InstagramIcon /></a>
                </div>
            </div>
            <button onClick={() => { navigate('team') }} className={styles.button}><p>View Full Team</p></button>
        </div>
    );
};

export default Team;
