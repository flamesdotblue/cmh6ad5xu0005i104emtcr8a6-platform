import React from "react";
import { motion } from "framer-motion";
import { Shield, Rocket, CheckCircle2 } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-28 h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute inset-x-0 top-20 mx-auto h-80 max-w-6xl rounded-[48px] bg-gradient-to-r from-emerald-50 to-indigo-50 border shadow-[0_0_0_1px_rgba(15,23,42,.06)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium mb-4 shadow-sm">
              <Shield className="h-3.5 w-3.5" />
              Your trusted finance partner
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Finance, Tax and Compliance for Indian Businesses
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Bookkeeping, taxation, GST, TDS, NPA management, loan processing, DSA and business development — delivered with accuracy and speed. Led by professionals with 10+ years across auditor offices and manufacturing.
            </p>

            <ul className="mt-6 grid gap-2 text-slate-700">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Accurate and compliant execution</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Practical insights for growth</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Bangalore • Dindigul • Coimbatore</li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#services" className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full hover:bg-slate-800 shadow">
                <Rocket className="h-4 w-4" /> Explore Services
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-slate-300 text-slate-800 px-5 py-3 rounded-full hover:bg-slate-50">
                Get a Proposal
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-white to-slate-50 border overflow-hidden shadow-xl">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl" />
                <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-indigo-200/40 blur-2xl" />
              </div>
              <div className="h-full w-full p-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border bg-white/70 backdrop-blur p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Compliance</div>
                    <div className="mt-1 font-semibold">GST + TDS Calendar</div>
                  </div>
                  <div className="text-xs text-slate-500">Automated reminders and reconciliations</div>
                </div>
                <div className="rounded-xl border bg-white/70 backdrop-blur p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Advisory</div>
                    <div className="mt-1 font-semibold">Tax Planning</div>
                  </div>
                  <div className="text-xs text-slate-500">Optimize outflows and improve cashflows</div>
                </div>
                <div className="rounded-xl border bg-white/70 backdrop-blur p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Accounts</div>
                    <div className="mt-1 font-semibold">Bookkeeping</div>
                  </div>
                  <div className="text-xs text-slate-500">MIS-ready ledgers and dashboards</div>
                </div>
                <div className="rounded-xl border bg-white/70 backdrop-blur p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Credit</div>
                    <div className="mt-1 font-semibold">Loan Processing</div>
                  </div>
                  <div className="text-xs text-slate-500">Eligibility, docs and bank liaison</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
