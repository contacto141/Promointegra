import { Button } from '@/components/ui/button';

export default function SolutionSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            La solución: Máquina comercial B2B completa
          </h2>
          <p className="text-xl text-gray-600">
            Infraestructura + Software + Procesos + Automatización + IA
          </p>
        </div>

        {/* Solution blocks */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">CRM centralizado</h3>
            <p className="text-gray-700 mb-4">
              Pipedrive integrado. Todos los leads en un solo lugar. Pipeline visual. Seguimiento automático. Sincronización bidireccional.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Dashboard del pipeline</li>
              <li>✓ Búsqueda y filtros rápidos</li>
              <li>✓ Historial de interacciones</li>
              <li>✓ Campos personalizados</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Base de datos de calidad</h3>
            <p className="text-gray-700 mb-4">
              150+ leads iniciales segmentados. Validados. Priorizados. Scoring automático. Alertas de leads &quot;hot&quot;.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Prospección estratégica</li>
              <li>✓ Segmentación por industria</li>
              <li>✓ Scoring BANT automático</li>
              <li>✓ Importación de datos limpia</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Automatizaciones</h3>
            <p className="text-gray-700 mb-4">
              Flujos automáticos. Emails sincronizados. Webhooks. Secuencias de seguimiento. Notificaciones en tiempo real.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Workflows condicionales</li>
              <li>✓ Secuencias de email</li>
              <li>✓ Alertas de leads hot</li>
              <li>✓ Sincronización bidireccional</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp Bot + IA</h3>
            <p className="text-gray-700 mb-4">
              Bot responde FAQs. Califica leads. Captura datos. Integración con CRM. Handoff a vendedores.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Respuestas automáticas 24/7</li>
              <li>✓ Calificación de leads</li>
              <li>✓ Captura de datos</li>
              <li>✓ Integración CRM</li>
            </ul>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dashboard + Reportes</h3>
            <p className="text-gray-700 mb-4">
              19 KPIs medidos. Reportes semanales. Gráficos en tiempo real. Análisis de conversión. Exportación a PDF/Excel.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ KPIs de prospección</li>
              <li>✓ Tasa de cierre</li>
              <li>✓ Pipeline forecast</li>
              <li>✓ Análisis por industria</li>
            </ul>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-8">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Assets comerciales</h3>
            <p className="text-gray-700 mb-4">
              Pitch definido. Presentación profesional. Catálogo. Casos de éxito. Scripts de llamada. Objection handling.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Presentación PPT</li>
              <li>✓ Catálogo PDF</li>
              <li>✓ 3 casos de éxito</li>
              <li>✓ Scripts documentados</li>
            </ul>
          </div>
        </div>

        {/* Comparison */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Antes vs Después
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-red-600 mb-4 text-lg">Hoy (sin sistema)</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span>❌</span>
                  <span>Contratas vendedor sin CRM</span>
                </li>
                <li className="flex gap-2">
                  <span>❌</span>
                  <span>Prospección manual e ineficiente</span>
                </li>
                <li className="flex gap-2">
                  <span>❌</span>
                  <span>0 seguimiento estructurado</span>
                </li>
                <li className="flex gap-2">
                  <span>❌</span>
                  <span>Conversión baja (5-10%)</span>
                </li>
                <li className="flex gap-2">
                  <span>❌</span>
                  <span>Ingresos: USD 2-5k/mes</span>
                </li>
                <li className="flex gap-2">
                  <span>❌</span>
                  <span>Rotación de vendedores</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-green-600 mb-4 text-lg">Mes 6+ (con sistema)</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Vendedor entra a sistema maduro</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>150+ leads listos, segmentados</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Pipeline visual, 20-30 oportunidades</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Conversión 20-30%</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Ingresos: USD 25-60k/mes</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Vendedor productivo desde día 1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
