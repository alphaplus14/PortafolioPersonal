const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center border-t border-gray-700">
      <p className="text-sm">
        Desarrollado con ❤️ por{' '}
        <span className="text-blue-400 font-semibold">Cesar Rodas</span>
      </p>
      <p className="text-xs mt-1">
        © {new Date().getFullYear()} — Todos los derechos reservados
      </p>
    </footer>
  )
}

export default Footer