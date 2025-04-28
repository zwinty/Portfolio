import './Navigation.css';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen]);

  return (
    <div className="nav-container">
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-items ${menuOpen ? 'show' : ''}`}>
        <ul>
         <a href="#home"> <li>Home</li></a>
          <a href="#contact"><li>Introduction</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#project"><li>Project</li></a>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
