import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';

//styles
import styles from './NextButton.styles';

//components
import {SMIcons} from 'library/components/atoms';

//types
type NextButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const NextButton: React.FC<NextButtonProps> = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <SMIcons
        name="ic_next"
        width={26}
        height={26}
        size={26}
        color={'#FFFFFF'}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};
