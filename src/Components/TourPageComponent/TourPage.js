import React from 'react';
import SecondFooter from '../LayoutComponents/SecondFooterComponent';
import SecondHeader from '../LayoutComponents/SecondHeaderComponent';
import TourPageHeading from './TourPageHeadingComponent';
import TourPageAbout from './TourPageAboutComponent';
import TourPagePictures from './TourPagePictures';
import TourPageMap from './TourPageMapComponent';
import ReviewCards from './ReviewsCardsComponent';
import BookTour from './BookingTourComponent';

const TourPage = ({tourData}) => {
  const StartDate = new Date(tourData.startDate);
  const DisplayDate =
    StartDate.toLocaleString('default', {month: 'long'}) +
    ' ' +
    StartDate.getFullYear();
  return (
    <div>
      <SecondHeader />
      <title>{tourData.name} || Natours</title>
      <TourPageHeading
        tourID={tourData.tourPictureID}
        tourName={tourData.name}
        tourStartLocation={tourData.startLocation.description}
        tourDuration={tourData.duration}
      />
      <TourPageAbout
        date={DisplayDate}
        difficulty={tourData.difficulty}
        participants={tourData.maxGroupSize}
        rating={tourData.ratingsAverage}
        name={tourData.name}
        totalTG={tourData.guides.length}
      />
      <TourPagePictures pictures={tourData.images} />
      <TourPageMap locations={tourData.locations} />
      <ReviewCards />
      <BookTour tourImages={tourData.images} tourDays={tourData.duration}/>
      
      <SecondFooter />
    </div>
  );
};

export default TourPage;
