import { ScrollView, ToastAndroid} from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/CartSlice';

import ProductDetailsTemplate from '../template/ProductDetails';

const ProductDetailsScreen = ({ route }: any) => {
  const dispatch = useDispatch();
  const data = route.params.productDetails;

  const addDataToCart = () => {
    console.log('Data added to cart');
    ToastAndroid.showWithGravityAndOffset('Item Added to cart', ToastAndroid.SHORT, ToastAndroid.CENTER,50,50);
    // AsyncStorage.setItem()
    dispatch(addToCart(data));

  };
  return (
    <ScrollView>
      <ProductDetailsTemplate data={data} onPress={addDataToCart}/>
    </ScrollView>
  );
};

export default React.memo(ProductDetailsScreen);


