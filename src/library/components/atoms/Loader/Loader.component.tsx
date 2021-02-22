import React from 'react';
import {ActivityIndicator, StyleProp, ViewStyle} from 'react-native';

//types
type LoaderProps = {
  size?: 'small' | 'large';
  style?: StyleProp<ViewStyle>;
};

export const Loader: React.FC<LoaderProps> = ({size = 'large', style}) => {
  return <ActivityIndicator color="#017C61" size={size} style={style} />;
};
