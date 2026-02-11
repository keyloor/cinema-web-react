/**
 * Interface que representa el modelo de datos de una película.
 */
export interface Movie {
    id: number;          // Identificador único de la película
    title: string;       // Título original
    description: string; // Resumen o sinopsis
    year: number;        // Año de lanzamiento
    posterUrl: string;   // URL de la imagen del poster
}

