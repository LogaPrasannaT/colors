
import './App.css'
import { Navbar } from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'

import LoginForm from './Pages/Login';

import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Images from './Pages/Images';


function App() {
  
  return (
    <div className='Apps'> <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/images' element={<Images/>}/>
   
    
      <Route path='/login' element={<LoginForm/>} />
      <Route path='/signup' element={<Signup/>} />
      
      
    </Routes>
    
    </div>
  
  )
}

export default App;