import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {FcSearch} from 'react-icons/fc'

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-slate-200 rounded-[10px] p-[3rem]'>
      <form action="">
        <div className='firstDiv flex justify-between items-center rounder[8px] gap-[10px] bg-white p-5 shadow-lg shadow-slate-200'>
          <div className='flex gap-2 item-center'>
            <FcSearch className='text-[25px] icon'/>
            <input type='text' className='bg-transparent text-blue-800 focus:outline-none w-[100%]' placeholder='Buscar producto...'/>
            
          </div>

          <div className='flex gap-2 item-center'>
            <BsFillHouseDoorFill className='text-[25px] icon'/>
            <input type='text' className='bg-transparent text-blue-800 focus:outline-none w-[100%]' placeholder='Buscar por sucursal...'/>
            
          </div>

          <div className='flex gap-2 item-center'>
          <ImLocation2 className='text-[25px] icon'/>
            <input type='text' className='bg-transparent text-blue-800 focus:outline-none w-[100%]' placeholder='Buscar por ubicacion...'/>
          </div>
          <button className='bg-blue-800 h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-950'>
            Buscar
          </button>
          

        </div>
      </form>
      <div className='secDiv flex items-center gap-10 justify-center'>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Ordenar por color</label>
            <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
              <option value=''>Negro</option>
              <option value=''>Blanco</option>
              <option value=''>Gris</option>
              <option value=''>Rosa</option>
            </select>
        </div>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Ordenar por temporada</label>
            <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
              <option value=''>Verano</option>
              <option value=''>Otoño</option>
              <option value=''>Invierno</option>
              <option value=''>Primavera</option>
            </select>
        </div>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Ordenar por precio</label>
            <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
            <option value=''>Los más relevantes</option>
              <option value=''>De más alto a más bajo</option>
              <option value=''>De más bajo a más alto</option>
            </select>
        </div>
        
        <span className='text-[#a1a1a1 cursor-pointer]'>Borrar</span>
      </div>
    </div>
  )
}

export default Search