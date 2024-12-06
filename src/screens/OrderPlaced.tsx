import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OrderPlaced = () => {
  return (
    <View style={styles.fullPage}>
      <Text style={styles.txt}>
        Order Placed 🎉🎉
      </Text>
    </View>
  );
};

export default OrderPlaced;

const styles = StyleSheet.create({
  fullPage:{
    backgroundColor:'black',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  txt:{
    color:'white',
    textAlign:'center',
    fontSize:30,
    fontWeight:200,
  },
});
