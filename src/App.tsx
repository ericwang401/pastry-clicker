import { useEffect, useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Register from './components/Register';

function useInterval(callback: Function, delay: number) {
  const intervalRef = useRef<number>();
  const callbackRef = useRef(callback);

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setInterval ticks again, it
  // will still call your old callback.
  //
  // If you add `callback` to useEffect's deps, it will work fine but the
  // interval will be reset.

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the interval:

  useEffect(() => {
    intervalRef.current = window.setInterval(() => callbackRef.current(), delay);

    // Clear interval if the components is unmounted or the delay changes:
    return () => window.clearInterval(intervalRef.current);
  }, [delay]);

  // Returns a ref to the interval ID in case you want to clear it manually:
  return intervalRef;
}

function App() {
  const [count, setCount] = useState(0)
  const [cachedCount, setCachedCount] = useState(0)
  const [scale, setScale] = useState(1)
  const [rate, setRate] = useState(0)
  const [color, setColor] = useState('#ca8a04')

  const [trentons, setTrentons] = useState(0)

  const rateCalculator = useInterval(() => {
    setRate((count - cachedCount))
    setCachedCount(count)
  }, 250)

  const buyTrenton = () => {
    setTrentons(trentons => trentons + 1)
    setCount(currentCount => currentCount - Math.floor((10000 * Math.pow(1.1, trentons))))
  }

  const trentonBoosterTM = useInterval(() => {
    setCount(count + (trentons * 50))
  }, 100)

  useInterval(() => {
    if (trentons <= 0) return;
    let chance = Math.floor(Math.random() * 60)

    if (chance > 54) {
      setTrentons(trentons => trentons - 1)
    }
  }, 10000)

  const click = () => {
    setCount(count + 1)

    setScale(scale + 2)
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    setTimeout(() => {
      setScale(1)
    }, 50)
  }


  return (
    <div className='flex h-full flex-col'>
      <div className='grow-0'>
          <h1 className='text-center text-4xl font-bold'>Pastry Poker</h1>
        <div className="w-full p-5 bg-gray-400">
          <h3 className='text-center text-2xl font-medium'>
            Your pastries: {count}
            <br />
            Your rate: {rate} pastries/sec
          </h3>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='rounded-md bg-gray-200 shadow-md my-3 p-4'>
            <h3 className='text-lg font-bold'>Buy a Trenton:tm:</h3>
            <p>You have {trentons} Trentons:tm:</p>
            <p>Trenton can also randomly die. You will not be compensated for the amount you spent.</p>
            <p><strong>Costs:</strong> {(10000 * Math.floor(Math.pow(1.1, trentons)))} pastries</p>
            <button className='bg-green-500' onClick={buyTrenton}>Buy Trenton</button>
          </div>
        </div>
      </div>

      <div className='h-full grow'>
        <div className="grid h-full place-items-center">
          <motion.button animate={{ scale }} onClick={click} style={{ backgroundColor: color }} className='w-56 h-56 rounded-full'>Poke for pastry</motion.button>
        </div>
      </div>
    </div>

  )
}

export default App
