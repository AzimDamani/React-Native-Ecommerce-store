import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
    title: string,
    price: number,
    quantity: number | undefined,
}

const CartItem = ({ title, price, quantity }: Props) => {
    return (
        <View>
            <View>
                <Text style={styles.txt}>{title}</Text>
                <Text style={styles.txt}>Rs {price}</Text>
            </View>
            <View>
                <Text style={styles.quatTxt}>🛒 {quantity}</Text>
            </View>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    quatTxt:{
        fontSize:20,
        fontWeight:700,
        textAlign:'right',
        justifyContent:'center',
    }
    ,
    txt:{
        color:'#3c3c3c',
        fontWeight: 900,
        fontSize: 20,
    },
});
