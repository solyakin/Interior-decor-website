import styles from '../../styles/About.module.css';
import Link from  "next/link";
import Image from 'next/Image';

const About = () => {
    return(
        <div className={styles.about}>
            <section className={styles.about_hero}>
                <h1>BESPOKEN <br></br>TURNAROUND<br></br> DESIGNER <br></br><span>About</span></h1>
                <p>iHomes is high-end interior design company offering a full range of rich quality interior design services with the aim of making interior space functional, safe and beautiful. 
                </p>
                <div className={styles.about_content}>
                    <div className={styles.about_img}>
                        <Image src='/chair.jpg' width="300px" height="400px" alt="image"/>
                    </div>
                    <div className={styles.about_text}>
                        <h3 className={styles.explore_heading}>We provide you with the <span className={styles.simple}>simple ways</span> <br></br>to decorate your interior</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum sed animi blanditiis harum reprehenderit repudiandae, pariatur maiores tenetur minus in consectetur enim assumenda! Et autem veritatis molestias tempore aut.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum sed animi blanditiis harum reprehenderit repudiandae, pariatur maiores tenetur minus in consectetur enim assumenda! Et autem veritatis molestias tempore aut.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum sed animi blanditiis harum reprehenderit repudiandae, pariatur maiores tenetur minus in consectetur enim assumenda! Et autem veritatis molestias tempore aut.</p>
                        <Link href="#"><a>Learn <span>more</span></a></Link>
                    </div> 
                </div>
            </section>
            <section className={styles.team}>
                <h1>Meet The Incredible <br></br><span>TEAM</span></h1>
                <div className={styles.team_image}>
                    <div className={styles.team_1}>
                        <figure>
                            <Image src='/chair.jpg' width="250px" height="300px" alt="image"/>
                            <figcaption>Head of Operations/Strategy</figcaption>
                        </figure>
                    </div>
                    <div className={styles.team_2}>
                        <figure>
                            <Image src='/chair.jpg' width="250px" height="300px" alt="image"/>
                            <figcaption>Head of Operations/Strategy</figcaption>
                        </figure>
                    </div>
                    <div className={styles.team_3}>
                        <figure>
                            <Image src='/chair.jpg' width="250px" height="300px" alt="image"/>
                            <figcaption>Head of Operations/Strategy</figcaption>
                        </figure>
                    </div>
                </div>
            </section>
            
        </div>
    )
};

export default About;