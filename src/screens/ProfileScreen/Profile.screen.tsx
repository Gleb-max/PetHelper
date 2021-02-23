import React from 'react';

//redux
import {store} from 'redux/store';

//actions
import {logout} from 'redux/actions';

//views
import {ProfileView} from './Profile.view';

//types
type ProfileScreenProps = {};

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  return <ProfileView logout={() => store.dispatch(logout())} />;
};
