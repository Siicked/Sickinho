import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blue-600 rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-center justify-center'>
        <div>
        <div className='logoDiv'>
            <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
              <strong>Casablanca</strong>Zapatos
            </h1>
        </div>
        
        <p className='text-white opacity-70 leading-7'>
            Tu mejor compra
        </p>
        </div>
        <div className='grid'>
          <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white '>
            Nuestra empresa
          </span>
          <div className='grid  gap-3 '>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Sobre nosotros</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Contactanos</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Novedades</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
          </div>
        </div>
        <div className='grid'>
          <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white '>
            Soporte
          </span>
          <div className='grid  gap-3 '>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Ayuda online</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Nuestro contacto</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Enviar ticket</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
          </div>
        </div>
        <div className='grid'>
          <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white '>
            Servicios
          </span>
          <div className='grid  gap-3 '>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Sucursales</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Afiliados</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Eventos</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
          </div>
        </div>
        <div>
          <h1 className='text-white text-[20px] underline-offset-1'>Contactanos</h1>
            <small className='text-[14px] text-white'>
              
              CasablancaZapatos@Hotmail.com
            </small>
            <div className='icons flex gap-4 py-[1rem]'>
          <AiFillInstagram className='bg-white p-[2px] h-[35px] w-[35px] rounded-full icon text-blue-600'/>
          <AiFillTwitterCircle className='bg-white p-[2px]  h-[35px] w-[35px] rounded-full icon text-blue-600'/>
          <AiFillFacebook className='bg-white  p-[2px] h-[35px] w-[35px] rounded-full icon text-blue-600'/>
          <AiOutlineWhatsApp className='bg-white p-[2px] h-[35px] w-[35px] rounded-full icon text-blue-600'/>
        </div>

        </div>

    </div>
  )
}

export default Footer