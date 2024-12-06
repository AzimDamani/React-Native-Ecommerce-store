import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

type Props = {
    value: string,
    onChangeText: any,
    placeholder: string,
    placeholderTextColor: string
}

const SearchBar = ({value, onChangeText, placeholder, placeholderTextColor}: Props) => {
  return (
    <TextInput style={styles.bar}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
    />
  );
};

export default SearchBar;


const styles = StyleSheet.create({
    bar:{
        color:'black',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'black',
    },
});
