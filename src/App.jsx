import { ToastContainer } from 'react-toastify'
import './App.css'
import AppRouter from './router/Approuter'

function App() {


  return (
    <>
      <AppRouter />
      <ToastContainer position='top-center' />
    </>
  )
}

export default App
