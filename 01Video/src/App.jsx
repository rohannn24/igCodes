import React from 'react'
import { Route, Routes } from 'react-router-dom'
import One from './Components/One'
import Two from './Components/Two'

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/one'
          element={<One />}
        />
        <Route
          path='/two'
          element={<Two />}
        />
      </Routes>
    </>
  )
}

export default App