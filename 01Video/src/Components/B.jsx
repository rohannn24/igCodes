import React from 'react'
import './B.css'

const B = ({y}) => {
  return (
    <>
      <div className="b">
        <h4>Component 2</h4>
        <h1>{y}</h1>
      </div>
    </>
  )
}

export default B