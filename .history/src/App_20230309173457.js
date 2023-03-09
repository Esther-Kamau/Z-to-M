import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components"

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Hero/>
  <About />
  <Skills />
  <Work />
  <Contact />
    </div>
  );
}

export default App;
