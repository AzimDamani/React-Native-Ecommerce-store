import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
    onPress: () => void,
    title: string
}

const CartBtn = ({onPress, title}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CartBtn;

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'white',
        width: '10%',
        padding:5,
        margin:'auto',
        borderRadius: 5,
        borderWidth:1,
        minWidth:100,
    },
    txt:{
        color:'black',
        textAlign:'center',
        fontSize:10,
    },
});
