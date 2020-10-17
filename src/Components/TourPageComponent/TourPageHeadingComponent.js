import React from 'react';

const TourPageHeading = ({
  tourID,
  tourName,
  tourStartLocation,
  tourDuration,
}) => {
  return (
    <div className='tour-page--heading'>
      <div className='tour-page--heading__picture' id={tourID}>
        <h2 className='tour-page--heading__picture-heading'>
          <span className='tour-page--heading__picture-heading--span'>
            {tourName}
          </span>
        </h2>
        <div className='tour-page--heading__picture-info'>
          <h6 className='duration'>
            <svg className='info__element--logo info__element--logo-heading'>
              <use xlinkHref='/images/icons.svg#icon-clock'></use>
            </svg>
            {tourDuration} Days
          </h6>
          <h6 className='location'>
            <svg className='info__element--logo info__element--logo-heading'>
              <use xlinkHref='/images/icons.svg#icon-map-pin'></use>
            </svg>
            {tourStartLocation}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default TourPageHeading;
