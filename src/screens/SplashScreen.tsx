import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';


const SplashScreen = ({navigation}: any) => {
  // const status = useSelector((state: any) => state.auth.token);

    useEffect(() => {
      setTimeout(() =>{
        // if(status !== null){
        //   navigation.navigate("HomeScreen");
        // }
        // else{
        //   navigation.navigate("LoginScreen");
        // }
        navigation.navigate('LoginScreen');
      }, 2000);
    },[navigation]);
  return (
    <View style={styles.fullPage}>
      <Text style={styles.text}>Black Market</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  fullPage:{
    flex: 1,
    margin:'auto',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    width:'100%',
  },
  text:{
    fontSize:40,
    fontWeight:900,
    color:'white',
  },
});
