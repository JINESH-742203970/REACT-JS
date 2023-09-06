import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("olive")

  return (
    <>
      <h2>Khatushyam</h2>
      <div className=" w-full h-screen duration-200" style={{backgroundColor:color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2 " style={{backgroundColor:"green"}}>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
              <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
              <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
              <button onClick={()=>setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>olive</button>
              <button onClick={()=>setColor("Grey")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}>Grey</button>
              <button onClick={()=>setColor("Yellow")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
              <button onClick={()=>setColor("Pink")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
              <button onClick={()=>setColor("Lavender")}className="outline-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor:"lavender"}}>lavender</button>
              <button onClick={()=>setColor("White")}className="outline-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor:"white"}}>White</button>
              <button onClick={()=>setColor("Black")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
              <button onClick={()=>setColor("Brown")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}>Brown</button>
          </div>
      </div>
    </>
  )
}

export default App

// onClick={setColor("red")};//In this way we are providing return value to onClick that don't need to onClick.it's just want function