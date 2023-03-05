import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SingleBeerCard from '../components/SingleBeerCard';

function Randombeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setBeer(response);
      })
      .catch((e) => console.error(e));
  }, []);

  if (!beer) {
    return <div className="Loading">Loading...</div>;
  }

  return (
    <div>
      <Header></Header>
      <SingleBeerCard key={beer._id} beer={beer}></SingleBeerCard>
    </div>
  );
}

export default Randombeer;
