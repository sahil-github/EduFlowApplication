import './App.css'
import AppRoute from './routes/Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <AppRoute />
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  )
}

export default App
