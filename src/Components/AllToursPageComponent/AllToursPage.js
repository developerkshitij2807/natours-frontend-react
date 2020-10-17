import React from 'react';
import MainContent from './MainContentComponent';
import SecondHeader from '../LayoutComponents/SecondHeaderComponent';
import SecondFooter from '../LayoutComponents/SecondFooterComponent';

const AllToursPage = () => {
  return (
    <div className='tours-page'>
      <title>All Tours || Natours</title>
      <SecondHeader />
      <MainContent />
      <SecondFooter />
    </div>
  );
};

export default AllToursPage;
