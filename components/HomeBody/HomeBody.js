import { View, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import { useSelector } from 'react-redux';
import DrinkCard from '../DrinkCard';

const HomeBody = () => {

  const drinks = useSelector((state) => state.drinks.value)

  return (
    <View style={styles.BodyContainer}>
      <FlatList
        data={drinks} 
        renderItem={({item}) => <DrinkCard drink={item} />}
        keyExtractor={(item) => item.idDrink}
        style={styles.FlatListStyle}
      />
      
    </View>
  );
};

export default HomeBody;
