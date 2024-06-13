import React from 'react';
import styles from "../../styles/team.module.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Team = () => {
    return (
        <div className={styles.galleryContainer}>
            <h1 className={styles.heading}>TEAM</h1>
            <div className={styles.imagesWrapper}>
                <div className={styles.imageContainer}>
                    <img src="https://th.bing.com/th/id/R.ef6b1c102f8c9d91c6d079844f701255?rik=5GsF9LI424HfFA&riu=http%3a%2f%2feskipaper.com%2fimages%2flandscape-wallpaper-hd-10.jpg&ehk=519130nVNM1Nik8Sj1VriQGc%2bTzk5oB18rji3yocypQ%3d&risl=&pid=ImgRaw&r=0" alt="Image 1" className={styles.ellipticalImage} />
                    <p className={styles.imageTitle}>CONSULTING HEAD</p>
                    <p className={styles.imageTitle2}>Prasoon Pandey</p>
                    <a href='https://www.linkedin.com/in/the-prasoon-pandey/' className={styles.icon}><LinkedInIcon /></a>
                    <a href='https://www.instagram.com/casual_insurgent/' className={styles.icon}><InstagramIcon /></a>
                </div>
                <div className={styles.imageContainer}>
                    <img src="https://th.bing.com/th/id/R.ef6b1c102f8c9d91c6d079844f701255?rik=5GsF9LI424HfFA&riu=http%3a%2f%2feskipaper.com%2fimages%2flandscape-wallpaper-hd-10.jpg&ehk=519130nVNM1Nik8Sj1VriQGc%2bTzk5oB18rji3yocypQ%3d&risl=&pid=ImgRaw&r=0" alt="Image 2" className={styles.ellipticalImage} />
                    <p className={styles.imageTitle}>FINANCE HEAD</p>
                    <p className={styles.imageTitle2}>Shivam Sharma</p>
                    <a href='https://www.linkedin.com/in/shivam-sharma-3465b9290/' className={styles.icon}><LinkedInIcon /></a>
                    <a href='https://www.instagram.com/shivamsharma_2004?igsh=eHBkZ3Jta215d2Vp&utm_source=qr' className={styles.icon}><InstagramIcon /></a>
                </div>
                <div className={styles.imageContainer}>
                    <img src="https://th.bing.com/th/id/R.ef6b1c102f8c9d91c6d079844f701255?rik=5GsF9LI424HfFA&riu=http%3a%2f%2feskipaper.com%2fimages%2flandscape-wallpaper-hd-10.jpg&ehk=519130nVNM1Nik8Sj1VriQGc%2bTzk5oB18rji3yocypQ%3d&risl=&pid=ImgRaw&r=0" alt="Image 3" className={styles.ellipticalImage} />
                    <p className={styles.imageTitle}>ANALYTICS HEAD</p>
                    <p className={styles.imageTitle2}>Garima Upadhyay</p>
                    <a href='https://www.linkedin.com/in/garima-upadhyay-783450262' className={styles.icon}><LinkedInIcon /></a>
                    <a href='https://www.instagram.com/gtg_047?igsh=MnB2Y3h1MXltNGQw' className={styles.icon}><InstagramIcon /></a>
                </div>
            </div>
            <button className={styles.button}><p>View Full Team</p></button>
        </div>
    );
};

export default Team;
