import { StyleSheet, View} from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleLogin } from '../services/Login';
import LoginTemplate from '../template/Login';

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const onSubmit = () => {
    handleLogin({
      username,
      password,
      dispatch,
      navigation,
      setLoading,
    });
  };
  return (
    <View style={styles.fullpage}>
        <LoginTemplate username={username} password={password} setUsername={setUsername} setPassword={setPassword} onPress={onSubmit} loading={loading}/>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  fullpage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
