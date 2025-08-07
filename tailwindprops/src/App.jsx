import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myname={
    username: "Satya",
    age:  21

  }
  let newArray=[1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tail Wind Test</h1>
     <Card username="chai aur code" btnText="click me!"/>
     <Card  username={"Satya"}  />
    </>
  )
}

export default App
