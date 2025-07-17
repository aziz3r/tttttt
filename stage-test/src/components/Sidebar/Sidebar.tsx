import React , {useState} from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [ isOpen,setIsOpen ] = useState(true);
  const [active, setActive] = useState("home");


  const toggleSidebar = () => {
      setIsOpen(!isOpen);
  }

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "🡐" : "🡒"}
      </button>

      <ul>
  <li className={`sidebar-btn ${active === "home" ? "active" : ""}`} onClick={() => setActive("home")}>
    <a href="#home">🏠 {isOpen && "Accueil"}</a>
  </li>
  <li className={`sidebar-btn ${active === "about" ? "active" : ""}`} onClick={() => setActive("about")}>
    <a href="#about">ℹ️ {isOpen && "À propos"}</a>
  </li>
  <li className={`sidebar-btn ${active === "projects" ? "active" : ""}`} onClick={() => setActive("projects")}>
    <a href="#projects">📁 {isOpen && "Projets"}</a>
  </li>
  <li className={`sidebar-btn ${active === "contact" ? "active" : ""}`} onClick={() => setActive("contact")}>
    <a href="#contact">✉️ {isOpen && "Contact"}</a>
  </li>
</ul>
<div className="bottom-button">
    <a href="#home">🔙 {isOpen && "Retour accueil"}</a>
</div>


    </aside>


  );
};


export default Sidebar;