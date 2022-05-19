import { useEffect, useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)
  const [scale, setScale] = useState(1)
  const [rate, setRate] = useState(0)
  const [trentons, setTrentons] = useState(0)
  const [color, setColor] = useState('#ca8a04')
  const _count = useRef(count)

  const _trentons = useRef(trentons)

  const click = () => {
    setCount(count + 1)

    setScale(scale + 2)
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    setTimeout(() => {
      setScale(1)
    }, 50)
  }

  const wow = useCallback(() => {
    console.log('hello')

    console.log(_count.current, _trentons.current)
    setRate(500 + Math.random() * 1000)
  }, [])

  useEffect(() => {
    setInterval(wow, 500)
  }, [])



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
