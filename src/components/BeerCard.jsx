import React from 'react';
import { Link } from 'react-router-dom';

function BeerCard({ beer }) {
  return (
    <div className="beerCard">
      <div className="imgContainer">
        <img height={90} src={beer.image_url} alt={beer.name}></img>
      </div>

      <div className="beerCardText">
        <Link className="link" to={'/listbeers/' + beer._id}>
          {beer.name}
        </Link>
        <p className="grey">{beer.tagline}</p>
        <p>Created by : {beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerCard;
