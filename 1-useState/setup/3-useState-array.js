import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const handleRemove = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  if (people.length < 1) {
    return (
      <div>
        <h1>Empty List</h1>
        <button className='btn' type='button' onClick={() => setPeople(data)}>
          Bring People
        </button>
      </div>
    )
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <li className='item' key={id}>
            <h4>{name}</h4>
            <button
              type='button'
              className='btn'
              onClick={() => handleRemove(id)}
            >
              Remove
            </button>
          </li>
        )
      })}
      <button type='btn' className='btn' onClick={() => setPeople([])}>
        Clear List
      </button>
    </>
  )
}

export default UseStateArray
