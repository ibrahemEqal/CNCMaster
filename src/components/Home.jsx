import { Link } from 'react-router-dom';
import React from "react";
import Card1 from "./Card1";
import Header from "./Header";
import Card2 from "./Card2";
import Card3 from "./Card3";
import CallUs from './Callus';

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <div className="card-container">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </>
  );
};

export default Home;