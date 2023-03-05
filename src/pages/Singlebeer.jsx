import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import SingleBeerCard from '../components/SingleBeerCard';

function Singlebeer() {
  const [beer, setBeer] = useState(null);
  const params = useParams();
  console.log('params=', params.id);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/' + params.id)
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setBeer(response);
      })
      .catch((e) => console.error(e));
  }, []);

  console.log('response: ', beer);

  if (!beer) {
    return <div className="Loading">Loading!</div>;
  }

  return (
    <div>
      <Header></Header>
      <SingleBeerCard key={beer._id} beer={beer}></SingleBeerCard>
    </div>
  );
}

export default Singlebeer;
