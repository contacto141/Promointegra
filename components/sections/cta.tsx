import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          ¿Listo para construir tu máquina comercial?
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Tenemos la propuesta estratégica completa, el roadmap técnico definido, el stack tech seleccionado y los entregables claros.
        </p>

        {/* Options */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">📋 Ver propuesta completa</h3>
            <p className="text-gray-300 mb-6">
              15,000 palabras. Estrategia, roadmap, herramientas, KPIs, recomendaciones.
            </p>
            <Button variant="primary" size="md" className="w-full">
              Descargar propuesta
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">📞 Agendar demo</h3>
            <p className="text-gray-300 mb-6">
              30 minutos. Explicar propuesta, responder preguntas, siguiente paso.
            </p>
            <Button variant="primary" size="md" className="w-full">
              Agendar reunión
            </Button>
          </div>
        </div>

        {/* What's included */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6">Qué incluye la propuesta</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex gap-3">
              <span>✓</span>
              <span>Diagnóstico del problema comercial</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>Objetivo estratégico claro</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>Roadmap en 9 fases (20 semanas)</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>Stack tech recomendado</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>Funnel B2B específico</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>Sistema de prospección detallado</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>Análisis IA en WhatsApp</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>19 KPIs con targets</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>Checklist pre-vendedores</span>
            </div>
            <div className="flex gap-3">
              <span>✓</span>
              <span>Recomendación final ejecutiva</span>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex justify-center gap-8 flex-wrap text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>Propuesta confidencial</span>
          </div>
          <div className="flex items-center gap-2">
            <span>⚡</span>
            <span>Sin compromisos</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span>Respuesta en 24 horas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
