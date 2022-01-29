import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import RoundCard from '../RoundCard/RoundCard';
const bottle = require('../../assets/images/bottle.png')

const ProductHero = (props) => {

  const {image, category, glass, alcoholic, ingredients, title} = props

  let allIngredient = ''

  for(let ingredient of ingredients){
    if(ingredient === '' || ingredient === null) continue
    allIngredient += ingredient + ", " 
  }

  allIngredient = allIngredient.substring(0, allIngredient.length - 2)

  return (
    <View style={styles.HeroContainer}>
      <View style={styles.LeftContainer}>
          <Image source={bottle} style={styles.DrinkImage} />
          <Text style={styles.DrinksTitle}>{title}</Text>
          <Text style={styles.IngredientsTitle}>Ingredients</Text>
          <Text style={styles.IngredientsText}>{allIngredient}</Text>
      </View>
      <View style={styles.RightContainer}>
          <RoundCard text={category} color={['#B8405E', '#5800FF']} marginRight={2} />
          <RoundCard text={glass} color={['#B8405E', '#5800FF']} marginRight={32} />
          <Image source={{uri: image}} style={styles.DrinkServingStyle}/>
          <RoundCard 
            text={alcoholic} 
            color={(alcoholic === 'Alcoholic') ? ['#E60965', '#DA1212'] : ['#7CD1B8', '#2EB086']} 
            marginRight={92} 
          />
      </View>
    </View>
  );
};

export default ProductHero;
