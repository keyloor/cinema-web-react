import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./shared/Header";
import { Footer } from "./shared/Footer";
import NotFound from "./shared/NotFound";
import { Home } from "./features/Home/Home";

import Contact from "./features/Contact/Contact";

/**
 * Componente raíz de la aplicación.
 * Define la estructura global, el enrutamiento (React Router) y los componentes compartidos (Header, Footer).
 */
function App() {
  return (
    <BrowserRouter>
      <div className="relative flex min-h-screen w-full flex-col bg-white overflow-x-hidden text-slate-900 font-display">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
