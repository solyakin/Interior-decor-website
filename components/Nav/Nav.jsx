import { useState } from 'react';
import HamburgerMenu from '../Hamburger/hamburgerMenu';
import styles from '../Nav/nav.module.css';

const Nav = () => {

    const [state, setState] = useState({
        initial : false,
        clicked : null,
        setName : "Menu"
    })

    const [disabled , setDisabled] = useState(false);
    
    const handleClick = () =>{
        disabledMenu();
        if(state.initial === false){
            setState({
                initial : null,
                clicked : true,
                setName : "Close"
            });
        }else if(state.clicked === true){
            setState({
                clicked : !state.clicked,
                setName : "Menu"
            })
        } else if(state.clicked === false){
            setState({
                clicked : !state.clicked,
                setName : "Close"
            })
        }
    }

    const disabledMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false)
        }, 1200)
    }

    return(
        <header className={styles.header}>
            <div className={styles.navMenu}>
                <div className={styles.logo}>
                    <a href="/"><h4>B-Home.</h4></a>
                </div>

                <div className={styles.menu}>
                    <button disabled={disabled} onClick={handleClick}>Menu</button>
                </div>
            </div>
            <HamburgerMenu state={state}/>
        </header>
    )
}
export default Nav;