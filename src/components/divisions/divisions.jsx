import React from 'react';
import styles from '../../styles/divisions.module.css';

const Divisions = () => {
    return (
        <div className={styles.galleryContainer}  id="division-section">
            <h1 className={styles.heading}>DIVISIONS</h1>
            <div className={styles.imagesWrapper}>
                <div className={styles.imageContainer}>
                    <a href='/consulting'>
                        <img src="/Consulting.jpg" alt="Image 1" className={styles.ellipticalImage} />
                        <p className={styles.imageTitle}>CONSULTING AND PRODUCT MANAGEMENT</p>
                    </a>
                </div>
                <div className={styles.imageContainer}>
                    <a href="/finance">
                        <img src="Finance.jpg" alt="Image 2" className={styles.ellipticalImage} />
                        <p className={styles.imageTitle}>FINANCE AND QUANT</p>
                    </a>
                </div>
                <div className={styles.imageContainer}>
                    <a href="/analytics">
                        <img src="Analytics.jpg" alt="Image 3" className={styles.ellipticalImage} />
                        <p className={styles.imageTitle}>DATA SCIENCE AND ANALYTICS</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Divisions;
