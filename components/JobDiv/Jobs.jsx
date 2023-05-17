import React from 'react'
import {BiTimeFive} from 'react-icons/bi';
import asdad from '../../src/assets/asdad.jpg';
import descarga from '../../src/assets/descarga.jpg';
import borcegos from '../../src/assets/borcegos.jpg';
import botas from '../../src/assets/botas.png';
import zapatillas from '../../src/assets/zapatillas.jpg';
import texanas from '../../src/assets/texanas.jpg';
import slippers from '../../src/assets/slippers.jpg';


const Data = [
  {
    id:1,
    image: descarga,
    title: 'Botas',
    description: borcegos
  },
  {
    id:2,
    image: descarga,
    title: 'Tacos',
    description: borcegos
  },
  {
    id:3,
    image: descarga,
    title: 'Zapatos',
    description: borcegos
  },
  {
    id:4,
    image: descarga,
    title: 'Borcegos',
    description: borcegos
  },
  {
    id:5,
    image: descarga,
    title: 'Texanas',
    description: borcegos
  },
  {
    id:6,
    image: descarga,
    title: 'Zapatillas',
    description: borcegos
  },
  {
    id:7,
    image: descarga,
    title: 'Chatas',
    description: borcegos
  },
  {
    id:8,
    image: descarga,
    title: 'Slippers',
    description: borcegos
  },
  {
    id:9,
    image: descarga,
    title: 'Slippers',
    description: borcegos
  },
  {
    id:10,
    image: descarga,
    title: 'Slippers',
    description: borcegos
  }
]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({id, image, title, time, description})=>{
            return(

              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-gray-800 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
              <span className='flex items-center text-[#ccc]'>
                <BiTimeFive/>{time}
              </span>
          </span>
          <h6 className='text-[#ccc]'></h6>
          <img src={description} alt="" className='w-[235px] flex gap-10 justify-center flex-wrap items-center' />

            <div className='company flex items-center gap-2'>
              <img src={image} alt="" className='w-[15px]' />
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>Casablanca Zapatos</span>
            </div>
            
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
              Añadir al carrito...
            </button>

      
        </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs