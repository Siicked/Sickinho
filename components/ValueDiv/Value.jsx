import React from 'react'
import descarga from '../../src/assets/descarga.jpg'
import zapatillas from '../../src/assets/zapatillas.jpg'


const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor  text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'></h1>
      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={descarga} alt="" className='w-[70px]' />
            </div>
              <span className='font-semibold text-textcolor text-[18px]'>
                Carteras y accesorios
              </span>
              
          </div>
          <img src={zapatillas} alt="" className='hover:animate-pulse w-[355px] flex gap-10 justify-center flex-wrap items-center' />
            <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
              Ver mas...
            </button>
            </p>
        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={descarga} alt="" className='w-[70px]' />
            </div>
              <span className='font-semibold text-textcolor text-[18px]'>
                Calzados
              </span>
          </div>
          <img src={zapatillas} alt="" className='hover:animate-pulse w-[355px] flex gap-10 justify-center flex-wrap items-center' />
            <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
              Ver mas...
            </button>
            </p>
        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={descarga} alt="" className='w-[70px]' />
            </div>
              <span className='font-semibold text-textcolor text-[18px]'>
                Indumentarias
              </span>
          </div>
          <img src={zapatillas} alt="" className='hover:animate-pulse w-[355px] flex gap-10 justify-center flex-wrap items-center' />
            <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
              Ver mas...
            </button>
            </p>
        </div>
      </div>

      <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]'>
        <div>
          <h1 className='text-blue-700 text-[30px] font-bold'>Los mejores productos de la provincia</h1>
          <h2 className='text-textColor text-[25px] font-bold'>Compra ahora</h2>
          </div>
          <button className='border-[3px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blue-700 hover:bg-white border-blue-800 '>
            Ir al carrito
          </button>
      </div>

    </div>
  )
}

export default Value