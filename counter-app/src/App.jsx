import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let min = 0;
  let max = 20;

  const increaseCount = function () {
    if (count < max) {
      setCount(count + 1);
    }
  }

  const decreaseCount = function () {
    if (count > min) {
      setCount(count - 1);
    }
  }


  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <h3>Minimum value is {min} & Maximum value is {max}</h3>
      <button onClick={decreaseCount}>Decrease value</button>
      <button onClick={increaseCount}>Increase value</button>
    </>
  )
}

export default App