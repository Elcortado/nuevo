import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="md:col-span-8 flex items-center gap-4 justify-center">
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
            Inicio
        </a>
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
            Nostros
        </a>
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
            Servicios
        </a>
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
            Blog
        </a>
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
            Contacto
        </a>
    </nav>
    
    </>
  )
}

export default Navbar