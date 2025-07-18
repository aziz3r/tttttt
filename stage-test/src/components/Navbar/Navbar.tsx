import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import background from './imageBarNav/background.jpg';
import logo from './imageBarNav/logo.png';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
const { i18n, t } = useTranslation();

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  console.log("Langue changée vers :", i18n.language);
};



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
  placeholder={t('navbar.search')}
  className="navbar-search"
  onChange={(e) => console.log('Recherche :', e.target.value)}
/>

      </div>
        <div className="language-switcher" style={{ zIndex: 3, position: 'relative' }}>
        <button onClick={() => changeLanguage('fr')}>🇫🇷</button>
        <button onClick={() => changeLanguage('en')}>🇬🇧</button>
</div>



    </nav>
  );
};

export default Navbar;


