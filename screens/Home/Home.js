import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from './styles'
import HomeHeader from '../../components/HomeHeader'
import HomeBody from '../../components/HomeBody';
import { useSelector } from 'react-redux';

const Home = () => {

  const globalLoading = useSelector((state) => state.globalLoading.value)

  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <HomeHeader />
      {
        (globalLoading) ? (
          <View style={styles.LoadingContainer}>
            <ActivityIndicator size='large' color='#B8405E' />
          </View>
        ): (
          <View style={styles.BodyContainer}>
            <HomeBody />
          </View>
        )
      }
    </SafeAreaView>
  );
};

export default Home;
