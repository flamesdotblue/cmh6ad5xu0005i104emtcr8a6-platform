import React from "react";
import { Shield, Rocket, CheckCircle2 } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
              <Shield className="h-3.5 w-3.5" />
              Reliable finance partner for growing businesses
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              End-to-end Finance, Tax, and Compliance for Indian Businesses
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              AS Consultancy Services India Pvt. Ltd. provides professional bookkeeping, taxation, GST, TDS, NPA management, loan processing, DSA, and business development solutions. Operated by experienced industry professionals with over a decade in audit and manufacturing domains.
            </p>
            <ul className="mt-6 grid gap-2 text-slate-700">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Accurate, timely, and compliant</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Tailored support for SMEs and enterprises</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Serving Bangalore, Dindigul, and Coimbatore</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#services" className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-md hover:bg-slate-800">
                <Rocket className="h-4 w-4" /> Explore Services
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-slate-300 text-slate-800 px-5 py-3 rounded-md hover:bg-slate-50">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border shadow-inner flex items-center justify-center">
              <div className="p-8 text-center">
                <p className="text-2xl font-semibold">Your Finance Back-Office, On-Demand</p>
                <p className="mt-2 text-slate-600">Bring clarity to your numbers and confidence to your decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
