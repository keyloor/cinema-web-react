import type { Movie } from "../../models/movie.model";
import { Link } from "react-router-dom";

/**
 * Tarjeta individual para mostrar una película en la lista.
 * Muestra el poster, título y año, y permite navegar al detalle.
 */
export function MovieCard(props: Movie) {
  return (
    <Link
      to={`/movies/${props.id}`}
      className="group relative bg-[#1f1f1f] rounded-lg overflow-hidden transition-all duration-300 block hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 border border-transparent hover:border-white/20"
    >
      {/* Contenedor de la imagen */}
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={props.posterUrl}
          alt={props.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Información básica */}
      <div className="p-4 bg-[#1f1f1f]">
        <h3 className="font-bold text-lg truncate text-white group-hover:text-red-500 transition-colors">
          {props.title}
        </h3>
        <p className="text-slate-400 text-sm font-medium mt-1">{props.year}</p>
      </div>
    </Link>
  );
}
