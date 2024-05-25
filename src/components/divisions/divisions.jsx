import React from 'react';
import styles from '../../styles/divisions.module.css';

const Divisions = () => {
    return (
        <div className={styles.galleryContainer}>
            <h1 className={styles.heading}>DIVISIONS</h1>
            <div className={styles.imagesWrapper}>
                <div className={styles.imageContainer}>
                    <img src="https://th.bing.com/th/id/R.ef6b1c102f8c9d91c6d079844f701255?rik=5GsF9LI424HfFA&riu=http%3a%2f%2feskipaper.com%2fimages%2flandscape-wallpaper-hd-10.jpg&ehk=519130nVNM1Nik8Sj1VriQGc%2bTzk5oB18rji3yocypQ%3d&risl=&pid=ImgRaw&r=0" alt="Image 1" className={styles.ellipticalImage} />
                    <p className={styles.imageTitle}>CONSULTING AND PRODUCT MANAGEMENT</p>
                </div>
                <div className={styles.imageContainer}>
                    <img src="https://th.bing.com/th/id/R.ef6b1c102f8c9d91c6d079844f701255?rik=5GsF9LI424HfFA&riu=http%3a%2f%2feskipaper.com%2fimages%2flandscape-wallpaper-hd-10.jpg&ehk=519130nVNM1Nik8Sj1VriQGc%2bTzk5oB18rji3yocypQ%3d&risl=&pid=ImgRaw&r=0" alt="Image 2" className={styles.ellipticalImage} />
                    <p className={styles.imageTitle}>FINANCE AND QUANT</p>
                </div>
                <div className={styles.imageContainer}>
                    <img src="https://th.bing.com/th/id/R.ef6b1c102f8c9d91c6d079844f701255?rik=5GsF9LI424HfFA&riu=http%3a%2f%2feskipaper.com%2fimages%2flandscape-wallpaper-hd-10.jpg&ehk=519130nVNM1Nik8Sj1VriQGc%2bTzk5oB18rji3yocypQ%3d&risl=&pid=ImgRaw&r=0" alt="Image 3" className={styles.ellipticalImage} />
                    <p className={styles.imageTitle}>DATA SCIENCE AND ANALYTICS</p>
                </div>
            </div>
        </div>
    );
};

export default Divisions;
