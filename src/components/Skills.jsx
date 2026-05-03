import { useState, useEffect } from 'react'

const claseNivel = (nivel) => {
  const n = String(nivel ?? '').toLowerCase()
  if (n.includes('intermedio'))
    return 'bg-sky-500/20 text-sky-800 ring-1 ring-sky-500/35 dark:bg-sky-500/15 dark:text-sky-300 dark:ring-sky-500/35'
  if (n.includes('avanz'))
    return 'bg-violet-500/15 text-violet-800 ring-1 ring-violet-500/35 dark:bg-violet-500/15 dark:text-violet-300 dark:ring-violet-500/35'
  if (n.includes('bás') || n.includes('basico'))
    return 'bg-emerald-500/15 text-emerald-800 ring-1 ring-emerald-500/35 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/35'
  return 'bg-zinc-300/80 text-zinc-800 ring-1 ring-zinc-400/50 dark:bg-zinc-600/40 dark:text-zinc-200 dark:ring-white/10'
}

const Skills = () => {
  const [habilidades, setHabilidades] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch('https://api-portafolio-bay.vercel.app/api/habilidades')
      .then((res) => res.json())
      .then((data) => {
        setHabilidades(data)
        setCargando(false)
      })
      .catch((error) => {
        console.error('Error al cargar habilidades:', error)
        setCargando(false)
      })
  }, [])

  return (
    <section
      id="habilidades"
      className="border-t border-zinc-200/80 bg-zinc-100 py-20 text-zinc-900 dark:border-white/5 dark:bg-zinc-950 dark:text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            Stack y herramientas
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Mis habilidades
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Tecnologías que uso en proyectos reales y en formación continua.
          </p>
        </header>

        {cargando && (
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="animate-pulse rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-zinc-900/80"
              >
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <div className="mx-auto mb-3 h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="mx-auto h-5 w-20 rounded-full bg-zinc-200 dark:bg-zinc-800" />
              </div>
            ))}
          </div>
        )}

        {!cargando && habilidades.length === 0 && (
          <p className="rounded-2xl border border-dashed border-zinc-300 bg-white/80 px-6 py-14 text-center text-base leading-relaxed text-zinc-600 dark:border-white/15 dark:bg-zinc-900/50 dark:text-zinc-400">
            No se pudieron cargar las habilidades. Vuelve a intentarlo en unos minutos.
          </p>
        )}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {habilidades.map((habilidad) => (
            <div
              key={habilidad.id}
              className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-lg shadow-zinc-400/10 ring-1 ring-zinc-950/5 transition hover:border-sky-300/70 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-black/20 dark:ring-white/5 dark:hover:border-sky-500/20 dark:hover:bg-zinc-900"
            >
              <div className="mb-4 flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/90 dark:bg-white dark:ring-white/25">
                <img
                  src={habilidad.icono}
                  alt={habilidad.nombre}
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <h3 className="text-lg font-bold leading-snug text-zinc-900 dark:text-white">{habilidad.nombre}</h3>
              <span
                className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${claseNivel(habilidad.nivel)}`}
              >
                {habilidad.nivel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
