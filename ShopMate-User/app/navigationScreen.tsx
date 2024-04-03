import React, { useState } from 'react';
import { StyleSheet, TextInput, FlatList, View } from 'react-native';
import ShopCard from '@/components/ShopCard'; 
import { Ionicons } from '@expo/vector-icons';

const SearchableShopList = () => {
  const [searchText, setSearchText] = useState('');
  
  // Shop data
  const shops = [
    { id: 1, name: 'Keells', logo: require("../assets/images/Keells.jpg"), rating: '4.5', category: 'Food City' },
    { id: 2, name: 'Odel', logo: require("../assets/images/odel.jpeg"), rating: '5.0', category: 'Clothing' },
    { id: 3, name: 'Softlogic Max', logo: require("../assets/images/SM.png"), rating: '4.5', category: 'Electronics' },
    { id: 4, name: 'Vision Care', logo: require("../assets/images/VC.jpeg"), rating: '5.0', category: 'Electronics' },
    { id: 5, name: 'Roots', logo: require("../assets/images/Roots.jpg"), rating: '4.5', category: 'Food' },
    { id: 6, name: 'Baskin Robbins', logo: require("../assets/images/BR.jpg"), rating: '5.0', category: 'Food' },
    { id: 7, name: 'Burger King', logo: require("../assets/images/BK.png"), rating: '4.5', category: 'Food' },
    { id: 8, name: 'Maxx lite', logo: require("../assets/images/ice-cream.png"), rating: '5.0', category: 'Cinema' },
    
  ];

  // Filter shops based on search text
  const filteredShops = shops.filter(shop =>
    shop.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View className='flex-1 paddingTop-20' style={{ backgroundColor: '#E5E7F4' }}>
      {/* Existing content */}
      <View style={styles.searchContainer}>
        <Ionicons style={styles.searchIcon} name="search" size={24} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search shops..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
          placeholderTextColor="gray"
        />
      </View>
      
      <FlatList
        data={filteredShops}
        renderItem={({ item }) => (
          <ShopCard
            key={item.id}
            name={item.name}
            logo={item.logo}
            rating={item.rating}
            category={item.category}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 10,
    marginBottom: 10,
    width: '90%',
    marginLeft: 20, 
    marginTop: 10
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});

export default SearchableShopList;
