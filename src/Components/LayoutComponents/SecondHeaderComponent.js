import React from 'react';

const SecondHeader = () => {
  return (
    <header className='second-header'>
      <a href='/tours' className='second-header__content--left'>
        All Tours
      </a>

      <img
        src='/images/logo-white.png'
        alt='Logo'
        className='second-header__content--center'
      />
      <section className='second-header__content--right'>
        <a href='/login' className='second-header__content--login'>
          Log In
        </a>
        <a href='/signup'>
          <button
            type='button'
            className='btn second-header__content--signup'>
            Sign Up
          </button>
        </a>
      </section>
    </header>
  );
};

export default SecondHeader;
