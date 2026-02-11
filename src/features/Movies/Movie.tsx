import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import type { Movie } from "../../models/movie.model";
import { getMovies } from "../../services/movies.service";

/**
 * Componente principal de la sección de Películas.
 * Se encarga de gestionar el estado de la lista y el estado de carga.
 */
export function Movies() {

  const [movies, setMovies] = useState<Movie[]>([]); // Estado para almacenar los datos de las películas
  const [loading, setLoading] = useState(true);      // Estado para controlar el indicador de carga

  useEffect(() => {
    // Llamada al servicio para obtener los datos al montar el componente
    getMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, [movies]);

  // Vista de carga mientras la promesa se resuelve
  if (loading)
    return (
      <div>Cargando películas...</div>
    );

  return (
    <>
      <h1 className="text-4xl font-extrabold mb-8">MOVIES:</h1>
      {/* Pasamos la lista de películas al componente de presentación */}
      <MovieList movies={movies} />
    </>
  );
}
