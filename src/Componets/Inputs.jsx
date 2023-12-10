import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import {WiFahrenheit, WiCelsius} from 'react-icons/wi'

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className="flex items-center max-w-md w-full bg-gray-700 rounded-full p-2 hover:bg-gray-600 focus:outline-none">
        <button className='flex items-center justify-center w-12 h-12 text-white rounded-full focus:outline-none'>
          <CiLocationOn size={24} />
        </button>
        <input type="text" placeholder="Search for city" className='flex-grow ml-2 bg-transparent focus:outline-none text-white' />
        <button className='w-20 h-12 ml-2 text-white bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none'>Search</button>
      </div>
      <div className='flex flex-row w-1/4 items-center justify-end'>
        <button name="metric" className='text-xl text-white font-light'><WiCelsius size={30}/></button>
        <p className='text-xl text-white mx-1'>|</p>
        <button name="imperial" className='text-xl text-white font-light'><WiFahrenheit size={30}/></button>
      </div>
    </div>
  );
}

export default Inputs;




