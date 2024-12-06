import { StyleSheet, TextInput} from 'react-native';
import React from 'react';

type Props = {
    placeholder: string,
    onChangeText: any,
    onBlur?: any,
    value: string,
    keyboardType?: any,
}

const InputFeild = ({placeholder, onChangeText, onBlur, value, keyboardType}: Props) => {
  return (
    <TextInput placeholder={placeholder}
    style={styles.input}
    onChangeText={onChangeText}
    onBlur={onBlur}
    value={value}
    keyboardType={keyboardType}/>
  );
};

export default InputFeild;

const styles = StyleSheet.create({
    input: {
        color:'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
      },
});
