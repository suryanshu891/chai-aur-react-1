import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  let myObj ={
    username: "suryanshu",
    age: 25
  }
  let newArr=[1,2,3]
  

  return (
  <>
  <h1 className='font-bold text-black bg-green-600 p-3 rounded-xl'>Talwind Test</h1>
  <Card username="laptop" btnText="SignIn"/>
  <Card username="suryanshumishra" />
 
 
  </>
  )
}

export default App;
