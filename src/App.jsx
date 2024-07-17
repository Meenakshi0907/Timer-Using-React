import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RxLapTimer } from "react-icons/rx";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 59) {
            setMinutes(prevMinutes => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    } 
    return () => clearInterval(timer);
  }, [isActive]);

  const start = () => setIsActive(true);
  const stop = () => setIsActive(false);
  const reset = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className='flex items-center py-24 flex-col gap-y-7 font-merriweather bg-[url(/img/bg1.png)] bg-cover min-h-screen'>
      <div>
        <h1 className='text-6xl'>Stopwatch</h1>
      </div>
      <div className='border-solid border-2 border-black shadow-xl box-content h-72 w-80 p-4 rounded-lg bg-white'>
        <div className='flex items-center justify-center gap-2'>
          <RxLapTimer />
          <h1 className='text-2xl'>Timer</h1>
        </div>
        <div className='flex justify-center pt-24'>
          <h1 className='text-2xl'>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
        </div>
        <div className='flex gap-10 justify-center pt-20'>
          <button onClick={start} className='text-xl border-2 border-y-2 p-2 rounded-lg bg-lime-500'>Start</button>
          <button onClick={stop} className='text-xl border-2 border-y-2 p-2 rounded-lg bg-red-600'>Stop</button>
          <button onClick={reset} className='text-xl border-2 border-y-2 p-2 rounded-lg bg-yellow-300'>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
