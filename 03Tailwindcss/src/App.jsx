import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/card'
let myobj={
  name:'Hitesh',
  id:11,
}
let myArr=[1,2,3,4,5];
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Card channel="chai aur code" btnclick="click me" />
      <Card channel="hitesh"/>

    </>
  );
}

export default App;

//props make the component reusable
  