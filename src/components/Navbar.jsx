import { useState } from 'react'
import { useTheme } from '../context/useTheme.js'

const enlaces = [
  { href: '#hero', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
]

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/90 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/85">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Principal"
      >
        <a
          href="#hero"
          className="group flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3"
        >
          <span className="truncate text-lg font-bold tracking-tight text-sky-600 transition-colors group-hover:text-sky-500 dark:text-sky-400 dark:group-hover:text-sky-300">
            Cesar Rodas
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500 sm:inline">
            Junior Developer
          </span>
        </a>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-3">
          <ul className="mr-auto hidden items-center gap-1 md:flex md:mr-0">
            {enlaces.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:outline-sky-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-800 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10 dark:focus-visible:outline-sky-400"
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            {isDark ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-800 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 md:hidden dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10 dark:focus-visible:outline-sky-400"
            onClick={() => setMenuAbierto((v) => !v)}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="sr-only">{menuAbierto ? 'Cerrar' : 'Menú'}</span>
            {menuAbierto ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        className={`border-t border-zinc-200 bg-white/98 px-4 py-4 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/95 md:hidden ${menuAbierto ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-1">
          {enlaces.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block min-h-11 rounded-lg px-3 py-2.5 text-base font-medium text-zinc-800 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:outline-sky-400"
                onClick={cerrarMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
