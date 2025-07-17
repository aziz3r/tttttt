import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import background from './imageBarNav/background.jpg';
import logo from './imageBarNav/logo.png';

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="overlay"></div>

      <img src={logo} alt="Logo" className="navbar-logo" />
      <span className="navbar-title">Projet test 15</span>

     <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Rechercher..."
          className="navbar-search"
          onChange={(e) => console.log('Recherche :', e.target.value)}
        />
      </div>

    </nav>
  );
};

export default Navbar;


