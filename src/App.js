import './App.css';
import TopButtons from './Componets/TopButtons';
import Inputs from './Componets/Inputs';
import TimeAndLocation from './Componets/TimeAndLocation';
import TempAndDets from './Componets/TempAndDets';
import Forecast from './Componets/Forecast';


function App() {
  
  
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons />
      <Inputs />

     
      
        <>
          <TimeAndLocation />
          <TempAndDets />
          <Forecast title="hourly forecast"  />
          <Forecast title="daily forecast" />
        </>
      
    </div>
  );
}

export default App;
