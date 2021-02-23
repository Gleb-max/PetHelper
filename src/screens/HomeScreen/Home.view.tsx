import React from 'react';
import {View, Text} from 'react-native';

//styles
import styles from './Home.styles';

//types
type HomeViewProps = {};

export const HomeView: React.FC<HomeViewProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};
