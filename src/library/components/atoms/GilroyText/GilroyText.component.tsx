import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Text, TextStyle, StyleProp} from 'react-native';

//types
type GilroyTextProps = {
  type: 'Light' | 'Medium' | 'Regular' | 'Semibold';
  size: 'g1' | 'g2';
  styleText?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

export const GilroyText: React.FC<GilroyTextProps> = ({
  type = 'Medium',
  size,
  styleText,
  style,
  children,
}) => {
  let fontSize;
  switch (size) {
    case 'g1':
      fontSize = 27;
      break;
    case 'g2':
      fontSize = 34;
      break;
    default:
      break;
  }

  return (
    <Text
      style={[
        {fontFamily: `Gilroy-${type}`, fontSize: fontSize},
        style,
        styleText,
      ]}>
      {children}
    </Text>
  );
};
