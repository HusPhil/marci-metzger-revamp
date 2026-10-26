import { Header } from "./components/Header";
import { Hero } from "./components/sections/Hero";
import { useReveal } from "./hooks/useReveal";
import "./App.css";
import { About } from "./components/sections/About";
import { Sold } from "./components/sections/Sold";
import { Listings } from "./components/sections/Listings";
import { Gallery } from "./components/sections/Gallery";
import { Quote } from "./components/sections/Quote";
import { Services } from "./components/sections/Services";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" tabIndex={-1}>
        <Hero variant="glass" id="top" />
        <About />
        <Sold />
        <Listings />
        <Gallery />
        <Quote />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
