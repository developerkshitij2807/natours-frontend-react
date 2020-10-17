import React from 'react';

const TourCard = ({tour}) => {
  const StartDate = new Date(tour.startDate);
  const DisplayDate =
    StartDate.toLocaleString('default', {month: 'long'}) +
    ' ' +
    StartDate.getFullYear();

  return (
    <div className='tour-card'>
      <div className='tour-card__header'>
        <div className='tour-card__picture' id={tour.tourPictureID}></div>
        <h2 className='tour-card__heading'>
          <span className='tour-card__heading-span'>{tour.name}</span>
        </h2>
      </div>
      <div className='tour-card__container u-margin-top-small'>
        <div className='tour-card__container--heading u-margin-bottom-extra-small'>
          {tour.difficulty} {tour.duration}-Day Tour
        </div>
        <div className='tour-card__container--description u-margin-bottom-small'>
          {tour.summary}
        </div>
        <div className='tour-card__container--info'>
          <div className='info__element'>
            <svg className='info__element--logo'>
              <use xlinkHref='/images/icons.svg#icon-map-pin'></use>
            </svg>
            <h6 className='info__element--type'>
              {tour.startLocation.description}
            </h6>
          </div>
          <div className='info__element'>
            <svg className='info__element--logo'>
              <use xlinkHref='/images/icons.svg#icon-calendar'></use>
            </svg>
            <h6 className='info__element--type'>{DisplayDate}</h6>
          </div>
          <div className='info__element'>
            <svg className='info__element--logo'>
              <use xlinkHref='/images/icons.svg#icon-flag'></use>
            </svg>
            <h6 className='info__element--type'>
              {tour.locations.length} Stops
            </h6>
          </div>
          <div className='info__element'>
            <svg className='info__element--logo'>
              <use xlinkHref='/images/icons.svg#icon-user'></use>
            </svg>
            <h6 className='info__element--type'>{tour.maxGroupSize} People</h6>
          </div>
        </div>
      </div>
      <div className='tour-card__footer'>
        <div className='tour-card__footer--left'>
          <h6 className='element'>
            {tour.price} <p>Per Person</p>
          </h6>
          <h6 className='element'>
            {tour.ratingsAverage} <p>Rating({tour.ratingsQuantity})</p>
          </h6>
        </div>
        <div className='tour-card__footer--right'>
          <a
            href={`/tour/${tour.slugURL}`}
            className='btn btn--green btn--details'>
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
