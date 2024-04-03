import { router } from "expo-router";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ThankYouScreen: React.FC = () => {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        router.push("../Start");
      })
      .catch((error) => {
        error.message;
      });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank you for using</Text>
      <Image
        source={require("../../assets/images/SM4.png")}
        style={styles.image}
      />
      <TouchableOpacity
        style={{
          height: 60,
          width: 150,
          backgroundColor: "red",
          justifyContent: "center",
          borderRadius: 20,
        }}
        onPress={handleLogout}
      >
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
        >
          LogOut
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF0FA",
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    bottom: 35,
  },
  shopmate: {
    fontSize: 33,
    fontWeight: "bold",
    color: "black",
    bottom: 30,
  },
  image: {
    width: 250, // Adjust as needed
    height: 70, // Adjust as needed
    marginBottom: 20,
    bottom: 50,
  },
});

export default ThankYouScreen;
