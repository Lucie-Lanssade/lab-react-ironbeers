import React from 'react';

function SingleBeerCard({ beer }) {
  return (
    <div className="detailsContainer">
      <div className="singleBeerContainer">
        <img height={350} src={beer.image_url} alt={beer.name}></img>
      </div>

      <div className="flexRow">
        <div className="alignLeft">
          <h3>{beer.name}</h3>
          <p className="singleTagline">{beer.tagline}</p>
        </div>

        <div className="alignRight">
          <p className="singleTagline">{beer.attenuation_level}</p>
          <p>{beer.first_brewed}</p>
        </div>
      </div>

      <div className="alignLeft">
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default SingleBeerCard;
