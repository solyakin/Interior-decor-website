import styles from "../../styles/Contact.module.css"

const Contact = () => {
    return(
        <div className={styles.Contact}>
            <p>contact</p>
            <h1>LET'S WORK <br></br>TOGETHER <span><br></br>Connect</span></h1>
            <div className={styles.grid}>
                <div className={styles.email}>
                    <h3>REACH US</h3>
                    <p>info@ihomesinteriors.com</p>
                    <p>+234 566 433 32</p>
                </div>
                <div className={styles.email}>
                    <h3>SOCIAL MEDIA</h3>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                </div>
                <div className={styles.address}>
                    <h3>OFFICE</h3>
                    <address>
                        <p>35 western lane drive</p>
                        <p>Victoria Island</p>
                        <p>Lagos.</p>
                    </address>
                    
                </div>
            </div>
        </div>
    )
};

export default Contact;