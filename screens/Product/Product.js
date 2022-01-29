import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import ProductHeader from '../../components/ProductHeader';
import ProductHero from '../../components/ProductHero';
import ProductBody from '../../components/ProductBody';

const Product = () => {

  const route = useRoute()

  const {drink} = route.params

  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <ScrollView style={styles.ScreenContainer}>
        <ProductHeader />
        <ProductHero 
          image={drink?.strDrinkThumb}
          category={drink?.strCategory} 
          glass={drink?.strGlass}
          alcoholic={drink?.strAlcoholic}
          ingredients={[
            drink?.strIngredient1,
            drink?.strIngredient2,
            drink?.strIngredient3,
            drink?.strIngredient4,
            drink?.strIngredient5,
          ]}
          title={drink?.strDrink}
        />
        <ProductBody instructions={drink?.strInstructions} />
      </ScrollView>
      <StatusBar 
        backgroundColor="transparent"
        translucent={true}
      />
    </SafeAreaView>
  );
};

export default Product;
