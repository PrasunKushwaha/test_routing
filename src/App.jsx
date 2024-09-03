import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import Hello from './Hello'
import Bye from './Bye'


function App() {
  

  return (
    <>
      <div>This is Default</div>
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/bye" element={<Bye />} />
      </Routes>
    </>
  )
}

export default App
