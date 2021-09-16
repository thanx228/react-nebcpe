import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you click ${count} times`;
  }, [count]);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>You Pick {count} time </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <button onClick={() => setCount(0)}>Reset me</button>
    </div>
  );
}
