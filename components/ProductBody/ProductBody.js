import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const ProductBody = (props) => {

  const {instructions} = props

  return (
    <View style={styles.ProductBodyContainer}>
      <Text style={styles.InstructionsTitle}>Instructions</Text>
      <Text style={styles.InstructionsText}>{instructions}</Text>
    </View>
  );
};

export default ProductBody;
