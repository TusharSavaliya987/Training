import React, { useState, useCallback } from 'react';

function ChildComponent({ onClick }) {
  console.log('Child Rendered');
  return <button onClick={onClick}>Click Me</button>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked!");
  }, []); // Empty dependency array → function never changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
