import { StyleSheet, View } from 'react-native';
import React from 'react';
import ProductDetailsOrganism from '../../organisms/ProductDetails';
import { Product } from '../../types/Product';

type Props = {
    data: Product,
    onPress: any,
    }

const ProductDetailsTemplate = ({data, onPress}: Props) => {
  return (
    <View style={styles.page}>
        <ProductDetailsOrganism data={data} onPress={onPress}/>
    </View>
  );
};

export default ProductDetailsTemplate;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
      },
});
