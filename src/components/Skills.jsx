import { useState, useEffect } from 'react'

const Skills = () => {
  const [habilidades, setHabilidades] = useState([])
  const [cargando, setCargando] = useState(true)

  // Consumir la API con Fetch
  useEffect(() => {
    fetch('http://localhost:3000/api/habilidades')
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
    <section id="habilidades" className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Mis Habilidades
        </h2>

        {/* Cargando */}
        {cargando && (
          <p className="text-center text-gray-400">Cargando habilidades...</p>
        )}

        {/* Grid de habilidades */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {habilidades.map((habilidad) => (
            <div
              key={habilidad.id}
              className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
            >
              <span className="text-5xl mb-4 block">{habilidad.icono}</span>
              <h3 className="text-lg font-bold text-white mb-1">
                {habilidad.nombre}
              </h3>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                habilidad.nivel === 'Intermedio'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-green-500/20 text-green-400'
              }`}>
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