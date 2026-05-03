import { useState, useEffect } from 'react'

const slides = [
  {
    titulo: 'César Augusto Rodas',
    subtitulo: 'Desarrollador Web Full Stack',
    descripcion:
      'Desarrollo aplicaciones web modernas combinando frontend atractivo, backend sólido y bases de datos eficientes.',
  },
  {
    titulo: 'Construyo soluciones a la medida 💻',
    subtitulo: 'React • Tailwind • Node.js • PHP • Laravel • C#',
    descripcion:
      'Creo interfaces intuitivas, APIs robustas y sistemas completos conectados a bases de datos.',
  },
  {
    titulo: 'Tecnologías y crecimiento 🚀',
    subtitulo: 'SQL Server • MySQL • APIs REST • SENA ADSO',
    descripcion:
      'Experiencia en CRUDs, sistemas administrativos y aplicaciones tipo quiz. Siempre aprendiendo y mejorando.',
  },
]

const Hero = () => {
  const [actual, setActual] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % slides.length)
    }, 4500)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 pt-[var(--nav-offset)] text-zinc-900 [--nav-offset:7rem] dark:bg-zinc-950 dark:text-white sm:[--nav-offset:5.5rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,165,233,0.14),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.18),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(228,228,231,0.95),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(24,24,27,0.9),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-8 text-center sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400/90">
          Portafolio
        </p>

        <div className="min-h-[280px] sm:min-h-[240px] md:min-h-[220px]">
          <div key={actual} className="hero-slide-content">
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
              {slides[actual].titulo}
            </h1>
            <h2 className="mt-4 text-lg font-semibold leading-snug text-zinc-600 dark:text-zinc-300 sm:text-xl md:text-2xl">
              {slides[actual].subtitulo}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              {slides[actual].descripcion}
            </p>
          </div>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Seleccionar mensaje"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={actual === index}
              aria-label={`Mensaje ${index + 1} de ${slides.length}`}
              onClick={() => setActual(index)}
              className="rounded-full p-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:focus-visible:outline-sky-400"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  actual === index
                    ? 'h-2 w-10 bg-sky-600 shadow-[0_0_12px_rgba(2,132,199,0.35)] dark:bg-sky-400 dark:shadow-[0_0_12px_rgba(56,189,248,0.45)]'
                    : 'h-2.5 w-2.5 bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-600 dark:hover:bg-zinc-500'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#proyectos"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-sky-600/25 transition hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-sky-500 dark:shadow-sky-500/20 dark:hover:bg-sky-400 dark:focus-visible:outline-sky-300"
          >
            Ver mis proyectos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
