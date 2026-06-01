export default function ProblemSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            El problema real de Promointegra
          </h2>
          <p className="text-xl text-gray-600">
            Quieres crecer, pero tu infraestructura comercial no está lista
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">❌ Sin CRM</h3>
              <p className="text-gray-600">
                No tienes registro centralizado de leads. Cada lead es una isla. No sabes dónde está, qué se le dijo, cuál es el seguimiento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">❌ Sin base de datos de calidad</h3>
              <p className="text-gray-600">
                Contactos dispersos en emails, archivos Excel, notas. No segmentados, no validados, sin criterios de calificación.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">❌ Sin pipeline claro</h3>
              <p className="text-gray-600">
                No hay claridad en qué etapa está cada oportunidad. No sabes cuánto puedes cerrar este mes, ni cuál es tu forecast.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">❌ Sin prospección estructurada</h3>
              <p className="text-gray-600">
                No hay sistema para encontrar leads de calidad. Esperas referrals o prospectas al azar, sin criterios, sin tracking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">❌ Sin automatización comercial</h3>
              <p className="text-gray-600">
                Todo es manual. Seguimientos olvidados, emails no sincronizados con CRM, sin alertas, sin workflows automáticos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">❌ Sin medición</h3>
              <p className="text-gray-600">
                No sabes qué funciona y qué no. Sin KPIs, sin dashboard, sin reportes. Operas a ciegas.
              </p>
            </div>
          </div>
        </div>

        {/* The trap */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            La trampa en la que caen muchas empresas
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Contratan vendedores sin sistema = <span className="font-bold text-red-600">USD 30-40k en pérdidas garantizadas</span>
          </p>
          <div className="space-y-3 text-left max-w-2xl mx-auto">
            <p>✗ Vendedores pierden 40% del tiempo buscando leads y organizando datos</p>
            <p>✗ Sin pitch consistente = mensajes débiles = conversión baja</p>
            <p>✗ Sin seguimiento estructurado = oportunidades caídas</p>
            <p>✗ Sin visibilidad = manager no sabe qué está pasando</p>
            <p>✗ Sin KPIs = no puedes optimizar ni retener vendedor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
