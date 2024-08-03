import React, { useState } from 'react';
import jokesData from './jokes';
import Jokes from './components/Jokes';

export default function App() {
  const [jokes, setJokes] = useState(jokesData);

  const jokesElements = jokes.map((joke) => {
    return (
      <div>
        <Jokes 
          key = {joke.id}
          {...joke}
        />
        <hr />
      </div>
    );
  });

  console.log(typeof jokesElements);

  return (
    <div className='app'>
      {jokesElements}
    </div>
  );
}