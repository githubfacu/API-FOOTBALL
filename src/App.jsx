import { ToastContainer } from 'react-toastify'
import Header from './Componentes/Header'
import MenuLateral from './Componentes/MenuLateral'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Handball from './Pages/Handball'
import Hockey from './Pages/Hockey'
import NBA from './Pages/NBA'
import NFL from './Pages/NFL'
import Rugby from './Pages/Rugby'
import Volleyball from './Pages/Volleyball'
import Baseball from './Pages/Baseball'
import Basketball from './Pages/Basketball'
import Football from './Pages/Football'
import './App.css'


function App() {

  return (
    <>
      <ToastContainer /> 
      <Header />
      <MenuLateral />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Baseball' element={<Baseball />}/>
        <Route path='/Basketball' element={<Basketball /> } />
        <Route path='/Football' element={<Football />} />
        <Route path='/Handball' element={<Handball />}/>
        <Route path='/Hockey' element={<Hockey /> } />
        <Route path='/NBA' element={<NBA />} />
        <Route path='/NFL' element={<NFL />} />
        <Route path='/Rugby' element={<Rugby />} />
        <Route path='/Volleyball' element={<Volleyball />} />
      </Routes>

    </>
  )
}

export default App
