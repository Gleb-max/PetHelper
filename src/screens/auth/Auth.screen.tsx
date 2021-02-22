import React from 'react';

//views
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {AuthView, AuthItem} from './Auth.view';

//types
type AuthScreenProps = {};

//images
import welcome from '@assets/images/auth/welcome/image.png';
import login from '@assets/images/auth/login/image.png';
import register from '@assets/images/auth/register/image.png';
// import restore from '@assets/images/auth/restore/image.png';

//constants
const authInfo: AuthItem[] = [
  {
    type: 'welcome',
    image: welcome,
  },
  {
    type: 'login',
    image: login,
  },
  {
    type: 'register',
    image: register,
  },
  {
    type: 'restore',
    image: register,
  },
];

//values
let currentIndex = 0;

export const AuthScreen: React.FC<AuthScreenProps> = ({}) => {
  //state
  const [_activeIndex, _setActiveIndex] = React.useState(currentIndex);

  //callbacks
  const setActiveIndex = (index: number) => {
    currentIndex = index;
    _setActiveIndex(currentIndex);
  };

  return (
    <AuthView
      authScreens={authInfo}
      activeIndex={_activeIndex}
      setActiveIndex={setActiveIndex}
    />
  );
};
