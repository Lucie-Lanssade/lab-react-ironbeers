import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BeerCard from '../components/BeerCard';

function Listbeers() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setBeers(response);
      })
      .catch((e) => console.error(e));
  }, []);

  if (!beers) {
    return <div className="Loading">Loading...</div>;
  }

  return (
    <div>
      <Header></Header>

      {beers.map((beer) => {
        return <BeerCard key={beer._id} beer={beer} />;
      })}
    </div>
  );
}

export default Listbeers;
