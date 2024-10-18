import React, { useState } from 'react'
import './A.css'

const A = ({y, setValue}) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <>
      <div className="a">
        <h4>Component 1</h4>
        <input
          type="number"
          value={y}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default A