import { useState, useEffect } from 'react'

const Projects = () => {
  const [proyectos, setProyectos] = useState([])
  const [cargando, setCargando] = useState(true)

  // Consumir la API con Fetch
  useEffect(() => {
    fetch('http://localhost:3000/api/proyectos')
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
    <section id="proyectos" className="min-h-screen bg-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">


        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Mis Proyectos
        </h2>

  
        {cargando && (
          <p className="text-center text-gray-400">Cargando proyectos...</p>
        )}

  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
            >
              {/* Imagen */}
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-48 object-cover"
              />


              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {proyecto.descripcion}
                </p>


                <div className="flex gap-3">
                  
                   <a href={proyecto.codigo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                  >
                    💻 Código
                  </a>
                  
                    <a href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                  >
                    🚀 Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects