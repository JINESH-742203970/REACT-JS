import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
  function MyApp(){
    return(
      <h2>Chai aur Hitesh</h2>
    )
  }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <App /> */
//       MyApp()
//     }
//   </React.StrictMode>,
// )
const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement=React.createElement(
  'a',//Tag
  {href:'https://google.com',target:'blank'},//Attribute
  'click me to visit google'//Content
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  // anotherElement
  <App/>
)
