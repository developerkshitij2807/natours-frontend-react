import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewCards = () => {
  return (
    <div className='reviews-cards'>
      <div className='reviews-cards__content u-margin-bottom-medium u-margin-top-big'>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default ReviewCards;
