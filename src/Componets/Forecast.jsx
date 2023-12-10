import React from 'react'

function Forecast({title}) {
  return <div>
    <div className='flex item-center justify-start mt-6'> 
      <p className='text-white font-medium uppercase'>{title}</p>
    </div>
    <hr className='mt-3 mb-3'/>

    <div className='flex flex-row items-center justify-between text-white'>

      <div className='flex flex-col items-center justify-center'>
        <p className='font-light text-sm'>
          12:00 PM   
        </p>
        <img src='https://img.icons8.com/color/48/000000/cloud.png' className='w-12 my-1' alt='cloud'/>
        <p className='font-light text-sm'>
          24°C  
        </p>
      </div> 

      <div className='flex flex-col items-center justify-center'>
        <p className='font-light text-sm'>
          01:00 PM   
        </p>
        <img src='https://img.icons8.com/color/48/000000/cloud.png' className='w-12 my-1' alt='cloud'/>
        <p className='font-light text-sm'>
          24°C  
        </p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <p className='font-light text-sm'>
          02:00 PM   
        </p>
        <img src='https://img.icons8.com/color/48/000000/cloud.png' className='w-12 my-1' alt='cloud'/>
        <p className='font-light text-sm'>
          24°C  
        </p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <p className='font-light text-sm'>
          03:00 PM   
        </p>
        <img src='https://img.icons8.com/color/48/000000/cloud.png' className='w-12 my-1' alt='cloud'/>
        <p className='font-light text-sm'>
          24°C  
        </p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <p className='font-light text-sm'>
          04:00 PM   
        </p>
        <img src='https://img.icons8.com/color/48/000000/cloud.png' className='w-12 my-1' alt='cloud'/>
        <p className='font-light text-sm'>
          24°C  
        </p>
      </div>

    </div>
  </div>
}

export default Forecast