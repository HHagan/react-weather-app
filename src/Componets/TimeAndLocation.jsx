import React from 'react';

function TimeAndLocation() {
  return (
    <div>
     
      <div className='flex items-center justify-center my-6'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-1xl text-white font-light'>Friday, 08 December 2023 | Local Time: 10:00 AM</p>
        </div>
      </div>

      
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>Berlin, DE</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;