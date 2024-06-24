import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./components/data.js";

const cards = function() {
  let arraydata = [];
  for (let i = 0; i < data.length; i++) {
    let card = (
      <Card
        key={data[i].id} // Ensure each card has a unique key
        img={data[i].coverImg}
        rating={data[i].stats.rating}
        reviewCount={data[i].stats.reviewCount}
        country={data[i].location}
        title={data[i].title}
        price={data[i].price}
        openSpots={data[i].openSpots}
      />
    );
    arraydata.push(card); // Use push instead of append
  } 
  return arraydata;
};

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
          {cards()}
      </section>
    </div>
  );
}
