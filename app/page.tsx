'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProposalPage() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = sectionRefs.current[index];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative bg-[#0a0a0a] text-[#f5f2ee] min-h-screen overflow-x-hidden">
      {/* Side Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col gap-6">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`transition-all duration-300 ${
                activeSection === index
                  ? 'w-6 h-6 bg-[#F96B09] rounded-full'
                  : 'w-2 h-2 bg-[rgba(249,107,9,0.3)] rounded-full hover:bg-[rgba(249,107,9,0.6)]'
              }`}
              aria-label={`Ir a sección ${index + 1}`}
            />
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={(el) => (sectionRefs.current[0] = el)} className="min-h-screen flex items-center justify-center px-6 py-20 md:py-0">
        <div className="max-w-4xl text-center animate-fade-in">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 border border-[#F96B09] rounded-full mb-6">
              <span className="text-[#F96B09] text-xs uppercase tracking-widest font-semibold">Sanru Developer</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
              Propuesta Comercial
              <br />
              <span className="text-[#F96B09]">Promointegra</span>
            </h1>
            <p className="text-lg md:text-xl text-[#8a857f] max-w-2xl mx-auto mb-8">
              De boca en boca a máquina comercial.
              <br />
              Prospección + CRM + IA + Landing + Remarketing en 12 semanas.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-3 bg-[#F96B09] text-[#0a0a0a] rounded-lg font-semibold hover:bg-[#ff8533] transition-colors">
              Ver propuesta
            </button>
            <button className="px-8 py-3 border border-[#F96B09] text-[#F96B09] rounded-lg font-semibold hover:bg-[rgba(249,107,9,0.1)] transition-colors">
              Descargar PDF
            </button>
          </div>
          <div className="flex justify-center gap-8 text-center mt-16">
            <div>
              <div className="text-3xl font-bold text-[#F96B09]">8</div>
              <div className="text-sm text-[#8a857f]">Servicios</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F96B09]">12</div>
              <div className="text-sm text-[#8a857f]">Semanas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F96B09]">50x</div>
              <div className="text-sm text-[#8a857f]">ROI Esperado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={(el) => (sectionRefs.current[1] = el)} className="min-h-screen flex items-center py-20">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#F96B09] text-sm uppercase tracking-widest">01</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 mb-6">
              Servicios <span className="text-[#F96B09]">Incluidos</span>
            </h2>
            <p className="text-lg text-[#8a857f] max-w-2xl">
              Ocho servicios integrados para transformar tu prospección y ventas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Prospección IA', desc: 'Apollo.io + enriquecimiento Claude' },
              { title: 'CRM', desc: 'Para gestionar el pipeline' },
              { title: 'WhatsApp Bot 24/7', desc: 'Twilio + Claude para respuestas inteligentes' },
              { title: 'Landing Page', desc: 'Sanru branding, SEO, Google Ads ready' },
              { title: 'Catálogo Dinámico', desc: 'Hits del Mes con trending automático' },
              { title: 'Radar Competitivo', desc: 'IA monitorea trends + market intel' },
              { title: 'Orquestación', desc: 'Flujos visuales y automatizaciones' },
              { title: 'Remarketing', desc: 'Email + campañas a clientes existentes' },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 border border-[rgba(249,107,9,0.2)] rounded-xl bg-[rgba(249,107,9,0.05)] hover:border-[#F96B09] hover:bg-[rgba(249,107,9,0.1)] transition-all duration-300 hover:translate-y-[-4px]"
              >
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-[#8a857f] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section ref={(el) => (sectionRefs.current[2] = el)} className="min-h-screen flex items-center py-20">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#F96B09] text-sm uppercase tracking-widest">02</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 mb-6">
              3 Opciones <span className="text-[#F96B09]">de Stack</span>
            </h2>
            <p className="text-lg text-[#8a857f] max-w-2xl">
              Elige la opción que mejor se adapte a tu etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Option 1 - Para Iniciar */}
            <div className="relative p-8 border-2 border-[#F96B09] rounded-2xl bg-[rgba(249,107,9,0.1)] hover:bg-[rgba(249,107,9,0.15)] transition-all">
              <div className="absolute -top-4 left-6 bg-[#F96B09] text-[#0a0a0a] px-4 py-1 rounded-full text-xs font-bold uppercase">
                RECOMENDADA
              </div>
              <h3 className="font-serif text-2xl mt-4 mb-2">Para Iniciar</h3>
              <p className="text-[#8a857f] text-sm mb-6">Google Sheets + Zapier</p>
              <div className="mb-8">
                <div className="text-4xl font-bold text-[#F96B09]">$435</div>
                <div className="text-sm text-[#8a857f]">USD/mes</div>
              </div>
              <div className="mb-8 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#F96B09] mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-sm">Comienza sin inversión grande</div>
                    <div className="text-xs text-[#8a857f]">Crea fundaciones sólidas del ecosistema</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#F96B09] mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-sm">Prospección + WhatsApp + IA</div>
                    <div className="text-xs text-[#8a857f]">Lo esencial funciona día 1</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#F96B09] mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-sm">Escalable con desarrollo</div>
                    <div className="text-xs text-[#8a857f]">Upgrade cuando crezcan los leads</div>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-[rgba(249,107,9,0.3)] space-y-2">
                <div className="text-xs font-semibold uppercase text-[#F96B09] mb-3">Contras a considerar</div>
                <div className="text-xs text-[#8a857f]">• CRM manual (sheets)</div>
                <div className="text-xs text-[#8a857f]">• Automatizaciones limitadas</div>
                <div className="text-xs text-[#8a857f]">• Requiere disciplina operativa</div>
              </div>
            </div>

            {/* Option 2 - Step Up */}
            <div className="p-8 border border-[rgba(249,107,9,0.2)] rounded-2xl bg-[rgba(249,107,9,0.05)] hover:border-[#F96B09] hover:bg-[rgba(249,107,9,0.1)] transition-all hover:translate-y-[-4px]">
              <h3 className="font-serif text-2xl mb-2">Step Up</h3>
              <p className="text-[#8a857f] text-sm mb-6">Airtable + Zapier</p>
              <div className="mb-8">
                <div className="text-4xl font-bold text-[#F96B09]">$520</div>
                <div className="text-sm text-[#8a857f]">USD/mes</div>
              </div>
              <div className="mb-8 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#F96B09] mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-sm">CRM visual + flexible</div>
                    <div className="text-xs text-[#8a857f]">Airtable es más potente que Sheets</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#F96B09] mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-sm">Más automatizaciones</div>
                    <div className="text-xs text-[#8a857f]">Zapier maneja más flujos</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#F96B09] mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-sm">Transición hacia escalado</div>
                    <div className="text-xs text-[#8a857f]">Puente entre MVP y full stack</div>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-[rgba(249,107,9,0.3)] space-y-2">
                <div className="text-xs font-semibold uppercase text-[#8a857f] mb-3">Consideraciones</div>
                <div className="text-xs text-[#8a857f]">• Más caro que Opción 1</div>
                <div className="text-xs text-[#8a857f]">• Curva de aprendizaje Airtable</div>
                <div className="text-xs text-[#8a857f]">• Sigue siendo &quot;manual&quot; en puntos</div>
              </div>
            </div>

            {/* Option 3 - Full Stack */}
            <div className="p-8 border border-[rgba(249,107,9,0.2)] rounded-2xl bg-[rgba(249,107,9,0.05)] hover:border-[#F96B09] hover:bg-[rgba(249,107,9,0.1)] transition-all hover:translate-y-[-4px]">
              <h3 className="font-serif text-2xl mb-2">Full Stack</h3>
              <p className="text-[#8a857f] text-sm mb-6">Pipedrive + Make</p>
              <div className="mb-8">
                <div className="text-4xl font-bold text-[#F96B09]">$593</div>
                <div className="text-sm text-[#8a857f]">USD/mes</div>
              </div>
              <div className="mb-8 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#F96B09] mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-sm">CRM profesional</div>
                    <div className="text-xs text-[#8a857f]">Pipedrive es el estándar B2B</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#F96B09] mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-sm">Orquestación no-code</div>
                    <div className="text-xs text-[#8a857f]">Make es más visual y potente</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#F96B09] mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-sm">Listo para miles de leads</div>
                    <div className="text-xs text-[#8a857f]">Escala sin refactoring</div>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-[rgba(249,107,9,0.3)] space-y-2">
                <div className="text-xs font-semibold uppercase text-[#8a857f] mb-3">Para cuando crezcan</div>
                <div className="text-xs text-[#8a857f]">• Más inversión inicial</div>
                <div className="text-xs text-[#8a857f]">• Requiere onboarding</div>
                <div className="text-xs text-[#8a857f]">• Vale la pena a escala</div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[rgba(249,107,9,0.08)] border border-[rgba(249,107,9,0.2)] rounded-xl">
            <p className="text-sm text-[#8a857f]">
              <span className="text-[#F96B09] font-semibold">Nota importante:</span> Recomendamos comenzar con la <strong>Opción 1 (Para Iniciar)</strong>.
              El objetivo es crear un ecosistema sólido pero flexible. Conforme crezcan los leads y necesiten más automatización,
              upgradean a Opción 2 o 3. Así evitan pagar por capacidad que aún no usan.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section ref={(el) => (sectionRefs.current[3] = el)} className="min-h-screen flex items-center py-20">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#F96B09] text-sm uppercase tracking-widest">03</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 mb-6">
              Roadmap <span className="text-[#F96B09]">12 Semanas</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                phase: 'Fase 1: Foundation',
                weeks: 'Semanas 1-4',
                objectives: 'Setup infraestructura, primeros leads prospectados',
                deliverables: 'Pipedrive/Sheets configurado, Apollo corriendo, landing live',
                kpi: '50+ leads cualificados',
              },
              {
                phase: 'Fase 2: Automation',
                weeks: 'Semanas 5-8',
                objectives: 'Flujos automáticos activos',
                deliverables: 'WhatsApp Bot, Make workflows, Radar corriendo',
                kpi: '20+ leads en pipeline automático',
              },
              {
                phase: 'Fase 3: Optimization',
                weeks: 'Semanas 9-12',
                objectives: 'Primeras conversiones y refinamiento',
                deliverables: 'Catálogo dinámico, remarketing a clientes existentes',
                kpi: '5-10 deals cerrados',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-[rgba(249,107,9,0.2)] rounded-xl bg-[rgba(249,107,9,0.05)] hover:border-[#F96B09] transition-all">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div>
                    <div className="text-sm text-[#8a857f] uppercase">Fase</div>
                    <div className="font-serif text-xl mt-1">{item.phase}</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#8a857f] uppercase">Timeline</div>
                    <div className="font-semibold mt-1">{item.weeks}</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#8a857f] uppercase">Objetivos</div>
                    <div className="text-sm mt-1">{item.objectives}</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#8a857f] uppercase">Entregables</div>
                    <div className="text-sm mt-1">{item.deliverables}</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#8a857f] uppercase">KPI</div>
                    <div className="text-[#F96B09] font-semibold mt-1">{item.kpi}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section ref={(el) => (sectionRefs.current[4] = el)} className="min-h-screen flex items-center py-20">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#F96B09] text-sm uppercase tracking-widest">04</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 mb-6">
              Inversión <span className="text-[#F96B09]">&amp; ROI</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { option: 'Opción 1: Para Iniciar', totalMo: '$435/mes', total3mo: '$1,305' },
              { option: 'Opción 2: Step Up', totalMo: '$520/mes', total3mo: '$1,560' },
              { option: 'Opción 3: Full Stack', totalMo: '$593/mes', total3mo: '$1,779' },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl border ${
                  idx === 0
                    ? 'border-[#F96B09] bg-[rgba(249,107,9,0.1)]'
                    : 'border-[rgba(249,107,9,0.2)] bg-[rgba(249,107,9,0.05)]'
                }`}
              >
                <h3 className="font-semibold mb-4">{item.option}</h3>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-[#F96B09]">{item.totalMo}</div>
                  <div className="text-sm text-[#8a857f]">{item.total3mo} (3 meses)</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 border border-[rgba(249,107,9,0.2)] rounded-xl bg-[rgba(249,107,9,0.05)] mb-12">
            <h3 className="font-serif text-2xl mb-6">Proyección ROI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-sm text-[#8a857f] uppercase mb-2">Supuesto</div>
                <div>
                  <div className="text-sm mb-1">• 15 deals en 3 meses</div>
                  <div className="text-sm mb-1">• Ticket: $6,300 USD</div>
                  <div className="text-sm">• Conversión: 2-3%</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-[#8a857f] uppercase mb-2">Ingresos Esperados</div>
                <div className="text-3xl font-bold text-[#F96B09]">$94,500</div>
                <div className="text-sm text-[#8a857f]">(15 deals × $6,300)</div>
              </div>
              <div>
                <div className="text-sm text-[#8a857f] uppercase mb-2">ROI</div>
                <div className="text-3xl font-bold text-[#F96B09]">50x</div>
                <div className="text-sm text-[#8a857f]">5.200% en 3 meses</div>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(249,107,9,0.08)] border border-[rgba(249,107,9,0.2)] rounded-xl p-8">
            <h3 className="font-semibold mb-4">Siguiente Paso</h3>
            <p className="text-[#8a857f] mb-6">
              Reunión de alineamiento para:
            </p>
            <ul className="space-y-2 text-sm">
              <li>✓ Validar supuestos sobre ticket promedio y tasa de conversión</li>
              <li>✓ Decidir opción (recomendamos Opción 1 para comenzar)</li>
              <li>✓ Timeline de kick-off (ideal: próximas 2 semanas)</li>
              <li>✓ Asignación de contacto técnico de Promointegra</li>
            </ul>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:contacto@somosgens.com?subject=Propuesta%20Promointegra%20-%20Reunión"
              className="px-8 py-3 bg-[#F96B09] text-[#0a0a0a] rounded-lg font-semibold hover:bg-[#ff8533] transition-colors text-center"
            >
              Agendar Reunión
            </a>
            <button className="px-8 py-3 border border-[#F96B09] text-[#F96B09] rounded-lg font-semibold hover:bg-[rgba(249,107,9,0.1)] transition-colors">
              Descargar Propuesta
            </button>
          </div>
        </div>
      </section>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section > div {
          animation: slideInUp 0.8s ease-out;
        }
      `}</style>
    </main>
  );
}