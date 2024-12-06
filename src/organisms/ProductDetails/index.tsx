import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import ProductInfo from '../../molecules/ProductDetails';
import { Product } from '../../types/Product';


type Props = {
data: Product,
onPress: any,
}
const ProductDetailsOrganism = ({data, onPress}: Props) => {
  return (
    <View>
      <View style={styles.imageContainer}>
          <Image source={{ uri: data.image }} height={300} width={300} resizeMode="contain" />
        </View>
        <ProductInfo data={data} onPress={onPress}/>
    </View>
  );
};

export default ProductDetailsOrganism;

const styles = StyleSheet.create({
    imageContainer: { margin: 'auto', padding:10 },
});
