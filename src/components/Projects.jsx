import { useState, useEffect } from 'react'

const Projects = () => {
  const [proyectos, setProyectos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch('https://api-portafolio-bay.vercel.app/api/proyectos')
      .then((res) => res.json())
      .then((data) => {
        setProyectos(data)
        setCargando(false)
      })
      .catch((error) => {
        console.error('Error al cargar proyectos:', error)
        setCargando(false)
      })
  }, [])

  return (
    <section
      id="proyectos"
      className="border-t border-zinc-200/80 bg-white py-20 text-zinc-900 dark:border-white/5 dark:bg-zinc-900 dark:text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            Trabajo reciente
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Mis proyectos
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Selección de proyectos con código abierto y demos en vivo para que puedas ver el resultado.
          </p>
        </header>

        {cargando && (
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950/80"
              >
                <div className="h-48 animate-pulse bg-zinc-200 dark:bg-zinc-800" />
                <div className="space-y-3 p-6">
                  <div className="h-5 w-3/5 animate-pulse rounded bg-zinc-300 dark:bg-zinc-700" />
                  <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                  <div className="h-4 w-4/5 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                  <div className="flex gap-3 pt-2">
                    <div className="h-10 flex-1 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                    <div className="h-10 flex-1 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!cargando && proyectos.length === 0 && (
          <p className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-14 text-center text-base leading-relaxed text-zinc-600 dark:border-white/15 dark:bg-zinc-950/50 dark:text-zinc-400">
            No se pudieron cargar los proyectos en este momento. Comprueba tu conexión o inténtalo más
            tarde.
          </p>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((proyecto) => (
            <article
              key={proyecto.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-400/15 ring-1 ring-zinc-950/5 transition hover:border-sky-300/80 hover:shadow-sky-500/15 dark:border-white/10 dark:bg-zinc-950/60 dark:shadow-black/20 dark:ring-white/5 dark:hover:border-sky-500/25 dark:hover:shadow-sky-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent opacity-90 dark:from-zinc-950/90"
                  aria-hidden
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-snug text-zinc-900 dark:text-white">{proyecto.titulo}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {proyecto.descripcion}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={proyecto.codigo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:border-white/25 dark:hover:bg-white/10 dark:focus-visible:outline-sky-400 sm:flex-none"
                  >
                    Código
                  </a>
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-sky-500 dark:shadow-sky-500/15 dark:hover:bg-sky-400 dark:focus-visible:outline-sky-300 sm:flex-none"
                  >
                    Demo en vivo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
