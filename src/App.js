import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Projects from './components/Projects';
import Social from './components/Social';
import '/Users/joeycaltabellotta/newportfolio/src/index.css'

function App() {
  return (
    <div>
     <NavBar />
     <Home />
     <Projects />
     <About />
     <Experience />
     <Contact />

     <Social />
    </div>
  );
}

export default App;
