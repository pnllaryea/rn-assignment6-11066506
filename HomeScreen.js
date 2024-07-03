import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ProductList from '../components/ProductList';
import filterIcon from '../assets/filter.png';
import sortIcon from '../assets/sort.png'; 
import ourStoryImage from '../assets/ourstory.png'; 

const HomeScreen = () => {
  const navigation = useNavigation();

  const [products] = useState([
    { id: '1', name: 'Office Wear', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress1.png') },
    { id: '2', name: 'Black', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress2.png') },
    { id: '3', name: 'Church Wear', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress3.png') },
    { id: '4', name: 'Lamerei', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress4.png') },
    { id: '5', name: '21WN', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress5.png') },
    { id: '6', name: 'Lopo', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress6.png') },
    { id: '7', name: '21WN', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress7.png') },
    { id: '8', name: 'Lame', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress8.png') },
  ]);

  const addToCart = async (product) => {
    try {
      let cartItems = await AsyncStorage.getItem('cart');
      cartItems = cartItems ? JSON.parse(cartItems) : [];
      cartItems.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/Menu.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        <Image source={require('../assets/Logo.png')} style={styles.headerLogo} />
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../assets/Search.png')} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../assets/shoppingBag.png')} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.storyHeader}>
          <Image source={ourStoryImage} style={styles.storyImage} />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => { /* Handle sort button press */ }}>
              <Image source={sortIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Handle filter button press */ }}>
              <Image source={filterIcon} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <ProductList products={products} onAddToCart={addToCart} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 16,
    height: 60,
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  headerLogo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  storyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  storyImage: {
    width: 120, 
    height: 40, 
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default HomeScreen;
