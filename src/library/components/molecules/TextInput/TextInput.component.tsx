import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, TextStyle, ViewStyle, View} from 'react-native';

//other deps
import {TextField} from 'react-native-material-textfield';

//styles
import styles from './TextInput.styles';

type CustomTextInputProps = {
  value?: string;
  placeholder?: string;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad';
  isPassword?: boolean;
  onChange?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
  labelTextStyle?: StyleProp<TextStyle>;
  onSubmitEditing?: () => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
};

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChange,
  placeholder,
  keyboardType = 'default',
  isPassword = false,
  style = styles.empty,
  labelTextStyle = styles.empty,
  onSubmitEditing,
  autoCapitalize = 'none',
}) => {
  return (
    <TextField
      onFocus={() => {}}
      baseColor={'#FFFFFF'}
      value={value}
      onChangeText={onChange}
      label={placeholder}
      keyboardType={keyboardType}
      textColor={'#161844'}
      labelFontSize={17}
      fontSize={18}
      tintColor={'#FFFFFF'}
      onSubmitEditing={onSubmitEditing}
      blurOnSubmit={isPassword}
      underlineColorAndroid={'transparent'}
      lineWidth={1}
      style={styles.text}
      labelTextStyle={[styles.labelText, labelTextStyle]}
      containerStyle={[styles.container, style]}
      autoCapitalize={autoCapitalize}
    />
  );
};
