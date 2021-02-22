import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Text, TextStyle, StyleProp} from 'react-native';

//types
type MontserratTextProps = {
  type: 'Medium' | 'Semibold';
  size: 'm1' | 'm2';
  styleText?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

export const MontserratText: React.FC<MontserratTextProps> = ({
  type = 'Medium',
  size,
  styleText,
  style,
  children,
}) => {
  let fontSize;
  switch (size) {
    case 'm1':
      fontSize = 18;
      break;
    case 'm2':
      fontSize = 13;
      break;
    default:
      break;
  }

  return (
    <Text
      style={[
        {fontFamily: `Montserrat-${type}`, fontSize: fontSize},
        style,
        styleText,
      ]}>
      {children}
    </Text>
  );
};
