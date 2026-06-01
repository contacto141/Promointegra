# Promointegra — Landing Page

Landing profesional que explica la propuesta comercial de transformación digital para Promointegra.

## Stack tech

- **Framework:** Next.js 15 + React 19
- **Lenguaje:** TypeScript
- **Styling:** Tailwind CSS
- **Componentes:** Reutilizables, sin dependencias externas
- **Deploy:** Vercel (auto-deploy en push)

## Características

- ✅ 100% responsive (mobile, tablet, desktop)
- ✅ Secciones: Hero, Problema, Solución, Roadmap, Beneficios, CTA, Footer
- ✅ Smooth scrolling
- ✅ Performance optimizado (Lighthouse score > 90)
- ✅ SEO ready
- ✅ Sin dependencias externas (puro Tailwind + componentes custom)

## Secciones

1. **Hero:** Propuesta de valor, métricas clave
2. **Problem:** Los 6 problemas que enfrenta Promointegra hoy
3. **Solution:** Las 6 soluciones que ofrecemos
4. **Roadmap:** 9 fases en 20 semanas, timeline visual
5. **Benefits:** 8 beneficios concretos, comparativa de ingresos
6. **CTA:** Call to action con opciones de propuesta completa o demo
7. **Footer:** Enlaces, contacto, información legal

## Instalación local

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

```bash
# 1. Clonar repositorio
git clone https://github.com/contacto141/Promointegra.git
cd Promointegra

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:3000
```

## Deploy en Vercel

### Opción 1: Vercel Dashboard (recomendado)

1. Ir a [vercel.com](https://vercel.com)
2. Click en "New Project"
3. Seleccionar repositorio GitHub "Promointegra"
4. Vercel detecta Next.js automáticamente
5. Click "Deploy"
6. En 2-3 minutos estará en vivo

### Opción 2: CLI de Vercel

```bash
npm install -g vercel
vercel
# Sigue las instrucciones interactivas
```

## Estructura de carpetas

```
Promointegra/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal (/landing)
│   └── globals.css         # Estilos globales
├── components/
│   ├── ui/
│   │   └── button.tsx      # Componente botón reutilizable
│   └── sections/
│       ├── hero.tsx        # Sección hero
│       ├── problem.tsx     # Sección problema
│       ├── solution.tsx    # Sección solución
│       ├── roadmap.tsx     # Sección roadmap
│       ├── benefits.tsx    # Sección beneficios
│       ├── cta.tsx         # Sección call-to-action
│       └── footer.tsx      # Footer
├── public/                 # Assets estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Comandos útiles

```bash
# Desarrollo
npm run dev              # Inicia servidor en localhost:3000

# Build para producción
npm run build           # Compila para deploy

# Serve producción local
npm run start           # Sirve build local

# Linting
npm run lint           # Chequea código

# Type checking
npm run type-check     # Verifica tipos TypeScript
```

## Optimizaciones

- **Images:** Optimizadas automáticamente por Next.js
- **CSS:** Tailwind CSS (solo lo usado se incluye en build)
- **JavaScript:** Code splitting automático por Next.js
- **Caching:** Vercel edge caching por defecto

## Variables de entorno

No se requieren variables de entorno para la landing pura. Si agregan formularios o integraciones, crear `.env.local`:

```bash
# Ejemplo para futuro (cuando agreguen forma de contacto)
NEXT_PUBLIC_FORM_API_URL=https://api.ejemplo.com
```

## Performance

Target de performance:
- Lighthouse Score: > 90
- Core Web Vitals: Green
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

Vercel proporciona dashboards de analytics automático.

## Customización

### Cambiar colores
Editar `tailwind.config.ts`:
```ts
theme: {
  colors: {
    blue: { 600: '#...' },
    // ...
  }
}
```

### Agregar secciones nuevas
1. Crear componente en `components/sections/`
2. Importar en `app/page.tsx`
3. Agregar al layout

### Cambiar contenido
Editar directamente en cada archivo de sección (componentes muy simples, sin abstracciones innecesarias).

## Próximos pasos

Después de la landing inicial:

1. **Fase 2:** Agregar formulario de contacto / lead capture
2. **Fase 3:** Integración con CRM (Pipedrive)
3. **Fase 4:** Blog con caso de estudio de Promointegra
4. **Fase 5:** Dashboard de prospección (solo login)

## Support

- Documentación de Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Docs: https://vercel.com/docs

## Licencia

Copyright © 2026 Promointegra. Todos los derechos reservados.
