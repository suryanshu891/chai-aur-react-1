import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter]=useState(5)

const Addvalue= () => {
  // if(counter<=20)

 setCounter(prevCounter=>prevCounter+1)
 setCounter(prevCounter=>prevCounter+1)
 setCounter(prevCounter=>prevCounter+1)
 setCounter(prevCounter=>prevCounter+1)

}
const removeValue=()=> {
  if(counter>=0)
  setCounter(counter--)
}
const multiplyValue = () => {
  if(counter<=700)
setCounter(counter*counter)
}
  return (
   <>
   <h1>chai aur react</h1>
   <h2>counter Value: {counter}</h2>
   <button onClick={Addvalue}>Add Value</button>
   <br/>
   <button onClick={removeValue}
   >Remove Value{counter}</button>
   <br/>
   <button onClick={multiplyValue}>Multiply Value{counter}</button>
  

   </>
  )
}

export default App;
