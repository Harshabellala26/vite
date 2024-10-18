import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/profile' element={<Profile />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/home' element={<Home />}></Route>
     </Routes>


    </>
  )
}

export default App
