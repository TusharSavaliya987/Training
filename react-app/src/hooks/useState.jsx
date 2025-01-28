import { useState } from "react";
// import produce from 'immer';

// useState example
export function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0
  const [age, setAge] = useState(10);

  // Updating state based on the previous state
  function handleAge() {
    setAge((a) => a + 10);
  }

  const handlechange = () => setCount(count + 1); // Update state to increment by 1

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handlechange}>Increment</button>
      <p>Age: {age}</p>
      <button onClick={handleAge}>Increase Age</button>
    </div>
  );
}



/*Updating object in state */

export function UpdatingObj() {
  const [user, setUser] = useState({
    name: "Jiya",
    age: 25,
    address: {
      city: "Mumbai",
      state: "Maharashtra",
    },
  });

  function updateName() {
    setUser((prevUser) => ({
      ...prevUser, // Copy all existing properties
      name: "React Pro", // Update only the 'name' property
    }));
  }

  // Updating nested object
  function updateCity() {
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address, // Copy the existing address object
        city: "Delhi", // Update the 'city' property
      },
    }));
  }
  return (
    <div>
      <h1>User Details:</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Location: {user.address.city}</p>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateCity}>Update City</button>
    </div>
  );
}


// Updating object using immer library

// export  function UseImmer() {
//   const [user, setUser] = useState({
//     name: 'Vanshika',
//     address: {
//       city: 'Mumbai',
//       state: 'Maharashtra',
//     },
//   });

//   function updateCity() {
//     setUser(
//       produce(user, (draft) => {
//         draft.address.city = 'Delhi'; // Directly modify the draft
//       })
//     );
//   }

//   return (
//     <div>
//       <h1>User Address:</h1>
//       <p>City: {user.address.city}</p>
//       <p>State: {user.address.state}</p>
//       <button onClick={updateCity}>Update City</button>
//     </div>
//   );
// }



/*Updating array in state */

export function UpdateArr() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

  function addFruit() {
    setFruits([...fruits, "Mango", "Chickoo"]); // Create a new array with the new item
  }

  function removeFruit(fruitToRemove) {
    setFruits(fruits.filter((fruit) => fruit !== fruitToRemove)); // Remove the specified item
  }

  function updateFruit(oldFruit, newFruit) {
    setFruits(fruits.map((fruit) => (fruit === oldFruit ? newFruit : fruit)));
  }

  function replaceFruit(targetFruit, newFruit) {
    setFruits(
      fruits.map(
        (fruit) => (fruit === targetFruit ? newFruit : fruit) // Replace the matching fruit
      )
    );
  }

  function insertFruit(index, newFruit) {
    setFruits([
      ...fruits.slice(0, index), // Items before the insertion point
      newFruit, // New item
      ...fruits.slice(index), // Items after the insertion point
    ]);
  }

  function sortFruits() {
    setFruits([...fruits].sort()); // Create a new sorted array
  }

  function reverseFruits() {
    setFruits([...fruits].reverse()); // Create a new reversed array
  }

  return (
    <div>
      <h1>Fruits:</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}
            <button onClick={() => removeFruit(fruit)}>Remove</button>
            <button onClick={() => updateFruit(fruit, "Updated " + fruit)}>
              Update
            </button>
            <button onClick={() => replaceFruit(fruit, "Mango")}>
              Replace
            </button>
          </li>
        ))}
      </ul>
      <button onClick={addFruit}>Add fruit</button>
      <button onClick={() => insertFruit(1, "Papaya")}>
        Insert papaya at position 1
      </button>
      <button onClick={sortFruits}>Sort fruit</button>
      <button onClick={reverseFruits}>Reverse fruit</button>
    </div>
  );
}



// Updating Objects Inside Arrays

export function ArrayObject() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ]);

  function updateUser(id, newName) {
    setUsers(
      users.map(
        (user) => (user.id === id ? { ...user, name: newName } : user) // Update the matching object
      )
    );
  }

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age})
            <button onClick={() => updateUser(user.id, "Updated " + user.name)}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


// Resetting state with a key

export function ResetKey() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  const [name, setName] = useState("Taylor");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </>
  );
}
