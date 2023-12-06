import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{typeof people}</h3>
        <List people={people}></List>

        <button>Clear all</button>
      </section>
    </main>
  )
}

export default App;
