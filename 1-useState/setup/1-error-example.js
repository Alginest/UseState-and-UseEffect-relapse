import React, { useState } from 'react'

const ErrorExample = () => {
  const { title, setTitle } = useState('hello')
  const handleChange = () => {
    setTitle('hello world')
  }
  return (
    <section>
      <h2>{title}</h2>
      <button onClick={handleChange}> Change Title</button>
    </section>
  )
}

export default ErrorExample
