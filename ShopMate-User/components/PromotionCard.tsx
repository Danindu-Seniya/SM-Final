import React, { FC } from "react";
import { ScrollView } from "react-native";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

interface PromoCardproos {
  id: string;
  logo: string;
}

const PromoCard: FC<PromoCardproos> = (props) => {
  const { logo, id } = props;

  return (
   
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Image
        source={{ uri: logo }}
        style={styles.logo}
      />
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: "row",
  //   padding: 5,
  // },
  logo: {
    width: 230,
    height: 200,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 5,
  },
});

export default PromoCard;