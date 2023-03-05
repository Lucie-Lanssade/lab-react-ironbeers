import Header from '../components/Header';
import React, { useState } from 'react';
import axios from 'axios';

function Newbeer() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewerTips] = useState('');
  const [attenuation, setAttenuation] = useState(0);
  const [contributed, setContributed] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const beerToCreate = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuation,
      contributed_by: contributed,
    };
    try {
      await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        beerToCreate
      );
      console.log(beerToCreate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            name="name"
          />
        </div>

        <div>
          <label htmlFor="name">Tagline:</label>
          <input
            onChange={(event) => setTagline(event.target.value)}
            value={tagline}
            type="text"
            name="tagline"
          />
        </div>

        <div>
          <label htmlFor="name">Description:</label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            type="text"
            name="description"
          />
        </div>

        <div>
          <label htmlFor="name">First brewed:</label>
          <input
            onChange={(event) => setFirstBrewed(event.target.value)}
            value={firstBrewed}
            type="text"
            name="firstBrewed"
          />
        </div>

        <div>
          <label htmlFor="name">Brewers tips:</label>
          <input
            onChange={(event) => setBrewerTips(event.target.value)}
            value={brewersTips}
            type="text"
            name="brewersTips"
          />
        </div>

        <div>
          <label htmlFor="name">Attenuation level:</label>
          <input
            onChange={(event) => setAttenuation(event.target.value)}
            value={attenuation}
            type="number"
            name="attenuation"
            min={0}
          />
        </div>

        <div>
          <label htmlFor="name">Contributed by:</label>
          <input
            onChange={(event) => setContributed(event.target.value)}
            value={contributed}
            type="text"
            name="contributed"
          />
        </div>

        <button>Add new</button>
      </form>
    </div>
  );
}

export default Newbeer;
