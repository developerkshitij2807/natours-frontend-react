import React from 'react';

const BookTour = ({tourImages, tourDays}) => {
  return (
    <section className='conclusion'>
      <div className='conclusion__content'>
        <div className='conclusion__content--img conclusion__content--img-logo'>
          <img src='/images/logo-green-round.png' alt='Natours logo' />
        </div>
        <img
          src={`/images/tour-pictures/${tourImages[1]}`}
          alt=''
          className='conclusion__content--img conclusion__content--img-1'
        />
        <img
          src={`/images/tour-pictures/${tourImages[2]}`}
          alt=''
          className='conclusion__content--img conclusion__content--img-2'
        />

        <div className='conclusion__content--details u-margin-bottom-extra-small'>
          <h2>What are you waiting for?</h2>

          <button className='btn btn--green span-all-rows'>
            Book tour now!
          </button>
          <p className='cta__text'>
            {tourDays} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookTour;
