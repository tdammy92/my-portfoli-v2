import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="scroll-smooth">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
