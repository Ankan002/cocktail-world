import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const RoundCard = (props) => {

  const {text, color, marginRight} = props

  return (
    <LinearGradient
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}}
      colors={color}
      style={[styles.BubbleContainer, {marginRight: marginRight}]}
    >
      <Text style={styles.BubbleText}>{text}</Text>
    </LinearGradient>
  );
};

export default RoundCard;
