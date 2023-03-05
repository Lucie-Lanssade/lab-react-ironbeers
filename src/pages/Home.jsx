import React from 'react';
import { Link } from 'react-router-dom';
import allbeersImg from '../assets/beers.png';
import randombeerImg from '../assets/random-beer.png';
import newbeerImg from '../assets/new-beer.png';

function Home() {
  return (
    <div>
      <div className="homePage">
        <img src={allbeersImg} alt="all beers"></img>
        <div className="homeText">
          <Link
            className="link"
            to="/listbeers"
            style={{ textDecoration: 'none' }}
          >
            All beers
          </Link>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
      </div>

      <div className="homePage">
        <img src={randombeerImg} alt="random beer"></img>
        <div className="homeText">
          <Link to="/randombeer" className="link">
            Random beer
          </Link>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
      </div>

      <div className="homePage">
        <img src={newbeerImg} alt="new beer"></img>
        <div className="homeText">
          <Link className="link" to="/newbeer">
            New beer
          </Link>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
