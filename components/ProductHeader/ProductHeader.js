import { View, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const image = require('../../assets/images/background.jpg')

const ProductHeader = () => {

  const navigation = useNavigation()

  const onBackClick = () => {
    console.log('Back')
    navigation.goBack()
  }

  return (
    <ImageBackground 
      source={image} 
      resizeMode='cover' 
      borderBottomRightRadius={110} 
      borderBottomLeftRadius={110}
      width='100%'
      height={190}
      style={styles.HeaderContainer}
    >
      <View style={styles.overlay}/>
      <View style={styles.HeaderBar}>
        <Pressable onPress={onBackClick} style={styles.BackButton}>
          <Ionicons name='chevron-back' size={28} color='#FFC600' />
        </Pressable>
        <View style={styles.notificationIcon}>
          <Ionicons name='notifications' size={28} color='#FFC600'  />
        </View> 
      </View>
    </ImageBackground>
  );
};

export default ProductHeader;
