import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, FlatList, View, ScrollView } from 'react-native';
import ShopCard from '@/components/ShopCard'; 
import { Ionicons } from '@expo/vector-icons';
import { FIREBASE_DB } from '@/Firebaseconfig';
import { collection, query, where, onSnapshot } from 'firebase/firestore';




const SearchableShopList = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (text: string | null) =>
    setSelectedCategory(text);

  const [shopList, setShopList] = useState<any[]>([]);

  const handleFetchStaff = async () => {
    const shopRef = collection(FIREBASE_DB, "shop");
    const querySnapshot = query(
      shopRef,
      where("category", "==", selectedCategory)
    );

    onSnapshot(selectedCategory === null ? shopRef : querySnapshot, {
      next: (snapshot) => {
        const staff: any[] = [];
        snapshot.docs.forEach((doc) => {
          staff.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log("Shop List: ", staff);
        setShopList(staff);
      },
    });
  };

  useEffect(() => {
    handleFetchStaff();
  }, [selectedCategory]);


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
      
      <ScrollView>
        {shopList.map((shop) => (
          <ShopCard
            key={shop.id}
            id={shop.id}
            name={shop.name}
            logo={shop.image}
            rating={shop.rating}
            category={shop.category}
          />
        ))}
      </ScrollView>
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
