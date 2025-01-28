import { useRef, useState } from "react";

// Refs example
export function CounterRefs() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }
  return <button onClick={handleClick}>Click me!</button>;
}


// Using state  - rerender the UI
export function CounterState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1); // Updates state and triggers re-render
  }
  return <button onClick={handleClick}>You clicked {count} times!</button>;
}


// Challenge 1
export function Chat() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const timeoutRef = useRef(null);

  function handleSend() {
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert("Sent!");
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutRef.current);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? "Sending..." : "Send"}
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
}


// Challenge 2
export function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
}


// challenge 3
function DebouncedButton({ onClick, children }) {
  const timeoutRef = useRef(null);

  return (
    <button
      onClick={() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}

export function Dashboard() {
  return (
    <>
      <DebouncedButton onClick={() => alert("Spaceship launched!")}>
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Soup boiled!")}>
        Boil the soup
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Lullaby sung!")}>
        Sing a lullaby
      </DebouncedButton>
    </>
  );
}



// challenge 4

export  function Chats() {
  const [text, setText] = useState("");
  const textRef = useRef(text);

  function handleChange(e){
    setText(e.target.value);
    textRef.current = e.target.value;
  }

// text (state) may become outdated because state doesn’t update immediately (React batches state updates).
//However, textRef.current always holds the latest value of the input, ensuring the alert shows the correct value.

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input value={text} onChange={(handleChange)}/>
      <button onClick={handleSend}>Send</button>
    </>
  );
}
