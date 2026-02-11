import { useState } from "react";
import { HiHome, HiFilm, HiUser, HiBars3, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

/**
 * Componente de encabezado de la aplicación.
 * Proporciona la navegación principal y el logotipo.
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
    // Header con efecto "Glassmorphism" sutil
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5 shadow-md">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logotipo / Nombre de la App limpio */}
        <Link
          to="/"
          className="text-2xl font-black text-red-600 tracking-tighter hover:scale-105 transition-transform"
          onClick={closeMenu}
        >
          CINE-MAX
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            to="/"
            className="text-slate-300 hover:text-white transition-all duration-300 font-medium flex items-center gap-2 hover:bg-white/5 px-4 py-2 rounded-full"
          >
            <HiHome className="text-xl" />
            <span>Home</span>
          </Link>

          <Link
            to="/movies"
            className="text-slate-300 hover:text-white transition-all duration-300 font-medium flex items-center gap-2 hover:bg-white/5 px-4 py-2 rounded-full"
          >
            <HiFilm className="text-xl" />
            <span>Movies</span>
          </Link>

          <Link
            to="/profile"
            className="text-slate-300 hover:text-white transition-all duration-300 font-medium flex items-center gap-2 hover:bg-white/5 px-4 py-2 rounded-full"
          >
            <HiUser className="text-xl" />
            <span>Profile</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiXMark className="text-3xl" />
          ) : (
            <HiBars3 className="text-3xl" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4 flex flex-col gap-2 px-4 animate-in slide-in-from-top-2 duration-200">
          <Link
            to="/"
            className="text-slate-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl font-medium flex items-center gap-3 transition-colors"
            onClick={closeMenu}
          >
            <HiHome className="text-2xl" />
            <span>Home</span>
          </Link>

          <Link
            to="/movies"
            className="text-slate-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl font-medium flex items-center gap-3 transition-colors"
            onClick={closeMenu}
          >
            <HiFilm className="text-2xl" />
            <span>Movies</span>
          </Link>

          <Link
            to="/profile"
            className="text-slate-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl font-medium flex items-center gap-3 transition-colors"
            onClick={closeMenu}
          >
            <HiUser className="text-2xl" />
            <span>Profile</span>
          </Link>
        </div>
      )}
    </header>
  );
}
