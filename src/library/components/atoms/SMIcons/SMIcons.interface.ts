import {TextStyle, StyleProp} from 'react-native';
import {Icons} from 'library/types';

export type SMIconsProps = {
  name: Icons.SMIconsName;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  width?: number;
  height?: number;
};
