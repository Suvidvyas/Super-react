import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
      
  const increment = () => {
      setCount(prevCount => prevCount + 1);
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }
  
    console.log(count);
  
  return (
    <>
      <h1>Counter App</h1>
      <button onClick= {increment}>
        + INCREMENT
      </button>
      <p>{count}</p>
      <button onClick={()=>setCount(count-1)}>
        - DECREMENT
      </button>
    </>
  )
}

export default App
