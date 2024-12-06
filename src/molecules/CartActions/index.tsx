import { StyleSheet, View } from 'react-native';
import React from 'react';
import CartBtn from '../../atoms/CartBtn';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../../store/CartSlice';
import { Product } from '../../types/Product';

type Props = {
    item: Product,
}

const CartActions = ({item}: Props) => {
    const dispatch = useDispatch();
  return (
    <View style={styles.cardbtn}>
            <CartBtn onPress={() => dispatch(incrementQuantity(item.id))} title="➕" />
            <CartBtn onPress={() => dispatch(decrementQuantity(item.id))} title="➖" />
            <CartBtn onPress={() => dispatch(removeFromCart(item.id))} title="🗑️" />
    </View>
  );
};

export default CartActions;

const styles = StyleSheet.create({
    cardbtn: {
        marginTop:10,
        flexDirection:'row',
        justifyContent:'flex-end',
      },
});
