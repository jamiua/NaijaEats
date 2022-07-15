import logo from "../../assets/NaijaEats-logo.png"

function Header() {
    return(
        <section> 
            <img src={logo} alt="Naija Eats Logo" className="logo" />
        </section>
    )
        
}

export default Header;