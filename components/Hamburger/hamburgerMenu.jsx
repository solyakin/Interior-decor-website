import styles from '../Nav/nav.module.css';
import { useEffect, useRef } from 'react';


const HamburgerMenu = ({state}) => {

    let menu = useRef(null)

    useEffect(() => {
        if(state.clicked === false){
            //close the menu
            menu.style.display = "none";
    
        }else if(state.clicked === true ||(state.clicked === true && state.initial === null)){
            //open menu
            menu.style.display = "block";
        }
    })

    return(
        <div ref = {el => {menu = el } } className={styles.hamburger}>
            <div className={styles.secondarycolorwrapper}></div>
            <div className={styles.menuLayer}>
                <div className={styles.menucity}>
                <div className={styles.container}>
                    <div  className={styles.wrapper}>
                        <div className={styles.content}>
                            <nav>
                                <span>
                                    <a href="/about">Discover Us</a>
                                </span>
                                <span>
                                    <a href="/works">Our Projects</a>
                                </span>
                                <span>
                                    <a href="/contact">Contact us</a>
                                </span>
                            </nav>
                            <div className={styles.promise}>
                                <h4>Our Promise</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis nesciunt culpa asperiores, quos dignissimos recusandae molestias magnam, ex quidem dolorum excepturi dolores. Fuga, quas quae </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.social}>
                        <ul>
                            <li>Social Media:</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Tiktok</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu;