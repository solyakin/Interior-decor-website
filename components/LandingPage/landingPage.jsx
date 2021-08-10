import Image from 'next/Image';
// import Link from 'next/link';
import bigImage from '../../public/room4.jpg';
import styles from '../LandingPage/Landing.module.css';
import image from '../../public/room2.jpg';
import image2 from '../../public/room3.jpg';
import image4 from '../../public/room6.jpg';
import image5 from '../../public/room7.jpg';

const LandingPage = () => {
    return(
        <>
        <div className={styles.landing_page}>
            <div className={styles.wrapper}>
                <div className={styles.left_hero}>
                    <div className={styles.social}>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <h1 className={styles.text}>Let's Make Your <br></br>Interior Better</h1>
                    <p className={styles.scroll}>Scroll Down ____</p>
                </div>
                
                <div className={styles.image_slide}>
                    <Image  src='/room3.jpg' width="600px" height="450px" alt="room-hero" />
                    <div className={styles.directions}>
                        <p>01 ___ 08</p>
                    </div>
                </div>
            </div>
        </div>
        <section className={styles.section}>
            <div className={styles.content}>
                <div className="left-image">
                    <Image src="/interior.png" width="500px" height="400px" alt="room" />
                </div>
                <div className={styles.text_container}>
                    <h3 className={styles.heading}>What we known for</h3>
                    <p className={styles.text_content}>Interior designers makes interior spaces functional, <br></br> safe and beautiful for almost every type of building</p>
                    <a href="!#">Explore more</a>
                </div>
            </div>
        </section>

        <section className={styles.services}>
            <div className={styles.service_wrapper}>
                <h3 className={styles.signature}>Signature</h3>
                <div className={styles.service_img}>
                    <Image src={bigImage} alt="services"/>
                </div>
                <div className={styles.smaller_wrapper}>
                    <div className={styles.wrapper_1}>
                        <p className={styles.span}>1</p> 
                        <div className={styles.small_heading}>
                            <h4 className={styles.service_heading} >Design with perfection</h4>
                            <p className={styles.inner_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        
                    </div>
                    <div className={styles.wrapper_2}>
                        <p className={styles.span}>2</p> 
                        <div className={styles.small_heading}>
                            <h4 className={styles.service_heading}>Best client support</h4>
                            <p className={styles.inner_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div> 
                        
                    </div>
                    <div className={styles.wrapper_3}>
                        <p className={styles.span}>3</p>
                        <div className={styles.small_heading}>
                            <h4 className={styles.service_heading}>Professional Architect</h4>
                            <p className={styles.inner_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div> 
            
        </section>
        <section className={styles.explore}>
            <div className={styles.explore_content}>
                <h3 className={styles.explore_heading}>We provide you with the <span className={styles.simple}>simple ways</span> <br></br>to decorate your interior</h3>
                <p className={styles.explore_text}>Our rich and innovative expertise will provide with brilliant ideas to help you manage your spaces in the most clean and comfortable way. Daily we roll out new ideas for different interior spaces to meet customer's expectations</p>
                <p className={styles.explore_text}>Our rich and innovative expertise will provide with brilliant ideas to help you manage your spaces in the most clean and comfortable way. Daily we roll out new ideas for different interior spaces to meet customer's expectations</p>
                <a>Get started</a>
            </div>
            <div className={styles.explore_images}>
                <Image className={styles.photo} src="/room6.jpg" width="550px" height="500px" alt="decor" />
            </div>
        </section>
        <section className={styles.gallery}>
            <h3 className={styles.work_heading}>Our Recent Works</h3>
            <div className={styles.gallery_images}>
                <Image className={styles.img_one} src={image}/>
                <Image className={styles.img_two} src={image2}/>
                <Image className={styles.img_three} src={image4}/>
                <Image className={styles.img_four} src={image4}/>
                <Image className={styles.img5} src={image5}/>
                {/* <Image className={styles.img_one} src="/room7.jpg" width="550px" height="500px"/>
                <Image className={styles.img_two} src="/room2.jpg" width="250px" height="400px"/>
                <Image className={styles.img_three} src="/room6.jpg" width="250px" height="400px"/>
                <Image className={styles.img_four} src="/room3.jpg" width="250px" height="400px"/>
                <Image className={styles.img5} src="/room5.jpg" width="250px" height="400px"/> */}
            </div> 
        </section>
        <section className={styles.connect}>
            <p>GET IN TOUCH</p>
            <h2>LET'S WORK TOGETHER</h2>
            <p className={styles.connect_text}>connect</p>
            <p className={styles.call}>CALL +234 566 433 32</p>
        </section>
        </>
    )
}

export default LandingPage;