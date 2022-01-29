import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.HeaderText}>Cocktail World</Text>
    </View>
  );
};

export default HomeHeader;
