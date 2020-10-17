import React from 'react';

const SecondFooter = () => {
  return (
    <footer className='second-footer'>
      <div className='second-footer__left'>
        <img
          src='/images/logo-green-small-2x.png'
          alt='Natours'
          className='second-footer__left--logo'
        />
        <h6 className='second-footer__left--copyright'>
          &#169; Developed by Kshitij Dutt in React with the help of Jonas
          Schmedtmann
        </h6>
      </div>
      <div className='second-footer__right'>
        <ul className='nav__list'>
          <li className='nav__list--item'>About Us</li>
          <li className='nav__list--item'>Download App</li>
          <li className='nav__list--item'>Contact</li>
          <li className='nav__list--item'>Careers</li>
          <li className='nav__list--item'>Become A Guide</li>
        </ul>
      </div>
    </footer>
  );
};

export default SecondFooter;
