import { FlatList,StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import AddToCartBtn from '../atoms/AddtoCartBtn';
import { Product } from '../types/Product';
import CartContainer from '../molecules/Cart';

const CartScreen = ({ navigation }: any) => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const RenderItem = useCallback(
    ({ item }: { item: Product }) => {
      return (
        <CartContainer item={item}/>
      );
    },
    []
  );
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={RenderItem}
      />

      <Text style={styles.prixeTxt}>Total - Rs {totalPrice.toFixed(2)}</Text>
      {cartItems.length > 0 ? <AddToCartBtn onPress={() => navigation.navigate('CheckoutScreen')} title={'Proceed to checkout'} /> : ''}
    </View>
  );
};

export default React.memo(CartScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding:10,
  },
  prixeTxt: {
    fontSize: 30,
    textAlign: 'right',
    marginRight: 20,
    fontWeight: 900,
    marginTop: 20,
    color: 'white',
  },
  list:{
    borderRadius:10,
  },
});
