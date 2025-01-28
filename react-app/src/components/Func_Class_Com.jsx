// Function Components
import React, {useState, Component} from 'react';

// Function component using function keyword
export function FunctionComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a function component using function keyword.</p>
    </div>
  );
}

// Function component using arrow function syntax
export const FunctionCom = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a function component using arrow function syntax.</p>
    </div>
  );
};



// Function component using hooks for managing state

export const HookFuncComponent = () => {
  // Using useState Hook to manage state
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};




// Class Component

// Define a class component that extends React.Component or React.PureComponent
export class ClassComponent extends Component {
  // Define constructor if necessary
  constructor(props) {
    super(props);
    // Initialize state if needed
    this.state = {
      count: 0
    };
  }

  // Define instance methods if necessary
  handleClick = () => {
    // Update state or perform other logic
    this.setState({ count: this.state.count + 1 });
  }

  // Define render() method to return JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}


