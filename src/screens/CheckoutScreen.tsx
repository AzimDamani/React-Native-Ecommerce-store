import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AddToCartBtn from '../atoms/AddtoCartBtn';
import InputFeild from '../atoms/InputFeild';
import CheckoutCartItem from '../atoms/CheckoutCartItem';

const CheckoutScreen = ({ navigation }: any) => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    contact: Yup.string().matches(/^\d{10}$/, 'Contact must be a valid 10-digit number').required('Contact is required'),
  });

  const handleSubmit = () => {
    navigation.navigate('OrderPlaced');
  };

  return (

    <View style={styles.container}>
      <Formik
        initialValues={{ name: '', address: '', contact: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <View >
            <Text style={styles.header}>Shipping Details</Text>
            <InputFeild placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name} />
            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
            <InputFeild placeholder="Address"
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address} />
            {touched.address && errors.address && <Text style={styles.error}>{errors.address}</Text>}
            <InputFeild placeholder="Contact"
              keyboardType="phone-pad"
              onChangeText={handleChange('contact')}
              onBlur={handleBlur('contact')}
              value={values.contact} />
            {touched.contact && errors.contact && <Text style={styles.error}>{errors.contact}</Text>}
          </View>
        )}
      </Formik>
      <Text style={styles.header}>Cart Items</Text>
      <View style={styles.cartContainer}>
        <FlatList
          data={cartItems}
          style={styles.list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <CheckoutCartItem title={item.title} price={item.price} quantity={item.quantity} />
            </View>
          )}
        />
      </View>
      <Text style={styles.total}>Total: Rs {totalPrice.toFixed(2)}</Text>

      <AddToCartBtn title={'Place Order'} onPress={handleSubmit}/>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  cartContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
  cartItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
  },
  total: {
    fontSize: 20,
    fontWeight: '900',
    marginVertical: 10,
    color: 'white',
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
  list: {
    height: 300,
    padding: 5,
  },
});
