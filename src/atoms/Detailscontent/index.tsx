import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title: string,
    category: string,
    description: string,
    price: number,
    rate: number,
    count: number
}

const DetailsContent = ({ title, category, description, price, rate, count }: Props) => {
    return (
        <View>
            <View style={styles.rating}>
            <Text style={styles.rateTxt}>⭐ {rate} - </Text>
            <Text style={styles.countTxt}>{count}</Text>
            </View>
            <Text style={styles.titleTxt}>{title}</Text>
            <Text style={styles.catTxt}>{category}</Text>
            <Text style={styles.descrTxt}>{description}</Text>
            <Text style={styles.priceTxt}>Rs. {price}</Text>
            
        </View>
    )
}

export default DetailsContent

const styles = StyleSheet.create({
    rating:{
        flexDirection:"row",
        marginBottom:10
    },
    titleTxt:{
        color:"white",
        fontWeight:900,
        fontSize:25
    },
    catTxt:{
        color:"#8b8b8b",
        fontWeight:700,
        fontSize:20,
        textAlign:"right",
        marginTop:10,
        marginBottom:10
    },
    descrTxt:{
        color:"#d0d0d0",
        fontWeight:200,
        fontSize:20
    },
    rateTxt:{
        color:"white",
        fontWeight:200,
        fontSize:15
    },
    countTxt:{
        color:"white",
        fontWeight:200,
        fontSize:15
    },
    priceTxt:{
        color:"white",
        fontWeight:700,
        fontSize:25,
        marginTop:20
    }
})