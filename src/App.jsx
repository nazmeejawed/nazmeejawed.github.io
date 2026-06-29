import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Just keeping it empty

function App() {
  return (
    <div className="app-container">
      {/* Background Animated Gradient Spheres */}
      <div className="bg-gradient-sphere sphere-1"></div>
      <div className="bg-gradient-sphere sphere-2"></div>
      <div className="bg-gradient-sphere sphere-3"></div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
