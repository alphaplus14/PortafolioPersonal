import { useState, useEffect } from 'react'

const slides = [
  {
    titulo: "César Augusto Rodas",
    subtitulo: "Desarrollador Web Full Stack",
    descripcion: "Desarrollo aplicaciones web modernas combinando frontend atractivo, backend sólido y bases de datos eficientes."
  },
  {
    titulo: "Construyo soluciones a la medida 💻",
    subtitulo: "React • Tailwind • Node.js • PHP • Laravel • C#",
    descripcion: "Creo interfaces intuitivas, APIs robustas y sistemas completos conectados a bases de datos."
  },
  {
    titulo: "Tecnologías y crecimiento 🚀",
    subtitulo: "SQL Server • MySQL • APIs REST • SENA ADSO",
    descripcion: "Experiencia en CRUDs, sistemas administrativos y aplicaciones tipo quiz. Siempre aprendiendo y mejorando."
  }
];

const Hero = () => {
  const [actual, setActual] = useState(0)

  // Cambia el slidecada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <section id="hero" className="min-h-screen bg-gray-900 text-white flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">


        <div className="transition-all duration-500">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-4">
            {slides[actual].titulo}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-4">
            {slides[actual].subtitulo}
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            {slides[actual].descripcion}
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActual(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                actual === index ? 'bg-blue-400 w-6' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>


        
         <a href="#proyectos"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Ver mis proyectos
        </a>

      </div>
    </section>
  )
}

export default Hero