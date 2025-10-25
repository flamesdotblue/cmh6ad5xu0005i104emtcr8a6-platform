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

      <section className="relative mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-indigo-600" />
        <div className="relative max-w-7xl mx-auto px-6 py-12 text-white grid md:grid-cols-2 gap-6 items-center rounded-none md:rounded-3xl">
          <div>
            <h3 className="text-2xl font-semibold">Ready to streamline finance, tax and compliance?</h3>
            <p className="mt-2 text-white/80">Let’s create a plan tailored to your industry and growth stage. Transparent timelines. Actionable deliverables.</p>
          </div>
          <div className="flex md:justify-end gap-3">
            <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-3 font-medium shadow hover:bg-slate-100">Explore Services</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-black/20 backdrop-blur px-5 py-3 font-medium hover:bg-black/30">Get a Proposal</a>
          </div>
        </div>
      </section>

      <footer className="mt-0 border-t">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AS Consultancy Services India Pvt. Ltd. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
