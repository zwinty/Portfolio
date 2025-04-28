import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FirstView from './components/FristView/FirstView';
import Navigation from './components/Navigation/Navigation';
import Project from './components/Project/project';

function App() {
  return (
    <div className="container">
      <Navigation />
      <section id="home" className="fv-section">
        <FirstView />
      </section>
      <section id="about" className="about">
        <About />
      </section>
      <section id="project" className="pj-section">
        <Project />
      </section>
      <section id="contact" className="pj-contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
