import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  // let counter=15
  const addValue=()=>{
    console.log("value added",count); 
    count=count+1;
    if(count<=20){
      setCount(count);
    }
  }
  const removeValue=()=>{
    if(count>0){
      setCount(count-1);
    }
  }
  return (
    <>
       <h1>Chai aur react</h1>
       <h2>Counter Value:{count}</h2>

       <button onClick={addValue}>Add value</button>
       <br/>
       <button onClick={removeValue}>Remove Value {count}</button>
       <p>footer:{count}</p>
    </>
  )
}

export default App
