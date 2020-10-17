import React from 'react';

const TourPageAbout = ({
  date,
  difficulty,
  participants,
  rating,
  name,
  totalTG,
}) => {
  const tourGuides = [];
  const TG = () => {
    let i = 0;
    for (i = 0; i < totalTG; i++) {
      const el = (
        <li key={i} className='tour-guides'>
          <img src='/images/face-image-test.jpg' alt='tour guide' />
          <h3>Tour Guide {i + 1}</h3>
          <h4>Name {i + 1}</h4>
        </li>
      );
      console.log(i);
      tourGuides.push(el);
    }
  };
  TG();

  return (
    <section className='page-about'>
      <div className='page-about--left'>
        <div className='page-about--left__content u-margin-bottom-medium'>
          <h2 className='page-about--left__content--heading heading-secondary u-margin-bottom-small'>
            Quick Facts
          </h2>
          <ul className='page-about--left__items'>
            <li className='page-about--left__items-list u-margin-bottom-extra-small'>
              <svg className='items--logo'>
                <use xlinkHref='/images/icons.svg#icon-calendar'></use>
              </svg>
              <h3>Next Date</h3>
              <h4>{date}</h4>
            </li>
            <li className='page-about--left__items-list u-margin-bottom-extra-small'>
              <svg className='items--logo'>
                <use xlinkHref='/images/icons.svg#icon-trending-up'></use>
              </svg>
              <h3>Difficulty</h3>
              <h4>{difficulty}</h4>
            </li>
            <li className='page-about--left__items-list u-margin-bottom-extra-small'>
              <svg className='items--logo'>
                <use xlinkHref='/images/icons.svg#icon-user'></use>
              </svg>
              <h3>Participants</h3>
              <h4>{participants} People</h4>
            </li>
            <li className='page-about--left__items-list u-margin-bottom-extra-small'>
              <svg className='items--logo'>
                <use xlinkHref='/images/icons.svg#icon-star'></use>
              </svg>
              <h3>Ratings</h3>
              <h4>{rating} / 5</h4>
            </li>
          </ul>
        </div>
        <div className='page-about--left__content u-margin-bottom-medium'>
          <h2 className='page-about--left__content--heading heading-secondary u-margin-bottom-small'>
            Your Tour Guides
          </h2>
          <ul className='page-about--left__items'>{tourGuides}</ul>
        </div>
      </div>
      <div className='page-about--right'>
        <h2 className='page-about--right__heading heading-secondary u-margin-bottom-small'>
          About {name} Tour
        </h2>
        <p className='page-about--right__description u-margin-bottom-extra-small'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          scelerisque nisi lorem, at congue tellus posuere ut. Donec mattis
          ipsum sit amet urna hendrerit, imperdiet tincidunt arcu elementum. In
          dignissim porta tincidunt. Suspendisse sagittis leo in dictum
          fringilla. Morbi at orci urna. Proin non purus id quam auctor
          ultricies eu a nisl. Aenean egestas eros vel rhoncus ullamcorper.
          Praesent lorem turpis, faucibus at tempus ac, pulvinar sed est. Sed
          sed iaculis dolor, ut malesuada erat.
        </p>
        <p>
          Cras posuere, justo et facilisis fermentum, massa enim maximus diam,
          vel ullamcorper augue dui sit amet justo. Praesent a odio rutrum,
          rhoncus mauris ac, finibus tellus. Quisque quis nibh eu turpis
          molestie aliquam. In viverra ligula leo, vel fringilla nisl vestibulum
          vitae. Curabitur eleifend tellus velit, et vulputate arcu faucibus
          vitae. In posuere mauris eget diam interdum, vel accumsan lectus
          commodo. Fusce vitae est neque. Etiam id risus sed nibh commodo
          consequat porta vel orci. Nulla lobortis justo neque, vel ultricies
          dolor iaculis ac.
        </p>
      </div>
    </section>
  );
};

export default TourPageAbout;
