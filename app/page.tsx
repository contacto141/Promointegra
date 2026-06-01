'use client';

import { useEffect, useRef, useState } from 'react';

const PLANS = [
  {
    id: 'ultra',
    name: 'Ultra MVP',
    subtitle: 'Google Sheets + Zapier Free',
    price: 235,
    badge: null,
    description: 'Para equipos que comienzan, presupuesto ultra bajo.',
    tools: [
      { name: 'Google Sheets', cost: 0 },
      { name: 'Zapier Free', cost: 0 },
      { name: 'Apollo Lite', cost: 149 },
      { name: 'Wati Free', cost: 0 },
      { name: 'Claude API (básico)', cost: 86 }
    ],
    pros: [
      'Costo mínimo (Google Sheets + Zapier gratis)',
      'Funciona desde Fase 1',
      'Escalable con desarrollo',
      'Sin onboarding complejo'
    ],
    contras: [
      'CRM completamente manual',
      'Automatizaciones limitadas',
      'Requiere disciplina operativa',
      'Para <20 leads solamente'
    ],
    notes: 'Para equipos con presupuesto muy limitado. Requiere gestión manual y disciplina operativa. Viable solo para fase inicial.'
  },
  {
    id: 'iniciar',
    name: 'Para Iniciar',
    subtitle: 'Google Sheets + Zapier',
    price: 435,
    badge: 'RECOMENDADA',
    description: 'Crea fundaciones sólidas sin over-engineering.',
    tools: [
      { name: 'Google Sheets', cost: 0 },
      { name: 'Zapier Free + Pro', cost: 50 },
      { name: 'Apollo Lite', cost: 149 },
      { name: 'Wati', cost: 200 },
      { name: 'Claude API', cost: 36 }
    ],
    pros: [
      'Costo bajo ($435/mes)',
      'Prospección + WhatsApp + IA funciona día 1',
      'Escalable con desarrollo',
      'Upgrade path claro (Opción 2/3)'
    ],
    contras: [
      'CRM manual (Sheets)',
      'Automatizaciones limitadas',
      'Requiere disciplina operativa',
      'A partir de 50+ leads, necesita refactor'
    ],
    notes: 'Recomendada para comenzar. Upgrade a Opción 2/3 cuando leads crezcan y necesiten más automatización.'
  },
  {
    id: 'stepup',
    name: 'Step Up',
    subtitle: 'Airtable + Zapier/Make',
    price: 520,
    badge: null,
    description: 'Un paso adelante: CRM visual + más automatización.',
    tools: [
      { name: 'Airtable Free/Pro', cost: 30 },
      { name: 'Zapier Pro', cost: 50 },
      { name: 'Apollo Lite', cost: 149 },
      { name: 'Wati', cost: 200 },
      { name: 'Claude API', cost: 91 }
    ],
    pros: [
      'CRM visual y flexible',
      'Airtable más potente que Sheets',
      'Más automatizaciones',
      'Mejor UX para equipo'
    ],
    contras: [
      'Más caro que Opción 1',
      'Airtable tiene curva de aprendizaje',
      'Sigue siendo semi-manual',
      'Puente, no solución final'
    ],
    notes: 'Para equipos con 20-50 leads. Transición entre MVP y full stack. Puente ideal antes de Pipedrive.'
  },
  {
    id: 'fullstack',
    name: 'Full Stack',
    subtitle: 'Pipedrive + Make',
    price: 593,
    badge: null,
    description: 'Cuando necesites escalar sin límites.',
    tools: [
      { name: 'Pipedrive Lite', cost: 59 },
      { name: 'Make', cost: 99 },
      { name: 'Apollo Lite', cost: 149 },
      { name: 'Wati', cost: 200 },
      { name: 'Claude API', cost: 86 }
    ],
    pros: [
      'CRM profesional (estándar B2B)',
      'Orquestación potente (Make)',
      'Listo para 1000+ leads',
      'Sin refactoring futuro'
    ],
    contras: [
      'Más caro al inicio',
      'Requiere onboarding Pipedrive + Make',
      'Overkill si solo tienes 10 leads/mes'
    ],
    notes: 'Para equipos que ya tienen 100+ leads/mes o esperan escalado rápido. Mejor ROI a largo plazo.'
  }
];

