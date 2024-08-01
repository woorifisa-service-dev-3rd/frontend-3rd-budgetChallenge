import { useState } from 'react'
import './App.css'
import History from './components/history/History'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <History />
    </>
  )
}

export default App
