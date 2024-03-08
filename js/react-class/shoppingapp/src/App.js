import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import 'react-toastify/dist/ReactToastify.css'
import Home from './components/Home';
import Auth from './components/Auth';
function App() {
  return <>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Auth><Home/></Auth>}/>
    </Routes>
  </>
}

export default App;