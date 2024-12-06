import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Product } from '../../types/Product';
import DetailsContent from '../../atoms/Detailscontent';
import AddToCartBtn from '../../atoms/AddtoCartBtn';


type Props = {
    data: Product,
    onPress: () => void,
}
const ProductInfo = ({data, onPress}: Props) => {
  return (
    <View style={styles.productDetails}>
      <DetailsContent title={data.title} category={data.category} description={data.description} price={data.price} rate={data.rating.rate} count={data.rating.count} />
      <AddToCartBtn onPress={() => onPress()} title={'Add to Cart'} />
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
    productDetails:{ backgroundColor: 'black', borderTopRightRadius: 30, borderTopLeftRadius: 30, padding: 20 },
});
