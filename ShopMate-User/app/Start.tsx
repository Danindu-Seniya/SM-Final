import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";



export default function Start() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/SM7.png')}

        style={styles.imagelogo}
      />
      <View style={{ flexDirection: "row" }}>
      </View>

      <Image
        style={styles.image}
        source={require("../assets/images/home.png")}
      />

      <Text style={styles.midtext}>Your personal shopping companion.</Text>

      <TouchableOpacity
        style={styles.createbtn}
        onPress={()=>router.replace("./auth/RegisterUser")}
      >
        <Text
          style={{color: "black",fontSize: 18,fontWeight: "bold",}}>
          Create account
        </Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", fontSize: 16,fontWeight: "bold", bottom: 50, flexDirection: "row",}}>
        Already have an account?
      </Text>

      <TouchableOpacity
        style={styles.loginbtn}
        onPress={() => router.replace("./auth/LogIn")}
      >
        <Text
          style={{fontSize: 18,color: "white",fontWeight: "bold",bottom: 50, flexDirection: "row",}}>
          Log In
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F7DF1",
    flex: 1,
    justifyContent: "center",
  },
  Shopmate: {
    flex: 1,
    height: 200,
    width: 200,
    paddingTop: 50,
  },
  image: {
    width: 318,
    height: 306,
    marginTop: -25,
    marginHorizontal: 10,
    marginLeft: 20,
    bottom: 60,
    alignSelf: "center",
  },
  midtext: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 20,
    fontWeight: "bold",
    bottom: 50,
    color:'white'
  },
  createbtn: {
    backgroundColor: "white",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
    marginHorizontal: 40,
    borderRadius: 10,
    bottom:90,
  },
  loginbtn:{
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -15,
    marginHorizontal: 40,
    borderRadius: 10,
    color:'white',
    flexDirection: "row",
  },
  imagelogo: {
    width: 338,
    height: 326,
    marginTop: -25,
    marginHorizontal: 10,
    alignSelf:'center',
  },
});

