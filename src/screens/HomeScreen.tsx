import {StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../organisms/productCard';
import { getAllCategories, getAllPosts, getDataByCategory } from '../services/Home';
import { ActivityIndicator } from 'react-native';
import HomeTemplate from '../template/HomeScreen';

const HomeScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getAllPosts,
  });

  const { data: categoryData, isLoading: catLoading, isError: catError, error: catErrorMsg } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  const { data: singleCategoryData, isLoading: singleCatLoading, isError: singleCatError, error: singleCatErrorMsg } = useQuery({
    queryKey: ['productsByCategory', category],
    queryFn: () => getDataByCategory(category),
    enabled: !!category,
  });

  const RenderItem = useCallback(
    ({ item }: { item: any }) => (
      <ProductCard
        onPress={() => navigation.navigate('ProductDetailsScreen', { productDetails: item })}
        source={{ uri: item.image }}
        rating={item.rating.rate}
        title={item.title}
        price={item.price}
      />
    ),
    [navigation]
  );

  if (isLoading || catLoading || singleCatLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000000" style={styles.loader} />
      </View>
    );
  }
  if (isError) {
    return (
      <View>
        <Text>{error?.message}</Text>
      </View>
    );
  }
  if (catError) {
    return (
      <View>
        <Text>{catErrorMsg?.message}</Text>
      </View>
    );
  }
  if (singleCatError) {
    return (
      <View>
        <Text>{singleCatErrorMsg?.message}</Text>
      </View>
    );
  }

  const FilterData = (category ? singleCategoryData : data).filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (

<View  style={styles.container}>
  <HomeTemplate search={search} setSearch={setSearch} setCategory={setCategory} categoryData={categoryData} category={category} FilterData={FilterData} RenderItem={RenderItem}/>
</View>
  );
};

export default React.memo(HomeScreen);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'black',
    flex: 1,
  },

  loader: {
    flex: 1,
    margin: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
