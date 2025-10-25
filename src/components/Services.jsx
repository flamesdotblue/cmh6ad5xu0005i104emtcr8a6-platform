import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calculator, Calendar, Receipt, Percent, Shield, Banknote, Handshake, TrendingUp, ClipboardCheck } from "lucide-react";

const services = [
  {
    title: "Bookkeeping & Accounts",
    desc: "End-to-end bookkeeping, AR/AP, ledgers, reconciliations, MIS and management reporting.",
    icon: BookOpen,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Tax Consulting",
    desc: "Direct and indirect tax advisory, return preparations, assessments and representation.",
    icon: Calculator,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Tax Planning",
    desc: "Strategic planning for individuals and businesses to optimise tax outflows and cashflows.",
    icon: Calendar,
    color: "from-fuchsia-500 to-fuchsia-600",
  },
  {
    title: "GST Services",
    desc: "Registration, monthly/annual returns, reconciliations, e-invoicing, audits and notices.",
    icon: Receipt,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "TDS & TCS",
    desc: "Deduction/collection compliance, challans, returns, certificates and mismatch resolution.",
    icon: Percent,
    color: "from-rose-500 to-rose-600",
  },
  {
    title: "NPA Management",
    desc: "Review of stressed assets, restructuring support, compliance and recovery coordination.",
    icon: Shield,
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Loan Processing",
    desc: "Eligibility assessment, documentation, bank liaison for working capital and term loans.",
    icon: Banknote,
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "DSA (Direct Selling Agent)",
    desc: "Partnered sourcing for retail and business credit with transparent processes.",
    icon: Handshake,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Business Development",
    desc: "Process setup, cost control, pricing insights and performance dashboards for growth.",
    icon: TrendingUp,
    color: "from-violet-500 to-violet-600",
  },
  {
    title: "Compliance & Filings",
    desc: "ROC, PF/ESI, professional tax, shops & establishment and other statutory filings.",
    icon: ClipboardCheck,
    color: "from-slate-700 to-slate-900",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="absolute inset-x-0 -top-10 mx-auto h-24 max-w-4xl rounded-full bg-white/40 blur-2xl" aria-hidden />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services tailored for business impact</h2>
          <p className="mt-3 text-slate-600">From day-to-day bookkeeping to strategic tax planning and credit facilitation, we cover the full finance stack so you can focus on growth.</p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div key={s.title} variants={item} className="group relative rounded-2xl border bg-white/70 backdrop-blur p-6 hover:shadow-lg transition-shadow overflow-hidden">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-md`}>
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              <div className="absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-gradient-to-br from-slate-100 to-white group-hover:scale-110 transition-transform" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 rounded-2xl border bg-gradient-to-r from-slate-900 to-slate-800 p-6 md:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-lg">
          <div>
            <div className="text-lg font-semibold">Flexible engagement models</div>
            <p className="text-sm text-white/70 mt-1">Monthly retainer for compliance, project-based for outcomes, on-site or remote.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 hover:bg-slate-100 font-medium shadow">
            Discuss your requirements
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
