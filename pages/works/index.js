import styles from '../../styles/Work.module.css';
import Image from 'next/Image';

const Works = () => {
    return(
        <div className={styles.project}>
            <h1>BESPOKEN <br></br>TURNKEY<br></br> DESIGN <br></br><span>Projects</span></h1>

            <div className={styles.project_content}>
                <div className={styles.image_1}>
                    <Image src="/room3.jpg" width="350px" height="450px" alt="room9"/>
                    <h4 className={styles.name}>BOUTIQUE HOTEL</h4>
                </div>
                <div className={styles.image_2}>
                    <h4 className={styles.name}>PARALLEL DOME HOMES</h4>
                    <Image src="/room6.jpg" width="350px" height="450px" alt="room9" />
                </div>
                <div className={styles.image_3}>
                    <h4 className={styles.name}>CRUST APARTMENT</h4>
                    <Image src="/image3.jpg" width="350px" height="450px" alt="room9" />
                </div>
                <div className={styles.image_4}>
                    <h4 className={styles.name}>BLUE LIGHT PARLOUR</h4>
                    <Image src="/room5.jpg" width="350px" height="450px" alt="room9" />
                </div>
            </div>

            <section className={styles.connect}>
                <p className={styles.touch}>GET IN TOUCH</p>
                <h2>LET'S WORK TOGETHER</h2>
                <p className={styles.connect_text}>connect</p>

                <p className={styles.call}>CALL +234 566 433 32</p>
            </section>
        </div>
    )
};

export default Works;