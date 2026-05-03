const Contact = () => {
  const contactos = [
    {
      id: 1,
      nombre: 'LinkedIn',
      icono: "https://static.cdnlogo.com/logos/l/66/linkedin-icon.svg",
      enlace: 'https://www.linkedin.com/in/cesar-rodas-2212b32b2',
      accent:
        'hover:border-blue-400 hover:bg-blue-50 dark:hover:border-blue-500/40 dark:hover:bg-blue-950/40',
    },
    {
      id: 2,
      nombre: 'WhatsApp',
      icono: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg',
      enlace: 'https://wa.me/573165728348',
      accent:
        'hover:border-green-400 hover:bg-green-50 dark:hover:border-green-500/40 dark:hover:bg-green-950/35',
    },
    {
      id: 3,
      nombre: 'GitHub',
      icono: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg',
      enlace: 'https://github.com/alphaplus14',
      accent:
        'hover:border-zinc-400 hover:bg-zinc-100 dark:hover:border-zinc-500/50 dark:hover:bg-zinc-800/80',
    },
    {
      id: 4,
      nombre: 'Correo',
      icono: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg',
      enlace: 'mailto:cesarrodas113@gmail.com',
      accent:
        'hover:border-red-400 hover:bg-red-50 dark:hover:border-red-500/40 dark:hover:bg-red-950/35',
      externo: false,
    },
  ]

  return (
    <section
      id="contacto"
      className="border-t border-zinc-200/80 bg-white py-20 text-zinc-900 dark:border-white/5 dark:bg-zinc-900 dark:text-white sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            ¿Hablamos?
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Contacto
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            ¿Tienes un proyecto en mente o quieres colaborar? Elige el canal que prefieras.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactos.map((contacto) => (
            <a
              key={contacto.id}
              href={contacto.enlace}
              {...(contacto.externo === false
                ? {}
                : { target: '_blank', rel: 'noopener noreferrer' })}
              className={`group flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center shadow-lg shadow-zinc-400/10 ring-1 ring-zinc-950/5 transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/15 dark:ring-white/5 dark:focus-visible:outline-sky-400 ${contacto.accent}`}
            >
              <div className="mb-3 flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/90 dark:bg-white dark:ring-white/25">
                <img
                  src={contacto.icono}
                  alt=""
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="text-lg font-semibold text-zinc-900 dark:text-white">{contacto.nombre}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
