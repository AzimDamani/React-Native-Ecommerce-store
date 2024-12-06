import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    onPress: () => void,
    title: string
}

const AddToCartBtn = ({onPress, title}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AddToCartBtn

const styles = StyleSheet.create({
    btn:{
        backgroundColor:"white",
        padding:10,
        margin:20,
        borderRadius:10
    },
    txt:{
        color:"black",
        fontWeight: 900,
        fontSize:20,
        textAlign:"center"
    }
})