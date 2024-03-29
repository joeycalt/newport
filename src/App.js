import About from './components/About';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Projects from './components/Projects';
import Social from './components/Social';

function App() {
  return (
    <div>
     <NavBar />
     <Home />
     <Projects />
     <Certificates />
     <About />
     <Experience />
     <Contact />

     <Social />
    </div>
  );
}

export default App;
