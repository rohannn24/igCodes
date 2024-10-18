import React, { useState } from 'react'
import A from './A'
import B from './B'
import './One.css'
const One = () => {
  const [y, setY] = useState(0);
  const setValue = (num) => {
    setY(num);
  }
  return (
    <>
      <div className="full">
        <A y = {y} setValue={setValue}/>
        <B y = {y}/>
      </div>
    </>
  )
}

export default One