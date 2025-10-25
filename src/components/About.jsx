import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, Award, Mail, Phone } from "lucide-react";

function About() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 mx-auto h-24 max-w-6xl rounded-[48px] bg-gradient-to-r from-emerald-50 to-indigo-50 blur-xl" aria-hidden />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About AS Consultancy</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                AS Consultancy Services India Pvt. Ltd. delivers comprehensive finance, tax and compliance solutions. We bring practical experience from auditor offices and manufacturing enterprises to help organisations streamline operations, stay compliant and make confident decisions.
              </p>
            </motion.div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-2xl border p-6 bg-white/70 backdrop-blur">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-slate-900" />
                  <h3 className="font-semibold">Leadership</h3>
                </div>
                <p className="mt-3 text-slate-700">
                  CEO & Managing Director: <span className="font-medium">Mr. Anandaraj S</span> — over 10 years of hands-on experience across auditor offices and manufacturing companies, leading teams that deliver timely and accurate results.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border p-6 bg-white/70 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-slate-900" />
                  <h3 className="font-semibold">Why choose us</h3>
                </div>
                <ul className="mt-3 text-slate-700 list-disc list-inside space-y-1">
                  <li>Process-driven delivery and governance</li>
                  <li>Practical, business-first recommendations</li>
                  <li>Clear documentation and MIS insights</li>
                  <li>Strict confidentiality and data security</li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="rounded-2xl border p-6 bg-white/70 backdrop-blur">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-900" />
                  <h3 className="font-semibold">Locations served</h3>
                </div>
                <p className="mt-3 text-slate-700">Bangalore • Dindigul • Coimbatore</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="rounded-2xl border p-6 bg-white/70 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-slate-900" />
                  <h3 className="font-semibold">Engagement models</h3>
                </div>
                <ul className="mt-3 text-slate-700 list-disc list-inside space-y-1">
                  <li>Monthly retainer for ongoing compliance</li>
                  <li>Project-based for specific outcomes</li>
                  <li>On-site or remote collaboration</li>
                </ul>
              </motion.div>
            </div>

            <div className="mt-10 rounded-2xl border bg-white/70 backdrop-blur p-6">
              <h3 className="text-lg font-semibold">Client highlights</h3>
              <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border p-4">
                  <div className="font-medium">Manufacturing SME</div>
                  <p className="text-slate-600 mt-1">Implemented cost controls and monthly MIS, improving margins by 8%.</p>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="font-medium">Retail Chain</div>
                  <p className="text-slate-600 mt-1">GST reconciliations and e-invoicing automation across 20+ locations.</p>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="font-medium">Startup</div>
                  <p className="text-slate-600 mt-1">Set up accounting stack, payroll compliance and quarterly board MIS.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl border p-6 bg-gradient-to-b from-white to-slate-50 shadow-xl">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-slate-600">Share your requirements and our team will get back to you promptly.</p>

              {!submitted ? (
                <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">Full name</label>
                    <input id="name" name="name" required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300 bg-white" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input type="email" id="email" name="email" required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300 bg-white" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                    <input type="tel" id="phone" name="phone" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300 bg-white" placeholder="Optional" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium">How can we help?</label>
                    <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300 bg-white" placeholder="Briefly describe your needs" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2.5 hover:bg-slate-800 shadow">
                    Request a callback
                  </button>

                  <div className="flex items-center justify-center gap-4 text-sm text-slate-600 mt-2">
                    <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> Phone on request</span>
                    <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4" /> Email on request</span>
                  </div>
                </form>
              ) : (
                <div className="mt-4 rounded-lg bg-emerald-50 border border-emerald-200 p-4">
                  <p className="text-emerald-800 font-medium">Thank you! Your request has been noted.</p>
                  <p className="text-emerald-700 text-sm mt-1">Our team will reach out shortly to understand your requirements and propose the next steps.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
