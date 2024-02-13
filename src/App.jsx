import { useState } from 'react'
import './App.scss'
import {BrowserRouter} from 'react-router-dom'
import Sidenav from './Layout/Sidenav'
import MainContent from './Layout/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
    <div className="container">
    <Sidenav/>
    <MainContent/>
   </div>
   </BrowserRouter>
  )
}

export default App
