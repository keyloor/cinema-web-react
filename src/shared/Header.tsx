import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

/**
 * Componente de encabezado LiftPro
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">forklift</span>
            </div>
            <h1 className="text-slate-900 text-2xl font-black tracking-tight italic">
              Lift<span className="text-primary">Pro</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-slate-700 hover:text-primary text-sm font-semibold transition-colors">Inicio</Link>
            <Link to="/#servicios" className="text-slate-700 hover:text-primary text-sm font-semibold transition-colors">Servicios</Link>
            <Link to="/#nosotros" className="text-slate-700 hover:text-primary text-sm font-semibold transition-colors">Nosotros</Link>
            <Link to="/contacto" className="text-slate-700 hover:text-primary text-sm font-semibold transition-colors">Contacto</Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/contacto" className="hidden md:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-primary/20">
              Cotizar Ahora
            </Link>
            <button
              className="md:hidden text-slate-700 hover:text-primary p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiXMark className="text-3xl" />
              ) : (
                <HiBars3 className="text-3xl" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-2xl py-4 flex flex-col gap-2 px-4 animate-in slide-in-from-top-2 duration-200">
          <Link to="/" className="text-slate-700 hover:text-primary hover:bg-slate-50 px-4 py-3 rounded-xl font-bold transition-colors" onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/#servicios" className="text-slate-700 hover:text-primary hover:bg-slate-50 px-4 py-3 rounded-xl font-bold transition-colors" onClick={closeMenu}>
            Servicios
          </Link>
          <Link to="/#nosotros" className="text-slate-700 hover:text-primary hover:bg-slate-50 px-4 py-3 rounded-xl font-bold transition-colors" onClick={closeMenu}>
            Nosotros
          </Link>
          <Link to="/contacto" className="text-slate-700 hover:text-primary hover:bg-slate-50 px-4 py-3 rounded-xl font-bold transition-colors" onClick={closeMenu}>
            Contacto
          </Link>
          <div className="pt-4 mt-2 border-t border-slate-100">
            <Link to="/contacto" className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all shadow-md shadow-primary/20">
              Cotizar Ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
