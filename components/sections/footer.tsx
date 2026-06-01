export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-bold mb-4">Promointegra</h3>
            <p className="text-sm mb-4">
              Transformación comercial B2B. Infraestructura, software y procesos para escalar ventas.
            </p>
            <p className="text-xs text-gray-500">
              © 2026 Promointegra. Todos los derechos reservados.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Propuesta estratégica
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Roadmap técnico
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentación
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contacto@somosgens.com" className="hover:text-white transition-colors">
                  contacto@somosgens.com
                </a>
              </li>
              <li>
                <a href="https://github.com/contacto141/Promointegra" className="hover:text-white transition-colors">
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>
            Propuesta estratégica y técnica para transformación comercial B2B
          </p>
        </div>
      </div>
    </footer>
  );
}