const ROADMAP = [
  {
    phase: 'Fase 1: Foundation',
    weeks: 'Semanas 1-4',
    objectives: 'Setup infraestructura, primeros leads prospectados',
    description: 'Configuramos CRM, Apollo busca primeros leads B2B segmentados, landing va live. Pruebas de flujo básico.',
    deliverables: 'CRM configurado, Apollo corriendo, landing live, primeros 50+ leads',
    kpi: '50+ leads cualificados'
  },
  {
    phase: 'Fase 2: Automation',
    weeks: 'Semanas 5-8',
    objectives: 'Flujos automáticos + IA activos, WhatsApp respondiendo',
    description: 'Zapier/Make orquesta flujos entre CRM y WhatsApp. Claude responde prospectos 24/7. Radar monitorea competencia. Primeros deals comienzan a entrar.',
    deliverables: 'WhatsApp Bot activo, Make workflows funcional, Radar corriendo, pipeline en movimiento',
    kpi: '20+ leads en pipeline automático'
  },
  {
    phase: 'Fase 3: Optimization',
    weeks: 'Semanas 9-12',
    objectives: 'Conversiones + refinamiento, clientes existentes recuperados',
    description: 'Catálogo dinámico mostrando trending. Remarketing activo a clientes existentes (migración + email automático). Ajustes basados en primeras conversiones. Setup para escalar.',
    deliverables: 'Catálogo dinámico, remarketing campaigns, primeras conversiones, datos para optimizar',
    kpi: '5-10 deals cerrados, base de clientes re-enganchada'
  }
];

