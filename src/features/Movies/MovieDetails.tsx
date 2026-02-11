import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById } from "../../services/movies.service";
import type { Movie } from "../../models/movie.model";
import { HiFilm } from "react-icons/hi2";

/**
 * Componente que muestra el detalle completo de una película seleccionada.
 * Utiliza hooks para obtener el ID de la URL y navegar de regreso.
 */
export default function MovieDetails() {
  const { id } = useParams<{ id: string }>(); // Extraemos el ID de los parámetros de la URL
  const navigate = useNavigate();             // Hook para navegación programática
  const [movie, setMovie] = useState<Movie | null>(null); // Estado para la película encontrada
  const [loading, setLoading] = useState(true);           // Estado de carga

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    // Obtenemos los detalles de la película mediante su ID
    getMovieById(id)
      .then((data) => {
        if (isMounted) setMovie(data);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  // Pantalla de carga (Skeleton simple con animación pulse)
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-10 animate-pulse">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 bg-slate-800 aspect-[2/3] rounded-2xl"></div>
          <div className="flex-grow space-y-6">
            <div className="h-10 w-3/4 bg-slate-800 rounded"></div>
            <div className="h-6 w-1/4 bg-slate-800 rounded"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-slate-800 rounded"></div>
              <div className="h-4 w-full bg-slate-800 rounded"></div>
              <div className="h-4 w-2/3 bg-slate-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Si no se encuentra la película con el ID proporcionado
  if (!movie) {
    return (
      <div className="max-w-4xl mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Película no encontrada</h1>
        <button
          onClick={() => navigate("/movies")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Volver a la lista
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Botón de volver */}
      <button
        onClick={() => navigate("/movies")}
        className="mb-8 text-slate-400 hover:text-white flex items-center gap-2 transition-colors hover:bg-white/5 px-4 py-2 rounded-full w-fit"
      >
        <span>← Volver a la lista</span>
      </button>

      {/* Contenedor Principal Limpio */}
      <div className="bg-[#1f1f1f] rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/5">

        <div className="flex flex-col md:flex-row gap-12 relative z-10">
          {/* Columna Izquierda: Imagen del Poster */}
          <div className="w-full md:w-1/3 shrink-0">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Columna Derecha: Información */}
          <div className="flex-grow space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {movie.title}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-xl text-white font-medium bg-red-600 px-3 py-1 rounded-md text-sm">
                  {movie.year}
                </span>
                <span className="text-slate-400 text-sm uppercase tracking-wider">Película</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white border-b border-white/10 pb-2 inline-block">
                Sinopsis
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                {movie.description}
              </p>
            </div>

            {/* Acciones (Ejemplo) */}
            <div className="pt-6">
              <button className="bg-white text-black font-bold py-3 px-8 rounded hover:bg-slate-200 transition-colors flex items-center gap-2">
                <HiFilm className="text-xl" />
                Ver Ahora
              </button>
            </div>

            {/* Área de depuración discreta */}
            <div className="pt-8 mt-8 border-t border-white/5">
              <p className="text-slate-600 mb-2 font-mono text-[10px] uppercase tracking-widest opacity-50">
                Debug Info
              </p>
              <code className="text-slate-500 text-xs font-mono block">
                ID: {movie.id} | Path: /movies/{id}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
