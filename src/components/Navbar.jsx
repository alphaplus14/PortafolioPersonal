const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-blue-400">Cesar Rodas</h1>
          <span className="text-gray-400 text-sm font-bold">• Junior Developer</span>
        </div>

        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-400 transition-colors">
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="hover:text-blue-400 transition-colors"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#habilidades"
              className="hover:text-blue-400 transition-colors"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="hover:text-blue-400 transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