export default function ProposalPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedPlan, setExpandedPlan] = useState<string | null>('iniciar');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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
      <section ref={(el) => { if (el) sectionRefs.current[0] = el; }} className="min-h-screen flex items-center justify-center px-6 py-20 md:py-0">
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
              <div className="text-3xl font-bold text-[#F96B09]">72x</div>
              <div className="text-sm text-[#8a857f]">ROI Esperado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={(el) => { if (el) sectionRefs.current[1] = el; }} className="min-h-screen flex items-center py-20">
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
              { title: 'WhatsApp Bot 24/7', desc: 'Wati + Claude para respuestas inteligentes' },
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
      <section ref={(el) => { if (el) sectionRefs.current[2] = el; }} className="min-h-screen flex items-center py-20">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#F96B09] text-sm uppercase tracking-widest">02</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 mb-6">
              4 Opciones <span className="text-[#F96B09]">de Stack</span>
            </h2>
            <p className="text-lg text-[#8a857f] max-w-2xl">
              Elige la opción que mejor se adapte a tu etapa. <span className="text-[#F96B09]">Haz click para ver desglose de herramientas.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                className={`cursor-pointer p-8 rounded-2xl border-2 transition-all ${
                  plan.badge === 'RECOMENDADA'
                    ? 'border-[#F96B09] bg-[rgba(249,107,9,0.1)] hover:bg-[rgba(249,107,9,0.15)]'
                    : 'border-[rgba(249,107,9,0.2)] bg-[rgba(249,107,9,0.05)] hover:border-[#F96B09] hover:bg-[rgba(249,107,9,0.1)]'
                } ${expandedPlan === plan.id ? 'ring-2 ring-[#F96B09]' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-6 bg-[#F96B09] text-[#0a0a0a] px-4 py-1 rounded-full text-xs font-bold uppercase">
                    {plan.badge}
                  </div>
                )}
                <h3 className="font-serif text-2xl mt-4 mb-2">{plan.name}</h3>
                <p className="text-[#8a857f] text-sm mb-6">{plan.subtitle}</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#F96B09]">${plan.price}</div>
                  <div className="text-sm text-[#8a857f]">USD/mes</div>
                </div>

                {expandedPlan === plan.id && (
                  <div className="mb-8 pt-6 border-t border-[rgba(249,107,9,0.3)] space-y-4">
                    <div className="text-xs font-semibold uppercase text-[#F96B09] mb-3">Herramientas desglosadas</div>
                    <div className="space-y-2">
                      {plan.tools.map((tool, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="text-[#f5f2ee]">{tool.name}</span>
                          <span className="text-[#F96B09] font-semibold">${tool.cost === 0 ? 'Gratis' : tool.cost}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-[rgba(249,107,9,0.3)] pt-3 flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-[#F96B09]">${plan.price}</span>
                    </div>
                  </div>
                )}

                <div className="mb-8 space-y-3">
                  {plan.pros.map((pro, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#F96B09] mt-1">✓</span>
                      <div>
                        <div className="font-semibold text-sm">{pro.split(':')[0]}</div>
                        {pro.split(':')[1] && <div className="text-xs text-[#8a857f]">{pro.split(':')[1]}</div>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[rgba(249,107,9,0.3)] space-y-2">
                  <div className="text-xs font-semibold uppercase text-[#8a857f] mb-3">{plan.id === 'ultra' || plan.id === 'iniciar' ? 'Contras a considerar' : 'Consideraciones'}</div>
                  {plan.contras.map((contra, idx) => (
                    <div key={idx} className="text-xs text-[#8a857f]">• {contra}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[rgba(249,107,9,0.08)] border border-[rgba(249,107,9,0.2)] rounded-xl p-8">
            <p className="text-sm text-[#8a857f]">
              <span className="text-[#F96B09] font-semibold">Nota importante:</span> Recomendamos comenzar con <strong>Opción 1 o 2 (Para Iniciar)</strong>.
              El objetivo es crear un ecosistema sólido pero flexible. Conforme crezcan los leads y necesiten más automatización,
              upgradean a Opción 3 o 4. Así evitan pagar por capacidad que aún no usan.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section ref={(el) => { if (el) sectionRefs.current[3] = el; }} className="min-h-screen flex items-center py-20">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#F96B09] text-sm uppercase tracking-widest">03</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 mb-6">
              Roadmap <span className="text-[#F96B09]">12 Semanas</span>
            </h2>
            <p className="text-lg text-[#8a857f]">Tres fases claras: Foundation → Automation → Optimization</p>
          </div>

          <div className="space-y-8">
            {ROADMAP.map((item, idx) => (
              <div key={idx} className="p-8 border border-[rgba(249,107,9,0.2)] rounded-xl bg-[rgba(249,107,9,0.05)] hover:border-[#F96B09] transition-all">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm text-[#8a857f] uppercase font-semibold mb-1">Fase {idx + 1}</div>
                      <h3 className="font-serif text-2xl">{item.phase}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-[#8a857f] uppercase">Timeline</div>
                      <div className="font-semibold text-[#F96B09]">{item.weeks}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <div className="text-xs font-semibold uppercase text-[#8a857f] mb-3">Objetivo</div>
                    <p className="text-sm text-[#f5f2ee]">{item.objectives}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-[#8a857f] mb-3">Descripción</div>
                    <p className="text-sm text-[#8a857f]">{item.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[rgba(249,107,9,0.2)] pt-6">
                  <div>
                    <div className="text-xs font-semibold uppercase text-[#8a857f] mb-3">Entregables</div>
                    <p className="text-sm text-[#f5f2ee]">{item.deliverables}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-[#F96B09] mb-3">KPI Esperado</div>
                    <div className="text-lg font-bold text-[#F96B09]">{item.kpi}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section ref={(el) => { if (el) sectionRefs.current[4] = el; }} className="min-h-screen flex items-center py-20">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#F96B09] text-sm uppercase tracking-widest">04</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 mb-6">
              Inversión <span className="text-[#F96B09]">&amp; ROI</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 rounded-xl border ${
                  plan.badge === 'RECOMENDADA'
                    ? 'border-[#F96B09] bg-[rgba(249,107,9,0.1)]'
                    : 'border-[rgba(249,107,9,0.2)] bg-[rgba(249,107,9,0.05)]'
                }`}
              >
                <h3 className="font-semibold mb-4 text-sm">{plan.name}</h3>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-[#F96B09]">${plan.price}/mes</div>
                  <div className="text-sm text-[#8a857f]">${plan.price * 3} (3 meses)</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 border border-[rgba(249,107,9,0.2)] rounded-xl bg-[rgba(249,107,9,0.05)] mb-12">
            <h3 className="font-serif text-2xl mb-6">Proyección ROI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-sm text-[#8a857f] uppercase mb-3">Supuesto</div>
                <div className="text-sm space-y-1">
                  <div>• 15 deals en 3 meses</div>
                  <div>• Ticket: $6,300 USD</div>
                  <div>• Conversión: 2-3%</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-[#8a857f] uppercase mb-3">Ingresos Esperados</div>
                <div className="text-3xl font-bold text-[#F96B09]">$94,500</div>
                <div className="text-sm text-[#8a857f]">(15 deals × $6,300)</div>
              </div>
              <div>
                <div className="text-sm text-[#8a857f] uppercase mb-3">ROI Esperado</div>
                <div className="text-3xl font-bold text-[#F96B09]">72x</div>
                <div className="text-sm text-[#8a857f]">(con Opción 1)</div>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(249,107,9,0.08)] border border-[rgba(249,107,9,0.2)] rounded-xl p-8 mb-12">
            <h3 className="font-semibold mb-4">Siguiente Paso</h3>
            <p className="text-[#8a857f] mb-6">
              Reunión de alineamiento para:
            </p>
            <ul className="space-y-2 text-sm">
              <li>✓ Validar supuestos sobre ticket promedio y tasa de conversión</li>
              <li>✓ Decidir opción (recomendamos Opción 1 o 2 para comenzar)</li>
              <li>✓ Timeline de kick-off (ideal: próximas 2 semanas)</li>
              <li>✓ Asignación de contacto técnico de Promointegra</li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
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