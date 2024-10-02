import { useState } from 'react'
import './App.css'
import RegForm from './RegForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegForm/>
    </>
  )
}

export default App
