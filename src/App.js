import React, { useState } from 'react';
import Tweet from './Tweet';
import './App.css';

function App() {

  const sayHello = () => {
    console.log('Hello');
  }

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([{
    name: 'Jon',
    age: 25,
    posts: ['My first post', 'corona time']
  },
  {
    name: 'Peter',
    age: 28,
    posts: ['My first post', 'free time']
  }

]);

const increment = () => {
  setCount(count + 1);
  setRed(!isRed);
}

return (
  <div>
    <h1>Twitter App</h1>

    <div className="app">
      <h1 className={isRed ? "red" : ""}>Change my Color</h1>
      {/* <h1>Hello React!</h1>
      <button onClick={sayHello}>Hello</button> */}

      <button onClick={increment}>Increment</button>
      <h3>{count}</h3>
      {user.map(user => (
        <Tweet name={user.name} age={user.age} likes="100k" />
        // <Tweet name="Peter" msg="from" likes="250k"/>,
        // <Tweet name="Alan" msg="Facebook" likes="50k"/>
      ))}
    </div>
  </div>
);
}

export default App;
