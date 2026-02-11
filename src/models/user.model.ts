/**
 * Interface que representa el modelo de datos de un usuario.
 */
export interface User {
    id: string;            // Identificador único del usuario
    username: string;      // Nombre de usuario (ej. goku)
    password: string;      // Contraseña del usuario
    email: string;         // Correo electrónico
    profilePicUrl: string; // URL de la foto de perfil
}