
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'


function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-7xl text-center w-10/12 mx-auto mt-5 rounded-lg bg-rose-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>

  
      
    </>
  )
}

export default App
