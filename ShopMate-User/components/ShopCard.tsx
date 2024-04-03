import { router } from "expo-router";
import React, { FC } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

interface ShopCardProps {
  id: string;
  name: string;
  logo: string;
  rating: string;
  category: string;
}

const ShopCard: FC<ShopCardProps> = (props) => {
  const { name, logo, rating, category, id } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: logo,
        }}
        style={styles.logo}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.ratingStars}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</Text>
        </View>
        <Text style={styles.category}>{category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 25,
    alignSelf: "center",
    marginVertical: 5,
    padding: 5,
    height: 130,
    width: '95%',
    justifyContent: 'center',
    alignContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 10,
    height: 120,
    width: 50,
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  rating: {
    fontSize: 15,
    color: "black",
    fontWeight: "100",
    bottom: 0,
  },
  ratingStars: {
    marginLeft: 5,
    color: "black",
    bottom: 0,
  },
  category: {
    color: "black",
    fontSize: 12,
    marginLeft: 5,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ShopCard;
