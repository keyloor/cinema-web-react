import type { Movie } from "../../models/movie.model";
import { MovieCard } from "./MovieCard";

/**
 * Componente que renderiza una cuadrícula (grid) de películas.
 * @param movies - Array de objetos Movie a mostrar.
 */
export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold border-l-4 border-blue-500 pl-4">
        Nuestra Colección
      </h1>

      {/* Grid responsivo: 1 columna en móvil, 4 en desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {movies.map((movie) => (
          // Renderizamos una tarjeta por cada película
          <MovieCard key={movie.id} {...movie} />
        ))}

      </div>
    </div>
  );
}
