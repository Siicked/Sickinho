import React from 'react'

const Navbar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
        <div className='logoDiv'>
            <h1 className='logo text-[25px] text-blue-950'>
              <strong>Casablanca</strong>Zapatos</h1>
        </div>
        <div className="menu flex gap-8 ">
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Trabajos</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Afiliados</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Sobre nosotros</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contacto</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>
        </div>
    </div>
  )
}

export default Navbar