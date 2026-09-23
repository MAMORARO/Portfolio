
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div className="bg-bg min-h-screen  text-white">
     {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}


export default App;