import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
    title: string,
    price: number,
    quantity: number | undefined,
}

const CheckoutCartItem = ({ title, price, quantity }: Props) => {
    return (
        <View>
            <View>
                <Text style={styles.txt}>{title}</Text>
                <Text style={styles.price}>Rs {price}</Text>
            </View>
            <View>
                <Text style={styles.quatTxt}>Quantity - {quantity}</Text>
            </View>
        </View>
    );
};

export default CheckoutCartItem;

const styles = StyleSheet.create({
    quatTxt:{
        fontSize:13,
        fontWeight:500,
        textAlign:'right',
        justifyContent:'center',
    }
    ,
    txt:{
        color:'#3c3c3c',
        fontWeight: 500,
        fontSize: 15,
    },
    price:{
        fontWeight:900,
        fontSize:15,
    },

});
