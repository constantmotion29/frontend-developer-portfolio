import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#171c26] text-[#f4f5f7]">
      {/* Navigation */}
      <Navbar />
      <main>
        {/* Hero */}
        <Hero />

        {/* Featured Work */}
        <FeaturedWork />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
