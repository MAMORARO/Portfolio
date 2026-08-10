//import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
//import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg min-h-screen  text-white">
     {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
     {/*<Services />*/}
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;