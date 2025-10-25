import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-[Inter]">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <footer className="relative overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-6 py-10 text-slate-300 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AS Consultancy Services India Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
