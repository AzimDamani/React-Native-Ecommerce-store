import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import IMAGES from '../images';
import { useDispatch } from 'react-redux';
import { logout } from '../store/AuthSlice';
const Tab = createBottomTabNavigator();

const TabNavigation = ({navigation}: any) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log('loggout pressed');
    dispatch(logout());
    navigation.replace('LoginScreen');
  };

  // const myCart =  useCallback(
  //   ( focused: any ) => {
  //     return (
  //       <Image
  //           source={IMAGES.MYCART}
  //           style={styles.IconFocused ?  focused :  styles.IconNotFocused}
  //       />
  //     );
  //     }, []);
  return (
    <Tab.Navigator initialRouteName="HomeScreen"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
        <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Black Market',
          tabBarIcon: ({ focused }) => (
            <Image source={IMAGES.HOME} style={focused ? styles.IconFocused : styles.IconNotFocused}/>
          ),
          headerRight: () => (
            <View style={styles.logOutBtn}>
              <TouchableOpacity onPress={handleLogout}>
              <Image source={IMAGES.LOGOUT} style={{height:30, width:30, tintColor:'white'}}/>
            </TouchableOpacity>
            </View>
          ),
        }}
        />

        <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
            title:'My Cart',
            tabBarIcon: ({ focused }) => (
              <Image source={IMAGES.MYCART} style={focused ? styles.IconFocused : styles.IconNotFocused}/>
            ),
        }}
        />

{/* <Tab.Screen
  name="CartScreen"
  component={CartScreen}
  options={{
    title: 'My Cart',
    tabBarIcon: myCart,
  }}
/> */}

    </Tab.Navigator>
  );
};

export default TabNavigation;


const styles = StyleSheet.create({
  IconFocused:{height:40, width: 40, tintColor:'#414141'},
  IconNotFocused: {
    height:40, width: 40, tintColor: '#a0a5a8',
  },
  logOutBtn:{
    marginRight:10,
  },
});
