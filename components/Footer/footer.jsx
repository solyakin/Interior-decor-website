// import React from 'react';
import styles from './footer.module.css';
// import { Col, Container, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';

const Footer = () =>{
    return(
        <>
        <div className={styles.footer}>
            <div className={styles.footer_main}>
                <h3 className={styles.company}>iHomes</h3>
                <p className={styles.footer_text}>We hold our customers in high esteem which is why our core values are integrity, excellence and transparency.</p>
                <div className="social-media-icons">
                    {/* <FontAwesomeIcon icon={['far', 'facebook']} /> */}
                </div>
            </div>
            <div className={styles.ft_wrapper}>
                <h3 className={styles.company}>Our Company</h3>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Works</li>
                    <li>Services</li>
                    <li>News/Blog</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className={styles.ft_wrapper}>
                <h3 className={styles.company}>Our services</h3>
                <ul className={styles.list}>
                    <li>Interiors</li>
                    <li>Consulting</li>
                    <li>Extras</li>
                    <li>Event Management</li>
                </ul>
            </div>
            <div className={styles.ft_wrapper}>
                <h3 className={styles.company}>Office</h3>
                <address>
                    <p>35 western lane drive</p>
                    <p>Victoria Island</p>
                    <p>Lagos.</p>
                    <p>+234 566 433 32</p>
                    <p>info@ihomesinteriors.com</p>
                </address>
            </div>
        </div>
        <div className={styles.banner}>
            <p>copyright 2021</p>
        </div>
        </>
    )
}

export default Footer;