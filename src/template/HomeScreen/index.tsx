import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import SearchBar from '../../atoms/SearchBar';
import Refreshbtn from '../../atoms/ResetBtn';
import FilterButton from '../../atoms/filterButtons';

type Props = {
    search: string,
    setSearch: any,
    setCategory: any,
    categoryData: any,
    category: string,
    FilterData: any,
    RenderItem: any,
}

const HomeTemplate = ({search, setSearch, setCategory, categoryData, category, FilterData, RenderItem}: Props) => {
    return (
        <View>
            <SearchBar value={search}
                onChangeText={setSearch}
                placeholder="Search...🔍"
                placeholderTextColor={'black'} />

            <View style={styles.RefreshBtn}>
                <Refreshbtn onPress={() => setCategory('')} />
            </View>
            {/* usecallback here  */}
            <ScrollView style={styles.scrollView} horizontal={true} contentContainerStyle={styles.scrollInnerContainer}>
                {categoryData.map((CatData: any) => (
                    <FilterButton
                        key={CatData}
                        onPress={() => setCategory(CatData)}
                        title={CatData}
                        selected={category === CatData}
                    />
                ))}
            </ScrollView>

            <FlatList style={styles.prodList}
                data={FilterData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={RenderItem}
                contentContainerStyle={styles.prodInnerContainer}
            />
        </View>
    );
};

export default HomeTemplate;

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: 'black',
      flex: 1,
    },
    scrollView: {
      marginTop: 10,
      marginBottom: 10,
    },
    prodList: {
      borderRadius: 10,
    },
    RefreshBtn: {
      alignItems: 'flex-end',
      marginTop: 10,
    },
    loader: {
      flex: 1,
      margin: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    prodInnerContainer:{
      paddingBottom:200,
    },
    scrollInnerContainer:{
      paddingRight:200,
    },
  });

