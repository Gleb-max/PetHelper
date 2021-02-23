import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//styles
import styles from './Profile.styles';

//types
type ProfileViewProps = {
  logout: () => void;
};

export const ProfileView: React.FC<ProfileViewProps> = ({logout}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logout}>
        <Text>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
};
