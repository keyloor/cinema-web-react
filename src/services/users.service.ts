import type { User } from "../models/user.model";

/**
 * URL relativa al archivo JSON que contiene la información del perfil del usuario.
 */
const USER_URL = "/data/user.json";

/**
 * Obtiene el perfil del usuario desde el archivo JSON estático.
 * @returns Una promesa que resuelve al objeto User con la información del perfil.
 */
export async function getUserProfile(): Promise<User> {
    const response = await fetch(USER_URL);

    if(!response.ok) {
        throw new Error(
            `No se pudo cargar user.json (status ${response.status})`,
        );
    }
    
    const data = await response.json();
    console.log("Perfil cargado: ", data);
    return data as User;
}
