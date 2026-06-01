export default function RoadmapSection() {
  const phases = [
    {
      number: 1,
      title: 'Diagnóstico',
      duration: 'Semana 1-2',
      description: 'Análisis actual, ICP, buyer personas',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: 2,
      title: 'CRM + Pipeline',
      duration: 'Semana 2-3',
      description: 'Pipedrive operativo, estructura lista',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      number: 3,
      title: 'Base de datos',
      duration: 'Semana 3-6',
      description: '150+ leads validados, segmentados',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: 4,
      title: 'Funnel B2B',
      duration: 'Semana 6-7',
      description: 'Proceso de contacto definido',
      color: 'from-pink-500 to-pink-600',
    },
    {
      number: 5,
      title: 'Assets comerciales',
      duration: 'Semana 7-10',
      description: 'Presentación, catálogo, casos de éxito',
      color: 'from-orange-500 to-orange-600',
    },
    {
      number: 6,
      title: 'Automatizaciones',
      duration: 'Semana 10-12',
      description: 'Workflows, secuencias, webhooks',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      number: 7,
      title: 'IA + WhatsApp',
      duration: 'Semana 12-14',
      description: 'Bot califica leads 24/7',
      color: 'from-green-500 to-green-600',
    },
    {
      number: 8,
      title: 'Dashboard',
      duration: 'Semana 14-15',
      description: '19 KPIs en tiempo real',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      number: 9,
      title: 'Preparación vendedores',
      duration: 'Semana 15-20',
      description: 'Sistema listo para escalar',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Roadmap: 9 fases en 5 meses
          </h2>
          <p className="text-xl text-gray-600">
            Plan detallado, fases claras, entregables concretos
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 to-teal-300" />

          {/* Phases grid */}
          <div className="space-y-8 md:space-y-12">
            {phases.map((phase, idx) => (
              <div key={phase.number} className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}>
                {/* Desktop: Content left/right */}
                <div className="hidden md:flex w-1/2 justify-center">
                  {idx % 2 === 0 ? (
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 w-full max-w-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold text-sm`}>
                          {phase.number}
                        </div>
                        <h3 className="font-bold text-gray-900">{phase.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{phase.duration}</p>
                      <p className="text-sm text-gray-500">{phase.description}</p>
                    </div>
                  ) : null}
                </div>

                {/* Mobile: Full width */}
                <div className="md:hidden w-full">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold text-sm`}>
                        {phase.number}
                      </div>
                      <h3 className="font-bold text-gray-900">{phase.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{phase.duration}</p>
                    <p className="text-sm text-gray-500">{phase.description}</p>
                  </div>
                </div>

                {/* Circle on timeline */}
                <div className="hidden md:flex justify-center w-16">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {phase.number}
                  </div>
                </div>

                {/* Desktop: Content right/left */}
                <div className="hidden md:flex w-1/2 justify-center">
                  {idx % 2 !== 0 ? (
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 w-full max-w-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold text-sm`}>
                          {phase.number}
                        </div>
                        <h3 className="font-bold text-gray-900">{phase.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{phase.duration}</p>
                      <p className="text-sm text-gray-500">{phase.description}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-blue-600 mb-2">20</p>
            <p className="text-gray-600">Semanas de implementación</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-blue-600 mb-2">USD 5-6k</p>
            <p className="text-gray-600">Inversión total en herramientas</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-blue-600 mb-2">0</p>
            <p className="text-gray-600">Riesgo en mes 6+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
