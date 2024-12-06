import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Product } from '../../types/Product';
import CartInfo from '../CartInfo';
import CartActions from '../CartActions';


type Props = {
    item: Product,
}

const CartContainer = ({item}: Props) => {
  return (
    <View style={styles.card}>
      <CartInfo item={item}/>
      <CartActions item={item}/>
    </View>
  );
};

export default CartContainer;

const styles = StyleSheet.create({
    cardbtn: {
        marginTop:10,
        flexDirection:'row',
        justifyContent:'flex-end',
      },
      card: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom:10,
      },
});
