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
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
