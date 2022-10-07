import React from 'react';
import './App.css';
import Navbar from "./Navbar.js"
import Hero from "./hero.js"
import Card from './card';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
      />
  )
  })


  return (
    <>
     <Navbar
      image= "airbnb1.png"/>
     <Hero 
      heros= "Group_77.png"/>
     {cards}
    </>
     
  );
}

export default App;
