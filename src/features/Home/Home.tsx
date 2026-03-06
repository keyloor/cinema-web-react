import { motion, type Variants } from "framer-motion";

/**
 * Componente principal LiftPro
 */
export function Home() {
  // Variantes de animación reutilizables
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-slate-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Hero Text Content */}
            <motion.div
              className="flex flex-col gap-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <div className="flex flex-col gap-4">
                <motion.span variants={fadeUp} className="text-primary font-bold tracking-widest uppercase text-sm">Líderes en Logística</motion.span>
                <motion.h2 variants={fadeUp} className="text-slate-900 text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  Expertos en Soluciones de <span className="text-primary">Elevación</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-slate-600 text-lg lg:text-xl max-w-xl leading-relaxed">
                  Venta, alquiler y mantenimiento preventivo para su flota. Impulsamos la eficiencia de su almacén con maquinaria de última generación.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a href="#servicios" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-base font-bold transition-all inline-flex items-center gap-2 group">
                  Ver Servicios
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <a href="#contacto" className="bg-white border-2 border-slate-200 hover:border-primary hover:text-primary text-slate-700 px-8 py-4 rounded-lg text-base font-bold transition-all">
                  Contactar
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-6 pt-4 border-t border-slate-200">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-slate-400">person</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-slate-400">person</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-slate-400">person</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 font-medium">Más de <span className="text-slate-900 font-bold">500+ clientes</span> confían en nosotros</p>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-primary/10">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB652y-7ix_Mnj9wN5IWnfgHUGjoVhsofjlazThbo2Fm3lQekiuIVyM9xqL9uXuGPdbkULOZs7j1i7Ek9Kxpfd2xe-9Z9IvEwtYa3Akghi3ZkBg-VbYAXwrcpA6JH003Ixizje4xo4DvX2xyvcRi6O5uvSsUWmQocHd8WFTL_fza2dj99aM6EK9-kIenYPZMT3A6oaCNLF_a20VdFO0D_YlHjtVQU9lXcKVo9CpBn2GP3es_KNeD6GC0XyPaKD8kG-DBmFIt6mlCbQ"
                  alt="Large industrial orange forklift in warehouse"
                  className="w-full h-full object-cover origin-center"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl">
                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-xl">15+ Años</p>
                    <p className="text-slate-500 text-sm">De experiencia técnica</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-slate-900 text-3xl md:text-5xl font-black mb-4">Nuestros Servicios</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-2">
                <span className="material-symbols-outlined text-3xl">shopping_cart</span>
              </div>
              <h3 className="text-slate-900 text-xl font-bold mb-4">Venta y Alquiler</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Equipos nuevos y usados con planes de financiación y renting flexibles adaptados a su presupuesto.
              </p>
              <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Saber más <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-2">
                <span className="material-symbols-outlined text-3xl">build</span>
              </div>
              <h3 className="text-slate-900 text-xl font-bold mb-4">Mantenimiento Técnico</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Servicio especializado preventivo y correctivo. Minimizamos el tiempo de inactividad de su maquinaria.
              </p>
              <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Saber más <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-2">
                <span className="material-symbols-outlined text-3xl">settings_suggest</span>
              </div>
              <h3 className="text-slate-900 text-xl font-bold mb-4">Repuestos y Accesorios</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Stock permanente de componentes originales para todas las marcas líderes del mercado internacional.
              </p>
              <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Saber más <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="material-symbols-outlined text-[400px]">forklift</span>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeUp} className="text-primary font-bold tracking-widest uppercase text-sm">Trayectoria y Confianza</motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black leading-tight">Sobre Nosotros</motion.h2>
              <motion.p variants={fadeUp} className="text-slate-300 text-lg leading-relaxed">
                En LiftPro, nos dedicamos a optimizar la logística de su empresa con equipos de la más alta calidad y un servicio técnico inigualable. Nuestra trayectoria garantiza confianza y eficiencia en cada operación.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined text-3xl">shield</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Confiabilidad</h4>
                    <p className="text-slate-400 text-sm">Equipos certificados con garantía total.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined text-3xl">support_agent</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Soporte 24/7</h4>
                    <p className="text-slate-400 text-sm">Atención inmediata ante cualquier emergencia.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7gHFbv5vnv6LAEEG0o7934qJtVf-1-AHZerSTKnsCY8w45CsIudurxPX9_lubiWmgCYgS4FthHJYLE0tXCv56lCS9pJy9A3axp4gAPCey-jyOYUe3xtFSOZY-lu_MvM4zJOzKUAsqI7D2XWptZO5bliqdeJelfmhnAWEliA4JtMAJGIpU9gpUjW9lxa5ZoJknWfZslSt3ChH6Eqsm4a7eOULvUH_hGrstxxqXY4p06fg6bWrEVPwSV8t6eAR8LtaUwd4V15394N0"
                alt="Technical service team working on a forklift"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section / Contact */}
      <section id="contacto" className="py-20 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-slate-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true }}
          >
            <h2 className="text-slate-900 text-3xl md:text-5xl font-black mb-6">¿Listo para elevar su negocio?</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
              Solicite una asesoría gratuita hoy mismo. Nuestro equipo de expertos le ayudará a encontrar la solución perfecta para su flota logística.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
                Solicitar Cotización
              </button>
              <a href="tel:+34900000000" className="flex items-center justify-center gap-3 text-slate-900 font-bold px-10 py-4 border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-all hover:-translate-y-1">
                <span className="material-symbols-outlined">call</span>
                +34 900 000 000
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
