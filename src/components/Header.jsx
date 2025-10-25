import React from "react";
import { Menu } from "lucide-react";

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-500 to-indigo-600 grid place-items-center text-white font-bold shadow-md">AS</div>
          <div>
            <div className="text-lg font-semibold leading-tight tracking-tight group-hover:text-slate-900">AS Consultancy</div>
            <div className="text-[10px] -mt-0.5 text-slate-500">Services India Pvt. Ltd.</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="text-slate-700 hover:text-slate-900">Home</a>
          <a href="#services" className="text-slate-700 hover:text-slate-900">Services</a>
          <a href="#about" className="text-slate-700 hover:text-slate-900">About</a>
          <a href="#contact" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 shadow-sm hover:bg-slate-800">Contact</a>
        </nav>

        <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white/70 backdrop-blur">
          <div className="px-6 py-3 flex flex-col gap-3 text-sm">
            <a href="#home" className="py-1" onClick={() => setOpen(false)}>Home</a>
            <a href="#services" className="py-1" onClick={() => setOpen(false)}>Services</a>
            <a href="#about" className="py-1" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" className="py-1" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
