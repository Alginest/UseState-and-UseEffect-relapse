import React, { useState } from 'react'

const UseStateBasics = () => {
  let [title, setTitle] = useState('africa')

  const handleTitle = () => {
    if (title === 'hello') {
      setTitle('africa')
    } else {
      setTitle('hello')
    }
  }
  return (
    <>
      <div>
        <h2>{title}</h2>
        <button type='button' onClick={handleTitle}>
          change title
        </button>
      </div>
    </>
  )
}

export default UseStateBasics
