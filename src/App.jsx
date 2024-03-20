
import './App.css'
import Linechart from './components/LinecChart.jsx/Linechart'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phone/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'


function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-7xl text-center w-10/12 mx-auto mt-5 p-5 rounded-lg bg-rose-600'>Kedney Phone</h1>
      
      <PriceOptions></PriceOptions>
      <Linechart></Linechart>
      <Phones></Phones>
  
      
    </>
  )
}

export default App
