export function MyButton() {
  return <button>I'm a button</button>;
}

export function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}


// Challenge: 1
export function Bio() {
  return (
    <>
    <div className="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p className="summary">
      You can find my thoughts here.
      <br/>
      <b>And <i>pictures</i></b> of scientists!
    </p>
    </>
  );
}




// Javascript in JSX

// Using {} braces to embed javascript expressions
export function ToDoList(){
  const todos = ['buy groceries', 'cook dinner', 'eat dinner'];
  return(
    <h>{todos}</h>
  )
}


// double curly braces for embedding JS objects and inline CSS styles
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export function TodoList() {
  return ( 
    <> 
    <h1>To Do List for {formatDate(today)}</h1>
    <ul style={{
      backgroundColor: 'black',
      color: 'white'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
    </>
  );
}

