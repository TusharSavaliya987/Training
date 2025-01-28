// Using conditinal rendering if statement
// name and isPacked are props passed from the parent (PackingList) to the child (Item).
/*function Item({ name, isPacked }) {
    if (isPacked){
        return <li className="item">{name} <b>Packed</b></li>;
        // return null
    }   
    return <li className="item">{name} <b>NotPacked</b></li>;
    
}*/

// Using Ternary operator
// function Item({ name, isPacked }) {
//     return (
//       <li className="item">{isPacked ? (<del>{name + ' ✅'}</del>) : (name)}</li>
//     );
// }


// Using && operator
function Item({ name, isPacked }) {
    return (
      <li className="item">{name} {isPacked && '✅'}</li>
    );
}
  
export function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}



// Assigning JSX to variable
function Items({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
      itemContent = name + " ✅";
    }
    return (
      <li className="item">
        {itemContent}
      </li>
    );
  }
  
  export  function PackingLists() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Items 
            isPacked={true} 
            name="Space suit" 
          />
          <Items 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Items 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  
