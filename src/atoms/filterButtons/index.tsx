import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
    key?: string | number,
    selected? :boolean,
    onPress: () => void,
    title: string,
    style?: any,
}

const FilterButton = ({key, onPress,selected, title, style}: Props) => {
  return (
    <TouchableOpacity key={key} onPress={onPress} style={[selected === false ? styles.btn : styles.sBtn , style]}>
        <Text style={selected === false ? styles.txt : styles.sTxt }>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
    btn:{
        borderWidth:1,
        borderRadius:5,
        borderColor:'#a4a4a4',
        padding:2,
        width:'30%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        marginRight:5,
        marginBottom:10,
        height:30,
    },
    txt:{
        color:'black',
        fontWeight:500,
        fontSize:11,
    },
    sTxt:{
        color:'white',
        fontWeight:900,
        fontSize:13,
    },
    sBtn:{
        borderWidth:1,
        borderRadius:5,
        borderColor:'#686868',
        padding:2,
        width:'30%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        marginRight:5,
        marginBottom:10,
        height:30,
    },
});
