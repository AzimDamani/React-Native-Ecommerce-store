import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import TabNavigation from './TabNavigation';
import OrderPlaced from '../screens/OrderPlaced';

const Stack = createNativeStackNavigator();


const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen"
       >
          <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}/>
          <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{
            title:'Product Details',
          }}
          />
          <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{
            title: 'Place Order',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
          />
          <Stack.Screen
          name="OrderPlaced"
          component={OrderPlaced}
          options={{
            title:'Congratulations',
          }}
          />
          <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            headerShown:false,
          }}
          />
        </Stack.Navigator>
    </NavigationContainer>

  );
};

export default AppNavigation;
