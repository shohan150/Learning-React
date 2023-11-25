import logo from './logo.svg';
import './App.css';

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
        <div className="music">

          {
            // persons.map(per => <li>{per}</li>)
          }
          {
            persons.map(per => <Person name={per}></Person>)
          }

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
export default App;
