
import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Events from "../Events";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontisto } from '@expo/vector-icons';
import Promo from "../Promo";


const TabTwoScreen: React.FC = () => (
  <ScrollView style={styles.container}>
    <View style={styles.box}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text1}>What are you looking for?</Text>
        </View>
        {/* Profile Photo */}
        <Image
          source={require("../../assets/images/maleAvatar.jpg")}
          style={styles.profilePhoto}
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View
          style={{
            height: 50,
            flex: 0.5,
            backgroundColor: "white",
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fontisto name="map-marker-alt" size={24} color="black" marginLeft={80} />
        </View>
        <View
          style={{
            height: 50,
            width: 30,
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{marginRight: 140, color: '#2E77E5'}}>Current Location</Text>
          <Text style={{ fontWeight: "bold", fontSize: 22, marginRight: 33 }}>
            Kzone Shopping Mall
          </Text>
        </View>
      </View>
    </View>

    {/* Promotions */}
    <Text style={styles.promotionsText}>Promotions</Text>
    <ScrollView>
      <Promo />
    </ScrollView>

    <Text style={styles.eventsText}>
      Event Calender
    </Text>
 <ScrollView>
    <Events />
  </ScrollView>
  </ScrollView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7F4", // Changed background color
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 40,
    color: "white",
  },
  text1: {
    fontSize: 18,
    marginLeft: 40,
    marginTop: -5,
    color: "white",
  },

  box: {
    width: "105%",
    height: 230,
    backgroundColor: "#2E77E5",
    alignSelf: "center", // Centers the box horizontally
    borderBottomEndRadius: 55,
    borderBottomStartRadius: 55,
    alignContent: "center",
    justifyContent: "center",
  },

  promotionsText: {
    paddingTop: 10,
    fontSize: 18,
    marginLeft: 30,


    color: "black",
    fontWeight: "bold",
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  promotionsImage: {
    width: 220,
    height: 220,
    borderRadius: 10,
    alignSelf: "center",
  },
  eventsText: {
    fontSize: 18,
    marginLeft: 30,
    marginTop:20,
    marginBottom: -50,
    color: "black",
    fontWeight: "bold",
  },
  eventBox1: {
    width: 280,
    height: 130,
    backgroundColor: "white", // Adjust this value as needed
    alignSelf: "center", // Centers the box horizontally
    marginLeft: 2,
    borderRadius: 25,

  },
  eventBox2: {
    width: 280,
    height: 130,
    backgroundColor: "white", // Adjust this value as needed
    alignSelf: "center", // Centers the box horizontally
    marginLeft: 2,
    borderRadius: 25,
  },
  date: {
    fontSize: 16,
    marginLeft: 140,
    marginTop: -5,
    color: "black",
    fontWeight: "bold",
  },

});


export default TabTwoScreen;

