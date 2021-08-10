import Footer from '../Footer/footer';
import Nav from "../Nav/Nav";

const Layout = ({ children})=> {
    return(
        <div>
            <Nav/>
            { children }
            <Footer/>
        </div>
    )
}

export default Layout;