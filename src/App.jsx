import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  {/* It is the Counter using useState() */ }
  // const [counter, setCounter]  = useState(15)

  // const addValue = () => {
  //   setCounter(prevCounter => prevCounter + 1)

  // }

  // const removeValue = () => {
  //   setCounter(counter - 1)
  // }
  let myObj = {
    name: 'Haris',
    age: 18
  }

  return (
    <>
      {/* It is the Counter using useState() */}
      {/* <h1>haris and react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p> */}

      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Haris" btnText="Let's Go" />
      <Card username="Rizwan" />
    </>
  )
}



export default App
