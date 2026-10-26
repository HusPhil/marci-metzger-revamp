import { Header } from "./components/Header";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Gallery } from "./components/sections/Gallery";
import { Hero } from "./components/sections/Hero";
import { Listings } from "./components/sections/Listings";
import { Quote } from "./components/sections/Quote";
import { Services } from "./components/sections/Services";
import { Sold } from "./components/sections/Sold";
import { TrustBar } from "./components/sections/TrustBar";
import { useReveal } from "./hooks/useReveal";
import "./App.css";

function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" tabIndex={-1}>
        <Hero />
        <TrustBar />
        {/* <About /> */}
        {/* <Sold /> */}
        {/* <Listings /> */}
        {/* <Gallery /> */}
        {/* <Quote /> */}
        {/* <Services /> */}
        {/* <Contact /> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
