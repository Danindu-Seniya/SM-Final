import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, TextInput, FlatList, View, ScrollView } from 'react-native';
import ShopCard from '@/components/ShopCard'; 
import { Ionicons } from '@expo/vector-icons';
import { FIREBASE_DB } from '@/Firebaseconfig';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const SearchableShopList = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (text: string | null) =>
    setSelectedCategory(text);

  const [shopList, setShopList] = useState<any[]>([]);
  const [showCamera, setShowCamera] = useState(false); // State to track whether to show the camera
  
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

  const handleCameraPress = () => {
    // Logic to open camera
    setShowCamera(true);
  };
  
  // Filter shopList based on searchText
  const filteredShopList = shopList.filter((shop) =>
    shop.name.toLowerCase().includes(searchText.toLowerCase())
  );
  
  return (
    <GestureHandlerRootView style={styles.container}>
      
        
      
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
        {filteredShopList.map((shop) => (
          <TouchableOpacity key={shop.id} onPress={handleCameraPress}>
          <ShopCard
            key={shop.id}
            id={shop.id}
            name={shop.name}
            logo={shop.image}
            rating={shop.rating}
            category={shop.category}
          />
         </TouchableOpacity> 
        ))}
      </ScrollView>
      
      {showCamera && (
          <Camera style={styles.camera} />
        )}
    </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7F4',
  },
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
  camera: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
  },
});

export default SearchableShopList;
