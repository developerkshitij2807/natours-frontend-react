import React from 'react';

const ReviewCard = () => {
  return (
    <div className='review-card'>
      <div className='review-card__heading u-margin-bottom-small'>
        <img
          src='/images/face-image-test.jpg'
          alt=''
          className='review__card--image'
        />
        <h2 className='review__card--name'>First Name Last Name</h2>
      </div>

      <p className='u-margin-bottom-small'>
        Nullam at leo sem. Mauris tincidunt quam lacinia mattis pretium. Aliquam
        dapibus dolor ac elit dignissim molestie. Fusce orci magna, mollis sed
        risus eu, mattis consectetur erat.
      </p>

      <div className='review-card__stars'>
        <svg className='info__element--logo'>
          <use xlinkHref='/images/icons.svg#icon-star'></use>
        </svg>
        <svg className='info__element--logo'>
          <use xlinkHref='/images/icons.svg#icon-star'></use>
        </svg>
        <svg className='info__element--logo'>
          <use xlinkHref='/images/icons.svg#icon-star'></use>
        </svg>
        <svg className='info__element--logo'>
          <use xlinkHref='/images/icons.svg#icon-star'></use>
        </svg>
        <svg className='info__element--logo'>
          <use xlinkHref='/images/icons.svg#icon-star'></use>
        </svg>
      </div>
    </div>
  );
};

export default ReviewCard;
