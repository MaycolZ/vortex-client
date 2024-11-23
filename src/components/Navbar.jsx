import './../style/navbar.css';
import logo from "./../assets/imagenLogo.jpg"

function Navbar() {
    return (
        <div className='nav'>
            <a href="https://www.google.com" className='logo-link'>
                <img src={logo} alt="Logo de la empresa" className='logo'/>
            </a>

            <div className="medio">
                <a href="https://www.google.com">Home</a>
                <a href="https://www.google.com">About</a>
                <a href="https://www.google.com">Books</a>
            </div>
            <div className="links">
                <a href="https://www.google.com">Sign In</a>
                <a href="https://www.google.com">Sign In</a>
            </div>
        </div>
    )
  }

  export default Navbar