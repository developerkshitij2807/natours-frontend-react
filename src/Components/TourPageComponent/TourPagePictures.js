import React from 'react';

const TourPagePictures = ({pictures}) => {

  return (
    <section className='tour-page--pictures'>
      {pictures.map((picID) => (
        <img
          key={picID}
          src={`/images/tour-pictures/${picID}`}
          className='tour-page--pictures__picture'
          alt='Tour Highlights'
        />
      ))}
    </section>
  );
};

export default TourPagePictures;
