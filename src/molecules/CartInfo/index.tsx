import { View } from 'react-native';
import React from 'react';
import CartItem from '../../atoms/CartItem';
import { Product } from '../../types/Product';

type Props = {
    item : Product,
}

const CartInfo = ({item}: Props) => {
  return (
    <View>
      <CartItem title={item.title} price={item.price} quantity={item.quantity} />
    </View>
  );
};

export default CartInfo;
