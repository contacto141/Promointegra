export default function BenefitsSection() {
  const benefits = [
    {
      icon: '💰',
      title: 'ROI en mes 2-3',
      description: 'Inversión de USD 5-6k se recupera con el primer vendedor productivo',
    },
    {
      icon: '⚡',
      title: 'Escalabilidad desde día 1',
      description: 'Sistema reutilizable para agregar más vendedores sin rehacer nada',
    },
    {
      icon: '📊',
      title: 'Decisiones basadas en datos',
      description: 'Dashboard con 19 KPIs. Sabes qué funciona, qué no, dónde optimizar',
    },
    {
      icon: '🎯',
      title: 'Leads de calidad, no basura',
      description: '150+ leads estratégicamente prospectados, validados, priorizados',
    },
    {
      icon: '🤖',
      title: 'Automatización 24/7',
      description: 'Bot de WhatsApp responde FAQs, califica leads, integra con CRM',
    },
    {
      icon: '📈',
      title: 'Pipeline predecible',
      description: 'Sabes cuánto puedes cerrar este mes, en qué etapa está cada oportunidad',
    },
    {
      icon: '👥',
      title: 'Consistencia en messaging',
      description: 'Pitch definido, presentación profesional, scripts documentados',
    },
    {
      icon: '⏱️',
      title: 'Reducción de tiempo',
      description: 'Vendedor no inventa procesos, no busca leads, no organiza datos. Solo vende',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Beneficios concretos
          </h2>
          <p className="text-xl text-gray-600">
            Lo que Promointegra gana con este sistema
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Key metric */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Comparativa de ingresos (proyección)
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-gray-200 mb-2">Escenario hoy</p>
              <p className="text-3xl font-bold">USD 2-5k/mes</p>
              <p className="text-sm text-gray-300 mt-2">Sin sistema, conversión baja</p>
            </div>
            <div>
              <p className="text-gray-200 mb-2">Con sistema</p>
              <p className="text-3xl font-bold">USD 25-60k/mes</p>
              <p className="text-sm text-gray-300 mt-2">Mes 6+ con vendedor productivo</p>
            </div>
            <div>
              <p className="text-gray-200 mb-2">Diferencia</p>
              <p className="text-3xl font-bold">+500%</p>
              <p className="text-sm text-gray-300 mt-2">Multiplicador de ingresos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
