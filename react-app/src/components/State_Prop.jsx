// State
import React, { useState } from 'react';

export function CounterProp(){
    const [count, setCount] = useState(1);

    return(
        <>
        <h>Count: {count}</h><br/>
        <button onClick={()=>setCount(count+ 1)}>Increment</button>
        </>
    )
}



// Props

// Child component
export function PropEx(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Your age is: {props.age}</p>
    </div>
  );
}


// Default Props
export function DefaultProp({name = 'Guest',age = 18}) {
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Your age is: {age}</p>
      </div>
    );
}


// Greeting1.defaultProps = {
//     name: 'Guest',
//     age:10,
// };
  



// Dispaly state and props

// Child Component
// function Greeting({ name }) {
//     return <h1>Hello, {name}!</h1>;
//   }
  
//   // Parent Component
//   function App() {
//     const [name, setName] = useState('John');
  
//     return (
//       <div>
//         <Greeting name={name} />
//         <button onClick={() => setName('Jane')}>Change Name</button>
//       </div>
//     );
//   }
  
  

// Here, the parent App passes the name as a prop to the Greeting component.
// The App component manages the name in its state. When the button is clicked, it updates the state, which triggers a re-render, and the updated name is passed to Greeting via props.





