

import { useEffect, useState } from "react";
import { getUserProfile } from "../../services/users.service";
import type { User } from "../../models/user.model";
import { FaUser, FaEnvelope, FaIdCard } from "react-icons/fa";

/**
 * Componente que muestra el perfil del usuario activo.
 * Carga los datos desde el servicio de usuario y muestra el nombre, email, ID y foto de perfil.
 * @returns El elemento JSX del perfil.
 */
const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserProfile()
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading profile:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center text-red-500 py-10">
        Error al cargar el perfil.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl transition-all duration-300 hover:border-neutral-700">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-4xl shadow-lg ring-4 ring-neutral-800">
          {user.profilePicUrl ? (
            <img
              src={user.profilePicUrl}
              alt={user.username}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = ""; // Fallback logic
              }}
            />
          ) : (
            <FaUser className="text-white" />
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">{user.username}</h1>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800/50 border border-transparent transition-colors hover:bg-neutral-800 hover:border-neutral-700">
          <FaEnvelope className="text-blue-400 text-xl" />
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Email</p>
            <p className="text-white font-medium">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800/50 border border-transparent transition-colors hover:bg-neutral-800 hover:border-neutral-700">
          <FaIdCard className="text-purple-400 text-xl" />
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">User ID</p>
            <p className="text-white font-medium">{user.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
