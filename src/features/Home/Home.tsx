import { Link } from "react-router-dom";
import { HiFilm } from "react-icons/hi2";

/**
 * Componente funcional de la página principal (Home).
 * Muestra un mensaje de bienvenida y un enlace a la lista de películas.
 */
export function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">

      <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">
        BIENVENIDO A <span className="text-red-600 drop-shadow-lg">CINE-MAX</span>
      </h1>

      <p className="text-xl text-slate-400 mb-10 max-w-2xl font-light">
        Tu destino definitivo para explorar el mundo del cine. Descubre, explora y disfruta de las mejores películas.
      </p>

      {/* Enlace estético para navegar a la sección de películas */}
      <Link
        to="/movies"
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 flex items-center gap-3 shadow-lg shadow-red-900/20"
      >
        <HiFilm className="text-2xl" />
        Explorar Películas
      </Link>

    </section>
  );
}
