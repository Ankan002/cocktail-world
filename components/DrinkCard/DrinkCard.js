import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import OctIcons from 'react-native-vector-icons/Octicons'

const DrinkCard = (props) => {

  const {drink} = props
  const navigation = useNavigation()

  const onReadMoreClick = () => {
      navigation.navigate('Product', {drink})
  }

  return (
    <View style={styles.CardContainer}>
      <Image 
        source={{uri: drink?.strDrinkThumb}}
        style={styles.ImageStyle} 
      />
      <View style={styles.InfoContainer}>
          <View style={styles.TextContainer}>
            <OctIcons 
              name="primitive-dot" 
              size={24} 
              color={drink.strAlcoholic === "Alcoholic" ? '#FF5959' : '#2EB086'} 
            />
            <Text style={styles.InfoTitle} numberOfLines={1}>{drink?.strDrink}</Text>
          </View>
          
          <Pressable style={styles.ReadMoreButton} onPress={onReadMoreClick}>
              <Text style={styles.ReadMoreText}>Read More</Text>
          </Pressable>
      </View>
    </View>
  );
};

export default DrinkCard;
