import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header'

function App() {

  return (
    <>
    <Header />
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}

export default App
