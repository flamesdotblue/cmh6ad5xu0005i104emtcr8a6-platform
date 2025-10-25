import React from "react";
import { User, MapPin, Award, Mail, Phone } from "lucide-react";

function About() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About AS Consultancy</h2>
            <p className="mt-4 text-slate-700">
              AS Consultancy Services India Pvt. Ltd. is a professional services firm delivering comprehensive finance, tax, and compliance solutions. We bring together deep practical experience from auditor offices and manufacturing enterprises to help organisations streamline operations, remain compliant, and make confident decisions.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border p-6">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-slate-900" />
                  <h3 className="font-semibold">Leadership</h3>
                </div>
                <p className="mt-3 text-slate-700">
                  CEO & Managing Director: <span className="font-medium">Mr. Anandaraj S</span> — over 10 years of hands-on experience across auditor offices and manufacturing companies, leading teams that deliver timely and accurate results.
                </p>
              </div>
              <div className="rounded-xl border p-6">
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
              </div>
              <div className="rounded-xl border p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-900" />
                  <h3 className="font-semibold">Locations served</h3>
                </div>
                <p className="mt-3 text-slate-700">Bangalore • Dindigul • Coimbatore</p>
              </div>
              <div className="rounded-xl border p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-slate-900" />
                  <h3 className="font-semibold">Engagement models</h3>
                </div>
                <ul className="mt-3 text-slate-700 list-disc list-inside space-y-1">
                  <li>Monthly retainer for ongoing compliance</li>
                  <li>Project-based for specific outcomes</li>
                  <li>On-site or remote collaboration</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="contact" className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border p-6 bg-white">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-slate-600">Share your requirements and our team will get back to you promptly.</p>

              {!submitted ? (
                <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">Full name</label>
                    <input id="name" name="name" required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input type="email" id="email" name="email" required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                    <input type="tel" id="phone" name="phone" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Optional" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium">How can we help?</label>
                    <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Briefly describe your needs" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2.5 hover:bg-slate-800">Request a callback</button>

                  <div className="flex items-center justify-center gap-4 text-sm text-slate-600 mt-2">
                    <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> Phone on request</span>
                    <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4" /> Email on request</span>
                  </div>
                </form>
              ) : (
                <div className="mt-4 rounded-md bg-emerald-50 border border-emerald-200 p-4">
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
