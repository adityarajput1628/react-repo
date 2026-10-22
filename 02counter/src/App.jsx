import {useState} from 'react'
import './App.css'

function App() {
// let countervalue = 13
const [counter, setCounter] = useState(13)


const addValue = () => {
  if(counter >= 20){
    alert('Counter value should not exceed 20')
    return
  }
  setCounter(prevcounter => prevcounter + 1)
  setCounter(prevcounter => prevcounter + 1)
  setCounter(prevcounter => prevcounter + 1)
  setCounter(prevcounter => prevcounter + 1)

}

  return (
    <>
       <h1>Counter App</h1>
       <h2>countervalue: {counter}</h2>
       <button onClick={addValue}>Increment {counter}</button>
       <br />
       <button onClick={() => {
         if(counter <=0){
          alert('Counter value should not be below 0')
          return
         }
          setCounter(counter - 1)
       }}>Decrement {counter}</button>
    </>
  )
}

export default App
