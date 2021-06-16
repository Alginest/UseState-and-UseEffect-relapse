import React, { useState } from 'react'

const UseStateCounter = () => {
  const [count, setCount] = useState(0)
  const reset = () => {
    setCount(0)
  }
  const increase = () => {
    setTimeout(() => {
      // setCount(count + 1)
      setCount((prev) => {
        return prev + 1
      })
    }, 2000)
  }
  const decrease = () => {
    setTimeout(() => {
      setCount(count - 1)
    }, 2000)
  }
  return (
    <>
      {/* <section>
        <h2>Regular Counter</h2>
        <h2>{count}</h2>
        <div>
          <button
            type='button'
            className='btn'
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button onClick={() => setCount(count - 1)} className='btn'>
            Decrease
          </button>
          <button onClick={() => setCount(0)} className='btn'>
            Reset
          </button>
        </div>
      </section> */}
      <section>
        <h2>Complex Counter</h2>
        <h2>{count}</h2>
        <div>
          <button type='button' className='btn' onClick={increase}>
            Increase
          </button>
          <button onClick={decrease} className='btn'>
            Decrease
          </button>
          <button onClick={reset} className='btn'>
            Reset
          </button>
        </div>
      </section>
    </>
  )
}

export default UseStateCounter
