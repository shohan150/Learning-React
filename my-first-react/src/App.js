import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

const number = 66;
const singer = {
  name: 'Rakib',
  job: 'singer',
  performance: 12
}
const singerStyle = {
  color: 'red',
  backgroundColor: 'black',
  padding: '13px'
}
const persons = ['Himel', "Rafi", 'Udoy', 'Shamim'];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h2>Mr. {singer.name} is a {singer.job}</h2>
        </div>
        <h2 style={singerStyle}>Rating : {number + 11}</h2>
        <h2 style={{ color: 'red', backgroundColor: 'white', padding: '18px', borderRadius: '10px' }}>Concerts Performed : {singer.performance}</h2>
        <h1>Invited Guests</h1>

        <div className="guests">

          {
            // persons.map(per => <li>{per}</li>)
          }
          {
            persons.map(per => <Person name={per}></Person>)
          }

        </div>

        <div className="counter">
          <Counter></Counter>
        </div>

        <div className="extUsers">
          <ExternalUsers></ExternalUsers>
        </div>

        <div className="coutries">
          <LoadCountries></LoadCountries>
        </div>


      </header>
    </div>
  );
}

function Person(props) {
  return (
    <div className="persons">
      <h1>Mr. {props.name}</h1>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(20);
  const decrementCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Sponsor counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>List of External Users</h2>
      {
        users.map(user => <User name={user.name} company={user.company.name}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid white', margin: '10px' }}>
      <h3>Name : {props.name} </h3>
      <h2>Company : {props.company}</h2>
    </div>
  )
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);

  return (
    <div>
      <h1>Visiting Every country in the world!!</h1>
      <h3>{countries.length}</h3>
    </div>
  )
}


export default App;
