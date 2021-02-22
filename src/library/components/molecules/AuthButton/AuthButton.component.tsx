import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TouchableOpacity, ViewStyle, StyleProp, TextStyle} from 'react-native';

//styles
import styles from './AuthButton.styles';

//components
import {MontserratText} from 'library/components/atoms';

//types
type AuthButtonProps = {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  reverse?: boolean;
};

export const AuthButton: React.FC<AuthButtonProps> = ({
  onPress,
  text,
  style,
  textStyle,
  reverse = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, reverse && styles.containerReverse, style]}>
      <MontserratText
        type={'Semibold'}
        size={'m1'}
        style={[styles.text, reverse && styles.textReverse, textStyle]}>
        {text}
      </MontserratText>
    </TouchableOpacity>
  );
};
