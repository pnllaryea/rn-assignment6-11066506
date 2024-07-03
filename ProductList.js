import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        numColumns={2} 
        renderItem={({ item }) => (
          <ProductItem product={item} onAddToCart={() => onAddToCart(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});

export default ProductList;
