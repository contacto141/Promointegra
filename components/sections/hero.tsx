import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
          <p className="text-sm font-medium">Transformación comercial B2B</p>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Construye tu máquina comercial B2B sin vendedores caros
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
          Para Promointegra: infraestructura comercial completa, CRM integrado, prospección de calidad, automatizaciones y IA. Todo antes de contratar vendedores.
        </p>

        {/* Pain point */}
        <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-4 md:p-6 text-left max-w-2xl mx-auto">
          <p className="text-sm md:text-base font-semibold text-red-100">
            ❌ Sin CRM, sin pipeline, sin base de datos, sin prospección = pérdida de dinero garantizada si contratas vendedores ahora
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            variant="primary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
          >
            Ver propuesta completa ↓
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Agendar demo
          </Button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
          <div className="space-y-1">
            <p className="text-3xl font-bold">9</p>
            <p className="text-sm text-blue-100">Fases de implementación</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-blue-100">Meses de setup</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold">USD 5-6k</p>
            <p className="text-sm text-blue-100">Inversión total</p>
          </div>
        </div>
      </div>
    </section>
  );
}
