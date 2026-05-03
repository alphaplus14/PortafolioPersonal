const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-100 px-4 py-10 text-center text-zinc-600 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-500 sm:px-6">
      <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-400">
        Desarrollado con dedicación por{' '}
        <span className="font-semibold text-sky-600 dark:text-sky-400"> Cesar Rodas</span>
      </p>
      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
        © {new Date().getFullYear()} — Todos los derechos reservados
      </p>
    </footer>
  )
}

export default Footer
