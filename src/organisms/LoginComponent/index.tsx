import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import InputFeild from '../../atoms/InputFeild';

type Props = {
  username: string,
  password: string,
  setUsername: any,
  setPassword: any,
  onPress: any,
  loading: any,
}

const LoginComponent = ({ username, password, setUsername, setPassword, onPress, loading }: Props) => {
  return (
    <View>
      <InputFeild placeholder={'Enter Username'} onChangeText={setUsername} value={username} />
      <InputFeild placeholder={'Enter Password'} onChangeText={setPassword} value={password} />
      <TouchableOpacity onPress={onPress}>
        {loading === true ?
          <View>
            <Text style={styles.loginTxt}>Please Wait....</Text>
            <View>
              <ActivityIndicator size="large" color="white" style={styles.loader} />
            </View>
          </View> : <View style={styles.btn}>
            <Text style={styles.loginBtnTxt}>Log In</Text>
          </View>}
      </TouchableOpacity>
    </View>
  );
};

export default LoginComponent;


const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
    elevation: 5,
  },
  loginTxt: {
    textAlign: 'center',
    color: 'white',
  },
  loader: {
    flex: 1,
    margin: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnTxt: {
    textAlign: 'center',
    color: 'black',
  },
});
