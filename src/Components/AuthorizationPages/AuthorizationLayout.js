import React from 'react';
import SecondFooter from '../LayoutComponents/SecondFooterComponent';
import SecondHeader from '../LayoutComponents/SecondHeaderComponent';

const AuthorizationLayout = ({type}) => {
  if (type === 'login') {
    return (
      <div>
        <title>Natours | Log Into Your Account</title>
        <SecondHeader />
        <div className='authorization-card'>
          <div className='authorization-card__content'>
            <h2 className='authorization-card__content--heading u-margin-bottom-medium'>
              Log into your account
            </h2>
            <ul className='nav-credentials'>
              <li className='nav-credentials__items u-margin-bottom-small'>
                <h4 className='nav-credentials__items--label u-margin-bottom-extra-small'>
                  Email Address
                </h4>
                <input
                  type='email'
                  placeholder='you@example.com'
                  className='nav-credentials__items--input'
                  required='true'
                />
              </li>
              <li className='nav-credentials__items u-margin-bottom-medium'>
                <h4 className='nav-credentials__items--label'>Password</h4>
                <input
                  type='password'
                  placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                  className='nav-credentials__items--input'
                  required='true'
                />
              </li>
              <button type='submit' className='btn--green btn-text'>
                Login
              </button>
            </ul>
          </div>
        </div>
        <SecondFooter />
      </div>
    );
  } else if (type === 'signup') {
    return (
      <div>
        <title>Natours | Sign Up! Create Your Account Now</title>
        <SecondHeader />
        <div className='authorization-card'>
          <div className='authorization-card__content'>
            <h2 className='authorization-card__content--heading u-margin-bottom-medium'>
              Sign up! create your account now
            </h2>
            <ul className='nav-credentials'>
              <li className='nav-credentials__items u-margin-bottom-small'>
                <h4 className='nav-credentials__items--label u-margin-bottom-extra-small'>
                  Name
                </h4>
                <input
                  type='textarea'
                  placeholder='Please Enter Name'
                  className='nav-credentials__items--input'
                />
              </li>
              <li className='nav-credentials__items u-margin-bottom-small'>
                <h4 className='nav-credentials__items--label u-margin-bottom-extra-small'>
                  Email Address
                </h4>
                <input
                  type='email'
                  placeholder='you@example.com'
                  className='nav-credentials__items--input'
                />
              </li>
              <li className='nav-credentials__items u-margin-bottom-small'>
                <h4 className='nav-credentials__items--label u-margin-bottom-extra-small'>
                  Password
                </h4>
                <input
                  type='password'
                  placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                  className='nav-credentials__items--input'
                />
              </li>
              <li className='nav-credentials__items u-margin-bottom-medium'>
                <h4 className='nav-credentials__items--label u-margin-bottom-extra-small'>
                  Confirm Password
                </h4>
                <input
                  type='password'
                  placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                  className='nav-credentials__items--input'
                />
              </li>
              <button type='submit' className='btn--green btn-text'>
                Sign Up
              </button>
            </ul>
          </div>
        </div>
        <SecondFooter />
      </div>
    );
  }
};

export default AuthorizationLayout;
