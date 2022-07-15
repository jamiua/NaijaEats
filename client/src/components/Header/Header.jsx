import logo from "../../assets/NaijaEats-logo.png"
import "./Header.scss";

function Header() {
    return(
        <section> 
           <header className="header">
            <img src={logo} alt="Naija Eats Logo" className="header__logo" />
           </header>
        </section>
    )
        
}

export default Header;