import React from 'react';
import TourCard from './TourCardComponent';
import Tours from './ToursData';

const TourCards = () => {
  return Tours.map((Tour) => {
    return <TourCard key={Tour._id} tour={Tour} />;
  });
};

export default TourCards;
