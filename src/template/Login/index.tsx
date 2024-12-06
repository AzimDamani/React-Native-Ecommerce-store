import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginComponent from '../../organisms/LoginComponent';

type Props = {
    username: string,
    setUsername: any,
    password: string,
    setPassword: any,
    loading: boolean,
    onPress: any,
}


const LoginTemplate = ({username, setUsername, password, setPassword, loading, onPress}: Props) => {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.txt}>Login</Text>
      <LoginComponent username={username} password={password} setUsername={setUsername} setPassword={setPassword} onPress={onPress} loading={loading}/>
    </View>
  );
};

export default LoginTemplate;

const styles = StyleSheet.create({
    loginContainer: {
        width: '80%',
        backgroundColor: '#191919',
        borderRadius: 20,
        padding: 20,
        boxShadow: 'rgba(255, 255, 255, 0.77) 0px 2px 25px 1px',
      },
      txt: {
        color: 'white',
        fontSize: 40,
        alignItems: 'flex-start',
        fontWeight: '200',
        marginBottom: 30,
      },
});
