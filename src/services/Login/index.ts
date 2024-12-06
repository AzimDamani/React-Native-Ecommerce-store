import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { Dispatch } from 'redux';
import { loginSuccess } from '../../store/AuthSlice';


interface LoginProps {
  username: string;
  password: string;
  dispatch: Dispatch;
  navigation: any;
  setLoading: (loading: boolean) => void;
}

export const handleLogin = async ({ username, password, dispatch, navigation, setLoading }: LoginProps) => {
  if (!username || !password) {
    Alert.alert('Error', 'Please fill all fields');
    return;
  }

  setLoading(true);

  try {
    const response = await axios.post('https://fakestoreapi.com/auth/login', {
      username,
      password,
    });

    if (response.data?.token) {
      await AsyncStorage.setItem('authToken', response.data.token);
      dispatch(loginSuccess(response.data.token));
      navigation.replace('TabNavigation');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  } catch (err) {
    console.error('Login failed:', err);
    Alert.alert('Error', 'Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
};
