import './App.css';
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Interests from './components/Interests/Interests';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Interests />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
