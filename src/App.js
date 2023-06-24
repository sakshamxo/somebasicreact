// import { Fragment } from "react";

import { useState } from "react";


function App() {
  return (
    <>
    <h1>hello</h1>
    </>
    
  );
}


// rcc react class component
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }


// export default App;

// // rafce
// import React from 'react'

// const App () => {
  // return (
  //   <div>App</div>
//   )
// }

// export default App


// rfce

// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App


// this is wrong process it will call automatically
// function App() {
//   let name = "john doe"

//   const clickHandler = () => {
//     console.log('clicked')
//   }
//   return (
//     <>
//     <h1>{name}</h1>
//     <button onClick={clickHandler()}>Change name</button>
//     </>
    
//   );
// }



// reference in on click
// function App() {
  // let [name, setName] = useState("john doe")
//   this is just like array or object destructuring.

//   const clickHandler = () => {
//    setName("anney doe")
//     console.log('clicked')
//   }
//   return (
//     <>
//     <h1>{name}</h1>
//     <button onClick={clickHandler}>Change name</button>
//     </>
    
//   );
// }
// we can not make our own var if we wanna use it then we have to pass in predefined var or use state or hooks

// function App() {
//   let [name, setName] = useState("lorem sssdddddddd")
//   let [Toggle, setToggle] = useState(true)

//   const clickHandler = () => {

//   }
  
//   const toggleHandler = () =>{
//     if(Toggle === true){
//       console.log(Toggle)
//     }
//     setToggle(!Toggle)

//   }

//   return (
//     <>
    
//     {Toggle?<h1>{name}</h1>:''}
    
//     <button onClick={toggleHandler}>Change name</button>
//     </>
    
//   );
// }

export default App;