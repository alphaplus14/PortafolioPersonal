const Contact = () => {
  const contactos = [
    {
      id: 1,
      nombre: "LinkedIn",
      icono: "💼",
      enlace: "https://linkedin.com/in/tuusuario",
      color: "hover:bg-blue-600"
    },
    {
      id: 2,
      nombre: "WhatsApp",
      icono: "💬",
      enlace: "https://wa.me/573000000000",
      color: "hover:bg-green-600"
    },
    {
      id: 3,
      nombre: "GitHub",
      icono: "🐙",
      enlace: "https://github.com/tuusuario",
      color: "hover:bg-gray-600"
    },
    {
      id: 4,
      nombre: "Correo",
      icono: "📧",
      enlace: "mailto:tucorreo@gmail.com",
      color: "hover:bg-red-600"
    }
  ]

  return (
    <section id="contacto" className="min-h-screen bg-gray-800 text-white py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">

        {/* Título */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Contacto
        </h2>
        <p className="text-center text-gray-400 mb-12">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        {/* Cards de contacto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {contactos.map((contacto) => (
            
              <a key={contacto.id}
              href={contacto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gray-900 ${contacto.color} rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <span className="text-5xl mb-4 block">{contacto.icono}</span>
              <h3 className="text-lg font-bold text-white">
                {contacto.nombre}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact