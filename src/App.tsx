import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./shared/Header";
import { Footer } from "./shared/Footer";
import NotFound from "./shared/NotFound";
import { Home } from "./features/Home/Home";
import { Movies } from "./features/Movies/Movie";
import MovieDetails from "./features/Movies/MovieDetails";
import Profile from "./features/Profile/Profile";

/**
 * Componente raíz de la aplicación.
 * Define la estructura global, el enrutamiento (React Router) y los componentes compartidos (Header, Footer).
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#141414] text-slate-100 flex flex-col font-sans">
        <Header />

        <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
