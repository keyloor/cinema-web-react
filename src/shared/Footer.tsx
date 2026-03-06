import { Link } from "react-router-dom";

/**
 * Componente LiftPro Footer
 */
export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">forklift</span>
              <h2 className="text-slate-900 text-2xl font-black tracking-tight italic">Lift<span className="text-primary">Pro</span></h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Su socio estratégico en soluciones de elevación y logística industrial. Calidad, seguridad y eficiencia garantizada.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-slate-900 font-bold mb-6">Enlaces</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link to="/#servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link to="/#nosotros" className="hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-slate-900 font-bold mb-6">Servicios</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Venta de Montacargas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Alquiler de Flotas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mantenimiento Correctivo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Repuestos Originales</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-slate-900 font-bold mb-6">Contacto</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <span>Polígono Industrial s/n, Madrid</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <span>info@liftpro.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                <span>Lun - Vie: 8:00 - 18:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2024 LiftPro Soluciones de Elevación. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
