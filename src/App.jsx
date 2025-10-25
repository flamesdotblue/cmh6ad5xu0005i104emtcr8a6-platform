import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AS Consultancy Services India Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#about" className="hover:text-slate-900">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
