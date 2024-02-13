import { useState } from 'react'
import './App.scss'
import Sidenav from './Layout/Sidenav'
import MainContent from './Layout/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="container">
    <Sidenav/>
    <MainContent/>
   </div>
  )
}

export default App
