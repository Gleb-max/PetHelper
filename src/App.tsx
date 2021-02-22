import React from 'react';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './app.navigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
