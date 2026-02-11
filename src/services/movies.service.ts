import type { Movie } from "../models/movie.model";

// URL relativa al archivo JSON que contiene la base de datos de películas
const MOVIES_URL = "/data/movies.json";

/**
 * Obtiene la lista completa de películas desde el archivo JSON estático.
 * @returns Una promesa que resuelve a un array de objetos Movie.
 */
export async function getMovies(): Promise<Movie[]> {
    const response = await fetch(MOVIES_URL);

    if(!response.ok) {
        throw new Error(
            `No se pudo cargar movies.json (status ${response.status})`,
        );
    }
    
    const data = await response.json();
    console.log("Peliculas cargadas: ", data);
    return data as Movie[];
}

/**
 * Busca una película específica por su ID.
 * @param id El identificador único de la película (como string desde la URL).
 * @returns Una promesa que resuelve al objeto Movie o null si no se encuentra.
 */
export async function getMovieById(id: string): Promise<Movie | null> {
    const movies = await getMovies();

    // Buscamos la película convirtiendo el ID de la URL a número
    const found = movies.find((m) => m.id === Number(id));

    return found ?? null;
}
