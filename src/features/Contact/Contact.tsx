import { motion, type Variants } from "framer-motion";

/**
 * Página de Contacto de LiftPro
 * Incluye la cabecera, detalles corporativos, mapa y un footer específico,
 * sin el formulario de contacto según lo solicitado.
 */
export default function Contact() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className="flex flex-col w-full bg-background-light">
            {/* Page Header */}
            <section className="w-full bg-slate-100 py-16 px-6 lg:px-10 border-b border-slate-200">
                <motion.div
                    className="max-w-[1200px] mx-auto flex flex-col gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Contact &amp; Location</motion.h2>
                    <motion.p variants={fadeUp} className="text-lg text-slate-600 max-w-2xl">We're here to help with all your forklift and material handling needs. Reach out to our expert team for inquiries, quotes, or support.</motion.p>
                </motion.div>
            </section>

            {/* Main Content Area (Centered Corporate Details, No Form) */}
            <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-16 flex justify-center">
                {/* Corporate Details */}
                <motion.div
                    className="w-full max-w-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeUp} className="bg-white p-8 md:p-12 rounded-xl border border-slate-200 shadow-xl">
                        <h3 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Corporate Office</h3>
                        <div className="flex flex-col gap-8">

                            {/* Address */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Headquarters &amp; Showroom</h4>
                                    <p className="text-slate-900 font-medium text-lg leading-relaxed">100 Industrial Parkway<br />Suite 500<br />Chicago, IL 60601</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-primary">call</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</h4>
                                    <p className="text-slate-900 font-medium text-lg">Toll-Free: (800) 555-LIFT</p>
                                    <p className="text-slate-600">Local: (312) 555-0198</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-primary">mail</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Email</h4>
                                    <p className="text-slate-900 font-medium text-lg">sales@liftpro.com</p>
                                    <p className="text-slate-600">support@liftpro.com</p>
                                </div>
                            </div>

                            <hr className="border-slate-200 my-2" />

                            {/* Hours */}
                            <div>
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Operating Hours</h4>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                                        <span className="font-medium">Monday - Friday</span>
                                        <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-md">7:00 AM - 6:00 PM</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                                        <span className="font-medium">Saturday</span>
                                        <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-md">8:00 AM - 1:00 PM</span>
                                    </li>
                                    <li className="flex justify-between items-center pb-2">
                                        <span className="font-medium">Sunday</span>
                                        <span className="font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-md">Closed</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-primary mt-6 flex items-center gap-2 font-medium bg-primary/5 p-3 rounded-lg">
                                    <span className="material-symbols-outlined text-base">info</span>
                                    * 24/7 Emergency Service available for contracted accounts.
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Full Width Map Placeholder */}
            <section className="w-full mt-8">
                <motion.div
                    className="h-[400px] w-full bg-slate-200 relative overflow-hidden group"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        alt="Map of Chicago Area"
                        className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqRV7AKQopGwfwFvNlCLqXPxWdCZB7AVF_q4XbxOd21bjW2spZbI-xhsW__SOoAbabPWymeUz_eGxNs1881YE0M90sLpUdaNM4EIqeI7NKy0nD95DC23L6t8G20-GpW6ltekCTfdpxjhGZjnPp1b6qIiLdKSdK1uSRuERlTAaMiASZbXa2PBMbTrzbobsbhuSVeFchlaB2_WFjTAnFgTjaxouXO5fJCYlL4No6gUZaANm1KJ5SK9p4HrAIgp3mdb_YkE2KoBdduTI"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                            className="bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-200"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                        >
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
                                <span className="material-symbols-outlined text-white">location_on</span>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">LiftPro Headquarters</p>
                                <p className="text-sm text-primary font-bold">Get Directions</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Specific Contact Footer */}
            <footer className="bg-slate-900 text-white pt-16 pb-8 px-6 lg:px-10 border-t-4 border-primary mt-auto">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined text-3xl">forklift</span>
                                <h2 className="text-xl font-bold tracking-tight text-white">LiftPro Forklifts</h2>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mt-2">
                                Premium material handling solutions, sales, rentals, and certified maintenance services across the Midwest.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
                            <ul className="flex flex-col gap-3 text-sm text-slate-400">
                                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm">chevron_right</span>New Equipment</a></li>
                                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm">chevron_right</span>Used Fleet</a></li>
                                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm">chevron_right</span>Rental Rates</a></li>
                                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm">chevron_right</span>Parts Catalog</a></li>
                                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm">chevron_right</span>Financing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-white">Support</h3>
                            <ul className="flex flex-col gap-3 text-sm text-slate-400">
                                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm">chevron_right</span>Schedule Service</a></li>
                                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm">chevron_right</span>Operator Training</a></li>
                                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm">chevron_right</span>Warranty Info</a></li>
                                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm">chevron_right</span>FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-white">Connect With Us</h3>
                            <div className="flex gap-4 mb-6">
                                <a className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-lg" href="#">
                                    <span className="material-symbols-outlined text-sm">share</span>
                                </a>
                                <a className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-lg" href="#">
                                    <span className="material-symbols-outlined text-sm">post</span>
                                </a>
                                <a className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-lg" href="#">
                                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <p>© 2023 LiftPro Forklifts Inc. All rights reserved.</p>
                        <div className="flex gap-6 font-medium">
                            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
