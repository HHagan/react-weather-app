import React from 'react';
import { WiHumidity, WiThermometer, WiStrongWind } from 'react-icons/wi';
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from 'react-icons/fa6';
import { FiSunrise, FiSunset } from 'react-icons/fi';

function TempAndDets() {
  return (
    <div>
      {/* Weather condition */}
      <div className='flex items-center justify-center py-6 text-xl text-blue-500'>
        <p>Cloudy</p>
      </div>

      {/* Temperature details */}
      <div className='flex flex-row items-center justify-between text-white py-3'>
        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-20' />
        <p className='text-4xl font-bold'>65°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm items-center justify-center'>
            <WiThermometer size={24} className='mr-2' />
            <span>Feels like: <span className='font-medium ml-1'>65°</span></span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <WiHumidity size={24} className='mr-2' />
            <span>Humidity: <span className='font-medium ml-1'>15%</span></span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <WiStrongWind size={24} className='mr-2' />
            <span>Wind: <span className='font-medium ml-1'>10 km/h</span></span>
          </div>
        </div>
      </div>

      {/* Additional weather details */}
      <div className='flex flex-row items-center space-x-2 flex-nowrap text-white text-sm py-3'>
        <FiSunrise size={20} />
        <span className='font-light'>Rise: <span className='font-medium ml-1'>6:30 AM</span></span>
        <span className='mx-2'>|</span>
        <FiSunset size={20} />
        <span className='font-light'>Set: <span className='font-medium ml-1'>5:30 PM</span></span>
        <span className='mx-2'>|</span>
        <FaTemperatureArrowUp size={20} />
        <span className='font-light'>High: <span className='font-medium ml-1'>65°</span></span>
        <span className='mx-2'>|</span>
        <FaTemperatureArrowDown size={20} />
        <span className='font-light'>Low: <span className='font-medium ml-1'>40°</span></span>
      </div>
    </div>
  );
}

export default TempAndDets;

