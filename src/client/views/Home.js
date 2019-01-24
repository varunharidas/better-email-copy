import React from 'react';
import { Link } from 'react-router-dom';

function Home(/* props */) {
  return <div>Lets kick start the rockets.

<Link to={`/about`}>About</Link>

  </div>;
}

export default Home;
