import React from "react";
import { BookOpen, Calculator, Calendar, Receipt, Percent, Shield, Banknote, Handshake, TrendingUp, ClipboardCheck } from "lucide-react";

const services = [
  {
    title: "Bookkeeping & Accounts",
    desc: "End-to-end bookkeeping, AR/AP, ledgers, reconciliations, MIS and management reporting.",
    icon: BookOpen,
  },
  {
    title: "Tax Consulting",
    desc: "Direct and indirect tax advisory, return preparations, assessments and representation.",
    icon: Calculator,
  },
  {
    title: "Tax Planning",
    desc: "Strategic planning for individuals and businesses to optimise tax outflows and cashflows.",
    icon: Calendar,
  },
  {
    title: "GST Services",
    desc: "Registration, monthly/annual returns, reconciliations, e-invoicing, audits and notices.",
    icon: Receipt,
  },
  {
    title: "TDS & TCS",
    desc: "Deduction/collection compliance, challans, returns, certificates and mismatch resolution.",
    icon: Percent,
  },
  {
    title: "NPA Management",
    desc: "Review of stressed assets, restructuring support, compliance and recovery coordination.",
    icon: Shield,
  },
  {
    title: "Loan Processing",
    desc: "Eligibility assessment, documentation, bank liaison for working capital and term loans.",
    icon: Banknote,
  },
  {
    title: "DSA (Direct Selling Agent)",
    desc: "Partnered sourcing for retail and business credit with transparent processes.",
    icon: Handshake,
  },
  {
    title: "Business Development",
    desc: "Process setup, cost control, pricing insights and performance dashboards for growth.",
    icon: TrendingUp,
  },
  {
    title: "Compliance & Filings",
    desc: "ROC, PF/ESI, professional tax, shops & establishment and other statutory filings.",
    icon: ClipboardCheck,
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services tailored for businesses</h2>
          <p className="mt-2 text-slate-600">From day-to-day bookkeeping to strategic tax planning and credit facilitation, we cover the full finance stack so you can focus on growth.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border bg-white p-6 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border bg-white p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-slate-700">Need a custom plan? We offer flexible monthly retainers and project-based engagements.</p>
          <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 hover:bg-slate-800">Discuss your requirements</a>
        </div>
      </div>
    </section>
  );
}

export default Services;
