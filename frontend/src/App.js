import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                I'm a passionate Full Stack Web Developer with expertise in the MERN stack and a strong foundation in modern web technologies. 
                My journey in technology is driven by curiosity and a commitment to continuous learning.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                With a Bachelor's degree in Computer Applications and 18+ Google Cloud Skills Boost badges in AI/ML, MLOps, and GCP Services, 
                I bring both theoretical knowledge and practical experience to every project I undertake.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                I believe in writing clean, efficient code and creating user experiences that are both functional and delightful. 
                Whether it's building a travel listing platform or exploring the latest in cloud technologies, I approach each challenge with enthusiasm and dedication.
              </p>
            </div>
          </div>
        </section>
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
