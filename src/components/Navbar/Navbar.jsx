import { useState } from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import profile from '../../assets/profile.png'
import heart from '../../assets/heart.png'
import cart from '../../assets/cart.png'
import language from '../../assets/Language.png'
import menu from '../../assets/menu.png'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="top-navbar">
          <div className="nav-logo">
          <img
            src={menu}
            className="menu-icon"
            alt="menu toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          
            <img src={logo} alt="Brand Logo" className="logo-img" />
          </div>
           <div className="nav-search">
             <h2 className='logo-text'>LOGO</h2> 
            </div>

          <div className="nav-icons">
            <img src={search} className="icon" alt='search' />
            <img src={heart} className="icon" alt='heart' />
            <img src={cart} className="icon" alt='cart' />
            <img src={profile} className="icon hide-mob" alt='profile' />
            <img src={language} className="language-icon hide-mob" alt='language' />
          </div>
        </div>

        <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
          <li className='nav-item' >SHOP</li>
          <li className='nav-item' >SKILLS</li>
          <li className='nav-item' >STORIES</li>
          <li className='nav-item' >ABOUT</li>
          <li className='nav-item' >CONTACT US</li>
        </ul>

      </div>
    </header>
  );
};

export default Navbar;
