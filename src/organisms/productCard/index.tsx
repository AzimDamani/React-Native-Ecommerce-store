import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props ={
    onPress: () => void,
    source: any,
    rating: number,
    title: number,
    price:number
}

const ProductCard = ({onPress, source, rating, title, price}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
        <View style={styles.productImag}>
            <Image source={source} height={200} width={200} resizeMode="contain"/>
        </View>
        <View>
            <Text>⭐ {rating}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>Rs {price}</Text>
        </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        borderRadius:10,
        padding:20,
        marginBottom:10,
    },
    productImag : {
        justifyContent:'center',
        alignItems:'center',
    },
    price:{
        fontSize:20,
        fontWeight:700,
    },
    title:{
        fontSize:15,
        fontWeight:500,
    },
});
