import React from 'react';
import {LogBox} from 'react-native';

//navigation
import {enableScreens} from 'react-native-screens';

//navigators
import {WelcomeNavigation} from 'screens/WelcomeScreen';
import {AuthNavigation} from 'screens/auth';

//native-powered screen containers
//run before any navigation stacks render
enableScreens();

export const AppNavigation: React.FC = ({}) => {
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  // return <WelcomeNavigation />;
  return <AuthNavigation />;
};
